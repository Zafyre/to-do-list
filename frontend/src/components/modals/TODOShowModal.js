import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Styles from "./styles/ShowModal.module.css";
import React, { useState, useContext, useEffect } from "react";
import { tasks } from "../../providers/TasksProvider";
import axios from "axios";

const TODOShowModal = ({ task, open, setOpen }) => {
	const [title, setTitle] = useState(task.title);
	const [description, setDescription] = useState(task.description);
	const [completed, setCompleted] = useState(task.completed);

	const tasksContext = useContext(tasks);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await axios.put(`/todos/${task._id}`, {
				title,
				description,
				completed,
			});
			console.log(res);

			tasksContext.setTasks((prev) => {
				return prev.map((task) => {
					if (task._id === res.data._id) {
						return res.data;
					} else {
						return task;
					}
				});
			});

			setTitle("");
			setDescription("");
			setCompleted(false);

			setOpen(false);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		setTitle(task.title);
		setDescription(task.description);
		setCompleted(task.completed);
	}, [task]);

	return (
		<Modal
			show={open}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header>
				<Modal.Title id="contained-modal-title-vcenter">Edit Task</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className={`${Styles.rightScreen} container`}>
					<div className={Styles.innerContainer}>
						<form
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								gap: "1vh",
								borderBottom: "0.5px black solid",
								paddingBottom: "2vh",
							}}
						>
							<label>Enter your Title</label>
							<br></br>
							<input
								value={title}
								onChange={(e) => {
									setTitle(e.target.value);
								}}
							/>
							<br></br>
							<br></br>
							<label>Enter your Description</label>
							<br></br>
							<textarea
								value={description}
								onChange={(e) => {
									setDescription(e.target.value);
								}}
							/>
							<br></br>
							<br></br>
							<label>Is your task completed?</label>
							<input
								type="checkbox"
								checked={completed}
								onChange={(e) => {
									setCompleted(e.target.checked);
								}}
							/>
							<br></br>
							<button className={"btn btn-primary"} onClick={handleSubmit}>
								Submit
							</button>
						</form>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button
					onClick={() => {
						setOpen(false);
					}}
				>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default TODOShowModal;

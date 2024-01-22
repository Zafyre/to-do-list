import React, { useContext, useState } from "react";
import { Button, Modal, ModalBody, ModalTitle } from "react-bootstrap";
import styles from "./TodoDetails.module.css";
import { tasks } from "../../../../providers/TasksProvider";
import axios from "axios";

const TodoDetails = ({ open, setOpen, task }) => {
	const [comment, setComment] = useState("");

	const tasksContext = useContext(tasks);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await axios.put(`/todos/${task._id}`, {
				comments: [...task.comments, comment],
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

			setComment("");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Modal
			show={open}
			onBackdropClick={() => {
				setOpen(false);
			}}
			onEscapeKeyDown={() => {
				setOpen(false);
			}}
		>
			<ModalTitle>Todo Details</ModalTitle>
			<ModalBody>
				<div>Title: {task.title}</div>
				<div>Description: {task.description}</div>
				<div>
					Attachments:
					<div>
						{task.attachments.map((attachment) => {
							return <img className={styles.image} src={attachment} />;
						})}
					</div>
				</div>
				<div>
					Comments:
					<ul>
						{task.comments.map((cmnt) => {
							return <li>{cmnt}</li>;
						})}
					</ul>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							width: "100%",
						}}
					>
						<input
							style={{
								flexGrow: 1,
								marginRight: "8px",
							}}
							value={comment}
							onChange={(e) => {
								setComment(e.target.value);
							}}
							type="text"
							placeholder="Add a comment"
						/>
						<Button
							onClick={(e) => {
								handleSubmit(e);
							}}
						>
							+ Add
						</Button>
					</div>
				</div>
			</ModalBody>
		</Modal>
	);
};

export default TodoDetails;

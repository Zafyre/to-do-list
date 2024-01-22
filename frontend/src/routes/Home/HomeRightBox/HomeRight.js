import React, { useContext, useState } from "react";
import { tasks } from "../../../providers/TasksProvider";
import Styles from "./styles/HomeRightStyles.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

function HomeRight() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [completed, setCompleted] = useState(false);
	const [attachments, setAttachments] = useState([]);

	const tasksContext = useContext(tasks);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await axios.post("/todos", {
				title,
				description,
				completed,
				attachments,
			});
			console.log(res);

			tasksContext.setTasks((prev) => {
				return [...prev, res.data];
			});

			setTitle("");
			setDescription("");
			setCompleted(false);
		} catch (err) {
			console.log(err);
		}
	};

	return (
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
					<label>Attachments</label>
					<input
						type="file"
						multiple
						accept="image/*"
						onChange={(e) => {
							for (let file of e.target.files) {
								// Base64 encode the file
								let reader = new FileReader();
								reader.readAsDataURL(file);
								reader.onload = () => {
									setAttachments((prev) => {
										return [...prev, reader.result];
									});
								};
								reader.onerror = (err) => {
									console.log(err);
								};
							}
						}}
					/>
					<br></br>
					<button className={"btn btn-primary"} onClick={handleSubmit}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default HomeRight;

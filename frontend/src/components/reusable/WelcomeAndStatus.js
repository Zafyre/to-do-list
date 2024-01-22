import React, { useContext } from "react";
import Styles from "./styles/WelcomeAndStatusStyles.module.css";
import { user } from "../../providers/UserProvider";
import { tasks } from "../../providers/TasksProvider";

function WelcomeAndStatus() {
	const userContext = useContext(user);
	const tasksContext = useContext(tasks);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				gap: "5vh",
			}}
		>
			<h1 className={Styles.mainHeading}>
				Welcome, {userContext.user.firstName}
			</h1>

			{/* all details dashboard */}
			<div className={Styles.allTodoDetails}>
				<div
					className={Styles.allTodoDetailsBox}
					style={{ boxShadow: "5px 5px 20px 0px rgba(11, 181, 2, 0.5)" }}
				>
					<h4 style={{ color: "rgba(11, 181, 2, 0.7)", fontWeight: "bold" }}>
						{"COMPLETED"}
					</h4>
					<h3 style={{ color: "rgba(11, 181, 2, 0.7)", fontWeight: "bolder" }}>
						{tasksContext.tasks.filter((task) => task.completed).length}
					</h3>
				</div>

				<div
					className={Styles.allTodoDetailsBox}
					style={{ boxShadow: "5px 5px 20px 0px rgba(255, 0, 0, 0.5)" }}
				>
					<h4 style={{ color: "rgba(255, 0, 0, 0.7)", fontWeight: "bold" }}>
						{"INCOMPLETE"}
					</h4>
					<h3 style={{ color: "rgba(255, 0, 0, 0.7)", fontWeight: "bolder" }}>
						{tasksContext.tasks.filter((task) => !task.completed).length}
					</h3>
				</div>
			</div>
		</div>
	);
}

export default WelcomeAndStatus;

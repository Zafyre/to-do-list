import React, { useContext } from "react";
import { tasks } from "../../../providers/TasksProvider";
import Styles from "./styles/HomeMidStyles.module.css";
import WelcomeAndStatus from "../../../components/reusable/WelcomeAndStatus";
import TasksBox from "../../../components/reusable/TasksBox";

function HomeMid(props) {
	const tasksContext = useContext(tasks);

	return (
		<div className={Styles.midScreen}>
			{/* heading and current active status */}
			<WelcomeAndStatus />
			
			
			<div className={Styles.showsAllTasks}>
				{tasksContext.tasks.map((task) => {
					return <TasksBox key={task._id} task={task} />;
				})}
			</div>
		</div>
	);
}

export default HomeMid;

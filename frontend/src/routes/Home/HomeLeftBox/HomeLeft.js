import React, { useContext } from "react";
import Styles from "./styles/HomeLeftStyles.module.css";
import { IoMenu } from "react-icons/io5";
import { GrTasks } from "react-icons/gr";
import { MdDownloadDone } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { MdPeople } from "react-icons/md";
import TODO_Animation from "../../../components/Animations/TODO_Animation.json";
import Lottie from "lottie-react";
import { tasks } from "../../../providers/TasksProvider";

function HomeLeft() {
	const tasksContext = useContext(tasks);

	return (
		<div className={`${Styles.leftScreen} container`}>
			<div className={`${Styles.innerContainer}`}>
				{/* top heading */}
				<div className={Styles.topHeading}>
					<h3>Menu</h3>
					<IoMenu size={27} />
				</div>

				

				{/* box 1 */}
				<div className={Styles.box1}>
					<h6>TASKS</h6>

					<div className={Styles.box1Items}>
						<GrTasks size={16} style={{ alignSelf: "center" }} />
						<p>My Tasks</p>
						<div
							className={Styles.box1Current}
							style={{ backgroundColor: "#d105f5" }}
						>
							<p>{tasksContext.tasks.length}</p>
						</div>
					</div>

					<div className={Styles.box1Items}>
						<MdDownloadDone size={18} style={{ alignSelf: "center" }} />
						<p>Completed</p>
						<div
							className={Styles.box1Current}
							style={{ backgroundColor: "#0bb502" }}
						>
							<p>
								{tasksContext.tasks.filter((task) => task.completed).length}
							</p>
						</div>
					</div>

					<div className={Styles.box1Items}>
						<IoTime size={18} style={{ alignSelf: "center" }} />
						<p>Incomplete</p>
						<div
							className={Styles.box1Current}
							style={{ backgroundColor: "#fa2f2f" }}
						>
							<p>
								{tasksContext.tasks.filter((task) => !task.completed).length}
							</p>
						</div>
					</div>

					{/* <div className={Styles.box1Items}>
						<MdPeople size={18} style={{ alignSelf: "center" }} />
						<p>Other Members Tasks</p>
						<div
							className={Styles.box1Current}
							style={{ backgroundColor: "#4a47ff" }}
						>
							<p>3</p>
						</div>
					</div> */}
				</div>

				{/* animation */}
				<Lottie animationData={TODO_Animation} loop={true} />
			</div>
		</div>
	);
}

export default HomeLeft;

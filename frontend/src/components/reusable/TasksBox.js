import React, { useState, useContext } from "react";
import Styles from "./styles/TasksBoxStyles.module.css";
// import { MdFileDownloadDone } from "react-icons/md";
// import { IoCloseOutline } from "react-icons/io5";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { tasks } from "../../providers/TasksProvider";
import TODOShowModal from "../modals/TODOShowModal";
import axios from "axios";
import TodoDetails from "../../routes/Home/HomeMidBox/TodoDetails/TodoDetails";

function TasksBox(props) {
	const [ isModalOpen, setIsModalOpen ] = useState(false);
	const [ isDetailsModalOpen, setIsDetailsModalOpen ] = useState(false);

	const tasksContext = useContext(tasks);

	const handleDelete = async () => {
		try {
			const res = await axios.delete(`/todos/${props.task._id}`);
			console.log(res);

			tasksContext.setTasks((prev) => {
				return prev.filter((task) => {
					return task._id !== props.task._id;
				});
			});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className={ Styles.container }  >
			<div
				style={ {
					flexGrow: 1,
				} }
				onClick={ () => {
					setIsDetailsModalOpen(true);
				} }>
				<h3 className={ Styles.tasksHeading }>{ props.task.title }</h3>
				<p className={ Styles.tasksDescription }>{ props.task.description }</p>
			</div>
			<div>
				<AiFillEdit
					size={ 32 }
					onClick={ (e) => {
						e.stopPropagation();
						setIsModalOpen(true);
					} }
				/>
				<AiFillDelete
					size={ 32 }
					onClick={ () => {
						handleDelete();
					} }
				/>
			</div>
			<TODOShowModal
				open={ isModalOpen }
				setOpen={ setIsModalOpen }
				task={ props.task }
			/>
			<TodoDetails
				task={ props.task }
				open={ isDetailsModalOpen }
				setOpen={ setIsDetailsModalOpen }
			/>
		</div>
	);
}

export default TasksBox;

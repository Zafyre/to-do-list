import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const tasks = createContext();

const { Provider } = tasks;

const TasksProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);

	const refreshTasks = async () => {
		try {
			const res = await axios.get("/todos");
			setTasks(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		refreshTasks();
	}, []);

	return (
		<Provider value={{ tasks, setTasks, refreshTasks }}>{children}</Provider>
	);
};

export { tasks, TasksProvider };

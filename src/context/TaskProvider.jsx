/* eslint-disable react/prop-types */
import { useReducer } from 'react';
import { tareaReducer } from '../TaskReducer';
import { TaskContext } from './TaskContext';

export const TaskProvider = ({ children }) => {
   const valorInicial = {
		tareas: [],
	};
	const [tareas, dispatch] = useReducer(tareaReducer, valorInicial);
	const tasksCount = tareas.length;
	// const pendingTasksCount = tareas.filter((tarea) => !tarea.done).length;

	const handleAdd = (tarea) => {
		console.log(tarea);
		const action = {
			type: 'Agregar tarea',
			payload: tarea,
		};

		dispatch(action);
	};

	const handleDelete = (id) => {
		const action = {
			type: 'Borrar tarea',
			payload: id,
		};

		dispatch(action);
	};

	const handleUpdate = (tarea) => {
		const action = {
			type: 'Editar tarea',
			payload: tarea,
		};

		dispatch(action);
	};

	const handleCompleteTask = (id) => {
		const action = {
			type: 'Tarea Completa',
			payload: id,
		};

		dispatch(action);
	};

	return (
		<TaskContext.Provider
			value={{
				handleAdd,
				handleUpdate,
				tareas,
				handleDelete,
				handleCompleteTask,
				tasksCount,
				// pendingTasksCount,
			}}>
			{children}
		</TaskContext.Provider>
	);
};

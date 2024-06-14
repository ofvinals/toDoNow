import { useReducer } from 'react';
import { tareaReducer } from '../TaskReducer';

export const useTasks = () => {
	const [tareas, dispatch] = useReducer(tareaReducer, []);
	const tasksCount = tareas.length;
	const pendingTasksCount = tareas.filter(tarea => !tarea.done).length;

	const handleAdd = (tarea) => {
		console.log(tarea)
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

	return {
		handleAdd,
		handleUpdate,
		tareas,
		handleDelete,
		handleCompleteTask,
		tasksCount,
		pendingTasksCount,
	};
};

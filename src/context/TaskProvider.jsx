/* eslint-disable react/prop-types */
import { useReducer } from 'react';
import { TaskContext } from './TaskContext';
import { tareaReducer } from '../reducer/TaskReducer';

export const TaskProvider = ({ children }) => {
	const valorInicial = {
		tareas: [],
	};

	const [state, dispatch] = useReducer(tareaReducer, valorInicial);

	const handleAdd = (tarea) => {
		const action = {
			type: 'Agregar_tarea',
			payload: tarea,
		};
		dispatch(action);
	};

	const handleDelete = (id) => {
		const action = {
			type: 'Borrar_tarea',
			payload: id,
		};
		dispatch(action);
	};

	const handleUpdate = (tarea) => {
		const action = {
			type: 'Editar_tarea',
			payload: tarea,
		};
		dispatch(action);
	};

	const handleCompleteTask = (id) => {
		const action = {
			type: 'Tarea_Completa',
			payload: id,
		};
		dispatch(action);
	};

	return (
		<TaskContext.Provider
			value={{
				tareas: state.tareas,
				handleAdd,
				handleDelete,
				handleUpdate,
				handleCompleteTask,
			}}>
			{children}
		</TaskContext.Provider>
	);
};

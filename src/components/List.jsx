/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { TaskItem } from './TaskItem';
import { TaskContext } from '../context/TaskContext';

export const List = ({ tareas }) => {
	const { handleDelete, handleUpdate, handleCompleteTask } =
		useContext(TaskContext);

	return (
		<>
			<div className='mx-5 flex items-center justify-center gap-4 flex-row flex-wrap'>
				{tareas.length > 0 ? (
					tareas.map((tarea) => (
						<TaskItem
							key={tarea.id}
							tarea={tarea}
							handleUpdate={handleUpdate}
							handleDelete={handleDelete}
							handleCompleteTask={handleCompleteTask}
						/>
					))
				) : (
					<div className='flex justify-center items-center w-full my-20'>
						<h1 className='bg-violet-400 text-4xl text-white p-5 font-semibold rounded-lg'>
							No hay tareas para mostrar
						</h1>
					</div>
				)}
			</div>
		</>
	);
};

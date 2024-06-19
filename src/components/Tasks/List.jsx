/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { TaskItem } from './TaskItem';
import { TaskContext } from '../../context/TaskContext';

export const List = ({ tareas, type }) => {
	const { handleDelete, handleUpdate, handleCompleteTask } =
		useContext(TaskContext);
	const [currentPage, setCurrentPage] = useState(1);

	const tasksPerPage = 10;

	// Calcular paginación
	const indexOfLastTask = currentPage * tasksPerPage;
	const indexOfFirstTask = indexOfLastTask - tasksPerPage;
	const currentTasks = tareas.slice(indexOfFirstTask, indexOfLastTask);
	const totalPages = Math.ceil(tareas.length / tasksPerPage);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<>
			<div className='flex justify-center my-5'></div>
			<div className='mx-5 flex items-center justify-center gap-4 flex-row flex-wrap'>
				{currentTasks.length > 0 ? (
					currentTasks.map((task) => (
						<TaskItem
							key={task.id}
							tarea={task}
							handleUpdate={handleUpdate}
							handleDelete={handleDelete}
							handleCompleteTask={handleCompleteTask}
						/>
					))
				) : (
					<div className='flex justify-center items-center w-full my-20'>
						<h1 className='bg-violet-400 text-4xl text-white p-5 font-semibold rounded-lg text-center'>
							Sin tareas {type} para mostrar
						</h1>
					</div>
				)}
			</div>
			<div className='flex items-center justify-center mt-4'>
				{Array.from({ length: totalPages }, (_, index) => (
					<button
						key={index}
						onClick={() => paginate(index + 1)}
						className={`bg-pink-700 text-white mx-1 py-2 px-4 border border-gray-300 ${
							currentPage === index + 1 ? 'bg-purple-700' : ''
						}`}>
						{index + 1}
					</button>
				))}
			</div>
		</>
	);
};

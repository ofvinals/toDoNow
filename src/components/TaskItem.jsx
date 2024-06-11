/* eslint-disable react/prop-types */
import { FaTrash } from 'react-icons/fa';
import { TaskUpdate } from './TaskUpdate';

export const TaskItem = ({
	tarea,
	handleUpdate,
	handleDelete,
	handleCompleteTask,
}) => {
	const created = tarea.created;

	const formatDate = (date) => {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		return new Date(date).toLocaleDateString('es-AR', options);
	};

	const formatTime = (date) => {
		const options = { hour: '2-digit', minute: '2-digit' };
		return new Date(date).toLocaleTimeString('es-AR', options);
	};
	return (
		<li className='w-full flex flex-row ml-1 justify-around items-center'>
			<span className='w-[24px] h-[24px]' onClick={() => handleCompleteTask(tarea.id)}>
         <label
					className={`block w-full h-full rounded cursor-pointer ${
						tarea.done ? 'bg-green-400' : 'bg-yellow-500'
					}`}
				></label>
			</span>

			<p className='w-1/5 mx-2 text-center'>
				{formatDate(created)} {formatTime(created)}
			</p>

			<TaskUpdate tarea={tarea} handleUpdate={handleUpdate} />

			<button
				className='bg-red-500 text-xl rounded-full p-2 text-white'
				onClick={() => handleDelete(tarea.id)}>
				<FaTrash />
			</button>
		</li>
	);
};

import { useContext } from 'react';
import { List } from './List';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../../context/TaskContext';

export const Done = () => {
	const { tareas, handleDelete, handleUpdate, handleCompleteTask } =
		useContext(TaskContext);
	const navigate = useNavigate();
	const tasksCount = tareas.length;
	const doneTasks = tareas.filter((tarea) => tarea.done);
	const pendingTasksCount = tareas.filter((tarea) => tarea.done).length;

	return (
		<>
			<div className='w-full flex flex-row justify-around items-center mt-10'>
				<div className='w-1/3'>
					<img src='Coffee break-pana.png' alt='imgtasksdone' />
				</div>
				<div>
					<h2 className='text-3xl font-semibold mb-10 pb-5'>
						Tareas Finalizadas
					</h2>

					<div className='w-full flex flex-row justify-around items-center'>
						<h3>
							N° Tareas:{' '}
							<span className='text-pink-700 font-bold'>
								{tasksCount}
							</span>
						</h3>
						<h3>
							Finalizadas:{' '}
							<span className='text-pink-700 font-bold'>
								{pendingTasksCount}
							</span>
						</h3>
					</div>
					<div className='w-full flex justify-end mt-10'>
						<button
							className=' bg-pink-700 w-fit p-3 rounded-xl font-semibold text-white mb-3 hover:bg-violet-400'
							onClick={() => navigate('/taskadd')}>
							Nueva Tarea
						</button>
					</div>
				</div>
			</div>
			<hr className='bg-black mx-3 h-0.5' />
			<List
				type={'finalizadas'}
				tareas={doneTasks}
				handleDelete={handleDelete}
				handleUpdate={handleUpdate}
				handleCompleteTask={handleCompleteTask}
			/>
		</>
	);
};

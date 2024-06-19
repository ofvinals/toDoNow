import { useContext } from 'react';
import { List } from '../../components/Tasks/List';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../../context/TaskContext';

export const Pending = () => {
	const { tareas, handleDelete, handleUpdate, handleCompleteTask } =
		useContext(TaskContext);
	const navigate = useNavigate();
	const tasksCount = tareas.length;
	const pendingTasks = tareas.filter((tarea) => !tarea.done);
	const pendingTasksCount = tareas.filter((tarea) => !tarea.done).length;

	return (
		<>
			<div className='w-full flex flex-row justify-around  mt-10'>
				<div className='w-1/2 flex flex-col justify-center items-center'>
					<h2 className='text-3xl font-semibold mb-10 pb-5 text-center'>
						Tareas Pendientes
					</h2>

					<div className='w-full flex flex-row justify-around items-center'>
						<h3>
							N° Tareas:{' '}
							<span className='text-pink-700 font-bold'>
								{tasksCount}
							</span>
						</h3>
						<h3>
							Pendientes:{' '}
							<span className='text-pink-700 font-bold'>
								{pendingTasksCount}
							</span>
						</h3>
					</div>
					<div className='w-full flex justify-center mt-10'>
						<button
							className=' bg-pink-700 w-fit p-3 rounded-xl font-semibold text-white mb-3 hover:bg-violet-400'
							onClick={() => navigate('/taskadd')}>
							Nueva Tarea
						</button>
					</div>
				</div>
				<div className='w-1/3'>
					<img src='/Time management-amico.png' alt='imgpending' />
				</div>
			</div>
			<hr className='bg-black mx-3 h-0.5' />
			<List
				type={'pendientes'}
				tareas={pendingTasks}
				handleDelete={handleDelete}
				handleUpdate={handleUpdate}
				handleCompleteTask={handleCompleteTask}
			/>
		</>
	);
};

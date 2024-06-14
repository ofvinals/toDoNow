import { useTasks } from '../hooks/useTask';
import { List } from '../components/List';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const Pending = () => {
	const {
		tareas,
		handleDelete,
		tasksCount,
		pendingTasksCount,
		handleUpdate,
		handleCompleteTask,
	} = useTasks();
	const navigate = useNavigate();

	return (
		<>
			<div className='bg-violet-200'>
				<Navbar />
			</div>

			<div className='flex flex-col justify-center mx-10 mt-10'>
				<div className='w-full flex flex-col justify-center items-center'>
					<h2 className='text-3xl font-semibold pb-5'>
						Tareas pendientes
					</h2>

					<div className='w-1/3 flex flex-row justify-between items-center'>
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
				</div>

				<button
					className=' bg-pink-700 w-fit p-3 rounded-xl font-semibold text-white mb-3 hover:bg-white hover:text-pink-700'
					onClick={() => navigate('/taskadd')}>
					Nueva Tarea
				</button>
				<List
					tareas={tareas}
					handleDelete={handleDelete}
					handleUpdate={handleUpdate}
					handleCompleteTask={handleCompleteTask}
				/>
			</div>
		</>
	);
};

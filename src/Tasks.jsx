import { TaskAdd } from './components/TaskAdd';
import { useTasks } from './hooks/useTask';
import { List } from './components/List';

export const Tasks = () => {
	const {
		handleAdd,
		tareas,
		handleDelete,
		tasksCount,
		pendingTasksCount,
		handleUpdate,
		handleCompleteTask,
	} = useTasks();

	return (
		<>
			<div className='bg-violet-200'>
				<div className='bg-violet-400 flex flex-row rounded-b-3xl'>
					<h1 className='text-start p-6 text-pink-700 text-4xl font-bold '>
						To Do Now!
					</h1>
					<div className='flex flex-row w-full justify-around items-center text-white font-semibold '>
						<h2 className='hover:text-pink-700 hover:underline'>Tareas Pendientes</h2>
						<h2 className='hover:text-pink-700 hover:underline'>Tareas Realizadas</h2>
						<h2 className='hover:text-pink-700 hover:underline'>Ingresar</h2>
						<h2 className='hover:text-pink-700 hover:underline'>Registrar</h2>
					</div>
				</div>

				<div className='flex flex-col justify-center mx-10 mt-10'>
					<div className='w-full flex flex-col justify-center items-center'>
						<h2 className='text-3xl font-semibold pb-5'>
							Lista de tareas pendientes
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

					<div className='w-full items-center flex flex-col py-6'>
						<h3 className='text-2xl font-semibold'>Agregar Tarea</h3>
						<TaskAdd handleAdd={handleAdd} />
					</div>
					<List
						tareas={tareas}
						handleDelete={handleDelete}
						handleUpdate={handleUpdate}
						handleCompleteTask={handleCompleteTask}
					/>
				</div>
			</div>
		</>
	);
};

/* eslint-disable react/prop-types */
import { useTasks } from '../hooks/useTask';
import { TaskItem } from './TaskItem';

export const List = ({tareas}) => {
	const {
	
		handleDelete,
		handleUpdate,
		handleCompleteTask,
	} = useTasks();
	console.log(tareas)
	return (
		<>
		
			<ul className=''>
				{tareas && tareas.map((tarea) => (
					<TaskItem
						key={tarea.id}
						tarea={tarea}
						handleUpdate={handleUpdate}
						handleDelete={handleDelete}
						handleCompleteTask={handleCompleteTask}
					/>
				))}
			</ul>
		</>
	);
};

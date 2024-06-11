/* eslint-disable react/prop-types */
import { TaskItem } from './TaskItem';

export const List = ({
	tareas,
	handleDelete,
	handleUpdate,
	handleCompleteTask,
}) => {
	return (
		<>
			<ul className=''>
				{tareas.map((tarea) => (
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

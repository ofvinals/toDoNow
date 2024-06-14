/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaTrash, FaEdit, FaCheck, FaCheckDouble } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';

export const TaskItem = ({
	tarea,
	handleDelete,
	handleCompleteTask,
	handleUpdate,
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [title, setTitle] = useState(tarea?.title || '');
	const [description, setDescription] = useState(tarea?.description || '');

	const created = tarea?.created;

	const formatDate = (date) => {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		return new Date(date).toLocaleDateString('es-AR', options);
	};

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleCancelClick = () => {
		setIsEditing(false);
		setTitle(tarea.title);
		setDescription(tarea.description);
	};

	const handleSaveClick = () => {
		handleUpdate({ ...tarea, title, description });
		setIsEditing(false);
	};

	return (
		<div className='flex flex-col border-pink-700 border-2 my-5 shadow-2xl rounded-lg'>
			{isEditing ? (
				<div className='max-w-[380px] min-w-[350px] flex flex-col items-center justify-between my-2'>
					<h3 className='text-pink-700 font-bold text-xl py-2'>
						Editar Tarea{' '}
					</h3>
					<input
						type='text'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className='w-3/4 p-2 mb-3 border border-gray-700 rounded'
					/>
					<textarea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						className='w-3/4 p-2 border border-gray-300 rounded'
					/>
					<div className='flex items-center justify-between'>
						<button
							className='bg-green-500 text-white p-4 rounded-xl m-2'
							onClick={handleSaveClick}>
							<FaCheck />
						</button>
						<button
							className='bg-red-500 text-white text-xl p-4 rounded-xl m-2'
							onClick={handleCancelClick}>
							<GiCancel />
						</button>
					</div>
				</div>
			) : (
				<>
					<div className='max-w-[380px] min-w-[350px] flex items-center justify-between my-2'>
						<h3 className='ms-5 w-1/2 font-semibold text-xl'>
							{tarea.title}
						</h3>
						<button
							className={`p-2 rounded-xl m-2 ${
								!tarea.done
									? 'bg-green-500 text-white hover:bg-white hover:text-green-500'
									: 'bg-black'
							}`}
							onClick={() => handleCompleteTask(tarea.id)}
							disabled={tarea.done}>
							{!tarea.done ? (
								<FaCheck />
							) : (
								<FaCheckDouble className='text-white' />
							)}
						</button>
					</div>
					<div className='w-full flex flex-row border border-t-black'>
						<p className='w-full ps-3'>{tarea.description}</p>
					</div>

					<div className='flex flex-row border border-y-black justify-between'>
						<div className='flex justify-center items-center'>
							<p className='text-center ps-3'>
								Creada el {formatDate(created)}
							</p>
						</div>
						<div className='m-5'>
							<button
								className='bg-blue-500 text-xl rounded-full p-2 text-white mx-5 hover:text-blue-500 hover:bg-white'
								onClick={handleEditClick}>
								<FaEdit />
							</button>

							<button
								className='bg-red-500 text-xl rounded-full p-2 text-white hover:text-red-500 hover:bg-white'
								onClick={() => handleDelete(tarea.id)}>
								<FaTrash />
							</button>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

export const TaskAdd = () => {
	const [error, setError] = useState('');
	const { handleAdd } = useContext(TaskContext);
	const { title, description, onInputChange, onResetForm } = useForm({
		title: '',
		description: '',
	});
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (description.trim() === '' || title.trim() === '') {
			setError(
				'El titulo y la descripción de la tarea no pueden estar vacíos'
			);
			return;
		}

		const nuevaTarea = {
			id: new Date().getTime(),
			title: title,
			description: description,
			done: false,
			created: new Date(),
		};
		handleAdd(nuevaTarea);
		onResetForm();
		setError('');
		navigate('/pending');
	};

	return (
		<>
			<div className='flex justify-center'>
				<img
					className='w-1/3'
					src='/scrum method-rafiki.png'
					alt='imgtaskadd'
				/>
			</div>
			<div className='flex flex-col justify-center items-center'>
				<h1 className='text-center text-3xl mb-10 font-bold text-pink-700'>
					Agregar Nueva Tarea
				</h1>
				<div className='w-1/2 flex py-5 border-2 border-pink-400'>
					<form
						className='w-full me-4 flex flex-col items-center justify-center '
						onSubmit={handleSubmit}>
						<input
							type='text'
							placeholder='Titulo de la tarea...'
							className='w-5/6 py-1 '
							name='title'
							value={title}
							onChange={onInputChange}
						/>
						<textarea
							placeholder='Ingresa tu nueva tarea...'
							className='w-5/6 m-5 py-1 border '
							name='description'
							value={description}
							onChange={onInputChange}
						/>
						{error && (
							<p className='text-red-500 font-semibold mb-3'>{error}</p>
						)}

						<button
							type='submit'
							className='bg-pink-700 p-2 rounded-xl text-white font-semibold hover:bg-violet-400 '>
							Agregar
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

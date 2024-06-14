/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { Navbar } from './Navbar';
import { useNavigate } from 'react-router-dom';
import { useTasks } from '../hooks/useTask';

export const TaskAdd = () => {
	const [error, setError] = useState('');
	const { handleAdd } = useTasks();
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
		console.log(nuevaTarea);
		handleAdd(nuevaTarea);
		onResetForm();
		setError('');
		navigate('/pending');
	};

	return (
		<>
			<div className='bg-violet-200'>
				<Navbar />
			</div>
			<h1 className='text-center text-3xl my-10 font-bold text-pink-700'>
				AGREGAR NUEVA TAREA
			</h1>
			<form
				className='w-full me-4 flex flex-col items-center justify-center'
				onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Titulo de la tarea...'
					className='w-1/2 py-1 '
					name='title'
					value={title}
					onChange={onInputChange}
				/>
				<textarea
					placeholder='Ingresa tu nueva tarea...'
					className='w-1/2 m-5 py-1 border '
					name='description'
					value={description}
					onChange={onInputChange}
				/>
				{error && (
					<p className='text-red-500 font-semibold mb-3'>{error}</p>
				)}

				<button
					type='submit'
					className='bg-blue-400 p-2 rounded-xl text-white font-semibold hover:bg-violet-400 '>
					Agregar
				</button>
			</form>
		</>
	);
};

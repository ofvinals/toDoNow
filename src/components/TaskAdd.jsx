/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useForm } from '../hooks/useForm';

export const TaskAdd = ({ handleAdd }) => {
	const [error, setError] = useState('');
	const { description, onInputChange, onResetForm } = useForm({
		description: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		if (description.trim() === '') {
			setError('La descripción de la tarea no puede estar vacía');
			return;
		}

		const nuevaTarea = {
			id: new Date().getTime(),
			description: description,
			done: false,
			created: new Date(),
		};
		handleAdd(nuevaTarea);
		onResetForm();
		setError('');
	};

	return (
		<>
			<form
				className='w-full me-4 flex flex-row items-center justify-center'
				onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Ingresa tu nueva tarea...'
					className='w-1/2 m-5 py-1 '
					name='description'
					value={description}
					onChange={onInputChange}
				/>

				<button
					type='submit'
					className='bg-blue-400 p-2 rounded-xl text-white font-semibold hover:bg-violet-400 '>
					Agregar Tarea
				</button>
			</form>
			{error && <p className='text-red-500 font-semibold'>{error}</p>}
		</>
	);
};

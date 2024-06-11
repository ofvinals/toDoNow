/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../hooks/useForm';

export const TaskUpdate = ({ tarea, handleUpdate }) => {
	const { updateDescription, onInputChange } = useForm({
		updateDescription: tarea.description,
	});
console.log(tarea)
	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	const onSubmitUpdate = (e) => {
		e.preventDefault();

		const id = tarea.id;
		const description = updateDescription;

		handleUpdate(id, description);

		setDisabled(!disabled);

		focusInputRef.current.focus();
	};

	return (
		<form onSubmit={onSubmitUpdate} className=''>
			<input
				type='text'
				className={`w-[350px] bg-violet-200 ${
					tarea.done ? 'line-through' : ''
				}`}
				name='updateDescription'
				value={updateDescription}
				onChange={onInputChange}
				readOnly={disabled}
				ref={focusInputRef}
			/>

			<button className='bg-blue-500 text-xl rounded-full p-2 mx-2 my-3 text-white' type='submit'>
				<FaEdit />
			</button>
		</form>
	);
};

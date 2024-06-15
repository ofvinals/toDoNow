/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';

const EditableRow = ({ contact, handleUpdate, handleCancelClick }) => {
	const [name, setName] = useState(contact.name);
	const [subname, setSubname] = useState(contact.subname);
	const [tel, setTel] = useState(contact.tel);
	const [email, setEmail] = useState(contact.email);

	const handleSaveClick = () => {
		handleUpdate({ ...contact, name, subname, tel, email });
	};

	return (
		<tr>
			<td>
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
					className='w-full p-2 mb-3 border border-gray-700 rounded'
				/>
			</td>
			<td>
				<input
					type='text'
					value={subname}
					onChange={(e) => setSubname(e.target.value)}
					className='w-full p-2 mb-3 border border-gray-700 rounded'
				/>
			</td>
			<td>
				<input
					type='tel'
					value={tel}
					onChange={(e) => setTel(e.target.value)}
					className='w-full p-2 mb-3 border border-gray-700 rounded'
				/>
			</td>
			<td>
				<input
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className='w-full p-2 mb-3 border border-gray-700 rounded'
				/>
			</td>
			<td className='flex items-center'>
				<button
					className='bg-green-500 text-white p-2 rounded-xl m-2'
					onClick={handleSaveClick}>
					<FaCheck />
				</button>
				<button
					className='bg-red-500 text-white p-2 rounded-xl m-2'
					onClick={handleCancelClick}>
					<GiCancel />
				</button>
			</td>
		</tr>
	);
};

export default EditableRow;

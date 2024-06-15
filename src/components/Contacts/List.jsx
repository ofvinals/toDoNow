/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaTrash, FaEdit, FaStar, FaRegStar } from 'react-icons/fa';
import EditableRow from './EditableRow';
import Search from './Search';

export const List = ({
	contacts,
	handleDelete,
	handleFavorite,
	handleUpdate,
}) => {
	const [editingContactId, setEditingContactId] = useState(null);
	const [searchQuery, setSearchQuery] = useState('');
	const [currentPage, setCurrentPage] = useState(1);

	const handleEditClick = (id) => {
		setEditingContactId(id);
	};

	const handleCancelClick = () => {
		setEditingContactId(null);
	};

	const contactsPerPage = 10;
	const filteredContacts = contacts.filter(
		(contact) =>
			contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			contact.subname.toLowerCase().includes(searchQuery.toLowerCase()) ||
			contact.tel.toLowerCase().includes(searchQuery.toLowerCase()) ||
			contact.email.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const indexOfLastContact = currentPage * contactsPerPage;
	const indexOfFirstContact = indexOfLastContact - contactsPerPage;
	const currentContacts = filteredContacts.slice(
		indexOfFirstContact,
		indexOfLastContact
	);
	const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<>
			<div className='flex flex-col my-5 shadow-2xl '>
				<div className='overflow-x-auto'>
					<Search
						searchQuery={searchQuery}
						setSearchQuery={setSearchQuery}
					/>
					<table className='min-w-full divide-y divide-gray-200'>
						<thead className='bg-gray-50'>
							<tr>
								<th className='px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider'>
									Nombre
								</th>
								<th className='px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider'>
									Apellido
								</th>
								<th className='px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider'>
									Teléfono
								</th>
								<th className='px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider'>
									Email
								</th>
								<th className='px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider'>
									Acciones
								</th>
							</tr>
						</thead>
						<tbody className='bg-white divide-y divide-gray-200'>
							{currentContacts.map((contact) =>
								editingContactId === contact.id ? (
									<EditableRow
										key={contact.id}
										contact={contact}
										handleUpdate={(updatedContact) => {
											handleUpdate(updatedContact);
											setEditingContactId(null);
										}}
										handleCancelClick={handleCancelClick}
									/>
								) : (
									<tr key={contact.id}>
										<td className='px-6 py-4 whitespace-nowrap'>
											<p>{contact.name}</p>
										</td>
										<td className='px-6 py-4 whitespace-nowrap'>
											<p>{contact.subname}</p>
										</td>
										<td className='px-6 py-4 whitespace-nowrap'>
											<p>{contact.tel}</p>
										</td>
										<td className='px-6 py-4 whitespace-nowrap'>
											<p>{contact.email}</p>
										</td>
										<td className='px-6 py-4 whitespace-nowrap flex'>
											<button
												className='bg-blue-500 text-xl rounded-full p-2 text-white mx-1 hover:text-blue-500 hover:bg-white'
												onClick={() => handleEditClick(contact.id)}>
												<FaEdit />
											</button>
											<button
												className='bg-red-500 text-xl rounded-full p-2 text-white mx-1 hover:text-red-500 hover:bg-white'
												onClick={() => handleDelete(contact.id)}>
												<FaTrash />
											</button>
											<button
												className={`text-xl rounded-full p-2 mx-1 ${
													!contact.favorite
														? 'bg-black text-white'
														: 'bg-yellow-500 text-white'
												}`}
												onClick={() => handleFavorite(contact.id)}>
												{!contact.favorite ? (
													<FaRegStar />
												) : (
													<FaStar />
												)}
											</button>
										</td>
									</tr>
								)
							)}
						</tbody>
					</table>
				</div>
			</div>

			<div className='flex items-center justify-center'>
				{Array.from({ length: totalPages }, (_, index) => (
					<button
						key={index}
						onClick={() => paginate(index + 1)}
						className={`bg-pink-700 text-general mx-1 py-2 px-4 border border-gray-300 ${
							currentPage === index + 1 ? 'bg-specific' : ''
						}`}>
						{index + 1}
					</button>
				))}
			</div>
		</>
	);
};

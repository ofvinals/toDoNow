import { useContext, useState } from 'react';
import { ContactContext } from '../../context/ContactContext';
import { List } from './List';
import { useForm } from '../../hooks/useForm';

export const Contacts = () => {
	const { contacts, handleAdd, handleDelete, handleUpdate, handleFavorite } =
		useContext(ContactContext);
	const [error, setError] = useState('');
	const [isAdding, setIsAdding] = useState(false);
	const [showFavorites, setShowFavorites] = useState(false);
	const contactsCount = contacts.length;
	const favoriteContacts = contacts.filter(
		(contact) => contact.favorite
	).length;

	const { name, subname, email, tel, onInputChange, onResetForm } = useForm({
		name: '',
		subname: '',
		email: '',
		tel: '',
	});

	const handleAddContact = () => {
		setIsAdding(true);
	};

	const handleCancel = () => {
		setIsAdding(false);
	};

	const handleShowFavorites = () => {
		setShowFavorites(!showFavorites);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (name.trim() === '' || subname.trim() === '') {
			setError('El nombre y apellido no pueden estar vacíos');
			return;
		}

		const newContact = {
			id: new Date().getTime(),
			name: name,
			subname: subname,
			email: email,
			tel: tel,
			favorite: false,
		};
		handleAdd(newContact);
		onResetForm();
		setError('');
		setIsAdding(false);
	};

	const filteredContacts = showFavorites
		? contacts.filter((contact) => contact.favorite)
		: contacts;

	return (
		<>
			<div>
				<h1 className='text-4xl text-center text-pink-700 font-bold mt-12'>
					Lista de tus Contactos
				</h1>
				<div className='flex flex-row justify-around items-center '>
					{isAdding ? (
						<div className='flex flex-col justify-center items-center my-3'>
							<div className='w-full flex py-5 border-2 border-pink-400'>
								<form
									className='w-full mx-4 flex flex-col items-center justify-center '
									onSubmit={handleSubmit}>
									<input
										type='text'
										placeholder='Nombre...'
										className='w-5/6 py-1 '
										name='name'
										value={name}
										onChange={onInputChange}
									/>
									<input
										type='text'
										placeholder='Apellido...'
										className='w-5/6 m-5 py-1 border '
										name='subname'
										value={subname}
										onChange={onInputChange}
									/>
									<input
										type='number'
										placeholder='Telefono...'
										className='w-5/6 m-5 py-1 border '
										name='tel'
										value={tel}
										onChange={onInputChange}
									/>
									<input
										type='mail'
										placeholder='Email...'
										className='w-5/6 m-5 py-1 border '
										name='email'
										value={email}
										onChange={onInputChange}
									/>
									{error && (
										<p className='text-red-500 font-semibold mb-3'>
											{error}
										</p>
									)}
									<div className='flex flex-row gap-4'>
										<button
											type='submit'
											className='bg-pink-700 p-2 rounded-xl text-white font-semibold hover:bg-violet-400 '>
											Agregar
										</button>
										<button
											type='button'
											className='bg-pink-700 p-2 rounded-xl text-white font-semibold hover:bg-violet-400 '
											onClick={handleCancel}>
											Volver
										</button>
									</div>
								</form>
							</div>
						</div>
					) : (
						<div className='flex flex-col items-center justify-center'>
							<h3 className='w-full mb-10'>
								Contactos Registrados:{' '}
								<span className='text-pink-700 font-bold'>
									{contactsCount}
								</span>
							</h3>
							<h3 className='w-full'>
								Contactos Favoritos:{' '}
								<span className='text-pink-700 font-bold'>
									{favoriteContacts}
								</span>
							</h3>
							<div className='flex gap-4'>
								<button
									className='mt-16 bg-pink-700 w-fit p-3 rounded-xl font-semibold text-white mb-3 hover:bg-violet-400'
									onClick={handleAddContact}>
									Nuevo Contacto
								</button>
								<button
									className='mt-16 bg-pink-700 w-fit p-3 rounded-xl font-semibold text-white mb-3 hover:bg-violet-400'
									onClick={handleShowFavorites}>
									{showFavorites ? 'Ver Todos' : 'Ver Favoritos'}
								</button>
							</div>
						</div>
					)}
					<img
						className='w-1/3'
						src='/Contact us-bro.png'
						alt='imgcontact'
					/>
				</div>
				<hr className='bg-black h-0.5 mx-2' />
			</div>
			<List
				contacts={filteredContacts}
				handleDelete={handleDelete}
				handleUpdate={handleUpdate}
				handleFavorite={handleFavorite}
			/>
		</>
	);
};

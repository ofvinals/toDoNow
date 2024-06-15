/* eslint-disable react/prop-types */
import { useReducer } from 'react';
import { ContactContext } from './ContactContext';
import { contactReducer } from '../reducer/ContactReducer';

export const ContactProvider = ({ children }) => {
	const valorInicial = {
		contacts: [],
	};

	const [state, dispatch] = useReducer(contactReducer, valorInicial);

	const handleAdd = (contacto) => {
		const action = {
			type: 'Agregar_contacto',
			payload: contacto,
		};
		dispatch(action);
	};

	const handleDelete = (id) => {
		const action = {
			type: 'Borrar_contacto',
			payload: id,
		};
		dispatch(action);
	};

	const handleUpdate = (contacto) => {
		const action = {
			type: 'Editar_contacto',
			payload: contacto,
		};
		dispatch(action);
	};

	const handleFavorite = (id) => {
		const action = {
			type: 'contacto_Favorito',
			payload: id,
		};
		dispatch(action);
	};

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				handleAdd,
				handleDelete,
				handleUpdate,
				handleFavorite,
			}}>
			{children}
		</ContactContext.Provider>
	);
};

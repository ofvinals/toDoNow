export const contactReducer = (state, action) => {
	switch (action.type) {
		case 'Agregar_contacto':
			return {
				...state,
				contacts: [...state.contacts, action.payload],
			};

		case 'Borrar_contacto':
			return {
				...state,
				contacts: state.contacts.filter(
					(contact) => contact.id !== action.payload
				),
			};

		case 'Editar_contacto':
			return {
				...state,
				contacts: state.contacts.map((contact) => {
					if (contact.id === action.payload.id) {
						return {
							...contact,
							name: action.payload.name,
							subname: action.payload.subname,
							tel: action.payload.tel,
							email: action.payload.email,
						};
					}
					return contact;
				}),
			};

		case 'contacto_Favorito':
			return {
				...state,
				contacts: state.contacts.map((contact) => {
					if (contact.id === action.payload) {
						return {
							...contact,
							favorite: !contact.favorite,
						};
					}
					return contact;
				}),
			};

		default:
			return state;
	}
};

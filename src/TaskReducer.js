export const tareaReducer = (state, action) => {
	switch (action.type) {
		case 'Agregar tarea':
			return [...state, action.payload];
			

		case 'Borrar tarea':
			return state.filter((tarea) => tarea.id !== action.payload);

		case 'Editar tarea':
			return state.map((tarea) => {
				if (tarea.id === action.payload.id) {
					return {
						...tarea,
						description: action.payload.description,
					};
				}
				return tarea;
			});

		case 'Tarea Completa':
			return state.map((tarea) => {
				if (tarea.id === action.payload) {
					return {
						...tarea,
						done: true,
					};
				}
				return tarea;
			});

		default:
			return state;
	}
};

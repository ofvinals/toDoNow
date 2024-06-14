export const tareaReducer = (state, action) => {
	switch (action.type) {
		case 'Agregar_tarea':
			return {
				...state,
				tareas: [...state.tareas, action.payload],
			};

		case 'Borrar_tarea':
			return {
				...state,
				tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
			};

		case 'Editar_tarea':
			return {
				...state,
				tareas: state.tareas.map((tarea) => {
					if (tarea.id === action.payload.id) {
						return {
							...tarea,
							title: action.payload.title,
							description: action.payload.description,
						};
					}
					return tarea;
				}),
			};

		case 'Tarea_Completa':
			return {
				...state,
				tareas: state.tareas.map((tarea) => {
					if (tarea.id === action.payload) {
						return {
							...tarea,
							done: true,
						};
					}
					return tarea;
				}),
			};

		default:
			return state;
	}
};

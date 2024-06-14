import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
	const navigate = useNavigate();

	return (
		<div className='bg-violet-400 flex flex-row rounded-b-3xl'>
			<h1 className='text-start p-6 text-pink-700 text-4xl font-bold '>
				To Do Now!
			</h1>
			<div className='flex flex-row w-full justify-around items-center text-white font-semibold '>
				<button className='hover:text-pink-700 hover:underline' onClick={() => navigate('/pending')}>
					Tareas Pendientes
				</button>
				<button className='hover:text-pink-700 hover:underline'onClick={() => navigate('/checktask')}>
					Tareas Realizadas
				</button>
				<button className='hover:text-pink-700 hover:underline'onClick={() => navigate('/login')}>
					Ingresar
				</button>
				<button className='hover:text-pink-700 hover:underline'onClick={() => navigate('/register')}>
					Registrar
				</button>
			</div>
			;
		</div>
	);
};

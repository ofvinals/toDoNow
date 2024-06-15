import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
	const navigate = useNavigate();

	return (
		<div className='bg-violet-400 flex flex-col md:flex-row justify-center  rounded-b-3xl'>
			<Link
				to='/'
				className='md:text-start text-center p-6 text-pink-700 text-4xl font-bold w-fit '>
				To Do Now!
			</Link>
			<div className='flex flex-row flex-wrap mb-3 gap-4 justify-around items-center text-white font-semibold '>
				<button
					className='hover:text-pink-700 hover:underline'
					onClick={() => navigate('/pending')}>
					Tareas Pendientes
				</button>
				<button
					className='hover:text-pink-700 hover:underline'
					onClick={() => navigate('/checktask')}>
					Tareas Realizadas
				</button>
				<button
					className='hover:text-pink-700 hover:underline'
					onClick={() => navigate('/contacts')}>
					Contactos
				</button>

			</div>
			;
		</div>
	);
};

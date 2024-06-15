import { useNavigate } from 'react-router-dom';

export const Home = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className='flex flex-col justify-center items-center mx-10 mt-10'>
				<h1 className='text-pink-700 text-4xl font-bold'>
					Bienvenido a TO DO!
				</h1>
				<img
					src='/Work time-amico.png'
					alt='imghome'
					className='mt-10 w-1/2'
				/>
			</div>
			<div className='flex flex-row items-center justify-around mb-16'>
				<button
					onClick={() => navigate('/pending')}
					className='bg-pink-700 text-white font-semibold text-xl rounded-xl px-10 py-5 border hover:bg-white hover:text-pink-700 hover:border-pink-700'>
					Tareas
				</button>
				<button
					onClick={() => navigate('/contacts')}
					className='bg-pink-700 text-white font-semibold text-xl rounded-xl px-10 py-5 border hover:bg-white hover:text-pink-700 hover:border-pink-700'>
					Contactos
				</button>
			</div>
		</>
	);
};

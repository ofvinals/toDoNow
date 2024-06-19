import { Link } from 'react-router-dom';

export const Footer = () => {
	return (
		<div className='bg-violet-400 mt-10 flex flex-col md:flex-row justify-center items-center flex-wrap rounded-t-3xl'>

			<Link
				to='/'
				className='md:text-end text-end p-6 text-pink-700 text-4xl font-bold w-fit '>
				To Do Now!
			</Link>
			<p className='text-white text-center'>
				Desarrollo:
				<a
					className='hover:text-pink-700 font-semibold'
					href='https://ofvdev.netlify.app/'
					target='_blank'>
					{' '}
					OFVDev
				</a>
			</p>
		</div>
	);
};

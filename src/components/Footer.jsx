import { Link } from 'react-router-dom';

export const Footer = () => {
	return (
		<div className='bg-violet-400 mt-10 flex flex-col md:flex-row justify-end md:justify-end items-end flex-wrap rounded-t-3xl'>
			<Link
				to='/'
				className='md:text-end text-end p-6 text-pink-700 text-4xl font-bold w-fit '>
				To Do Now!
			</Link>
		</div>
	);
};
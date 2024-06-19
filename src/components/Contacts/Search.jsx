/* eslint-disable react/prop-types */
const Search = ({ search, setSearch }) => {
	return (
		<div className='w-1/2 mb-4'>
			<input
				type='text'
				placeholder='Buscar contacto...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className='w-full p-2 ms-10 border border-gray-300 rounded'
			/>
		</div>
	);
};

export default Search;

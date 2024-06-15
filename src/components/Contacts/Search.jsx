/* eslint-disable react/prop-types */
const Search = ({ searchQuery, setSearchQuery }) => {
	return (
		<div className='w-1/2 mb-4'>
			<input
				type='text'
				placeholder='Buscar contacto...'
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				className='w-full p-2 ms-10 border border-gray-300 rounded'
			/>
		</div>
	);
};

export default Search;

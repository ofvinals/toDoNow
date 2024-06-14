import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TaskProvider } from '../src/context/TaskProvider';
import { Tasks } from '../src/Tasks';
import { TaskAdd } from '../src/components/TaskAdd';
import { Pending } from '../src/components/Pending';
import { Done } from '../src/components/Done';
import { Navbar } from '../src/components/Navbar';
import { Footer } from '../src/components/Footer';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<TaskProvider>
				<Navbar />
				<Routes>
					<Route path='/' element={<Pending />}></Route>
					<Route path='/taskadd' element={<TaskAdd />}></Route>
					<Route path='/pending' element={<Pending />}></Route>
					<Route path='/checktask' element={<Done />}></Route>
				</Routes>
				<Footer />
			</TaskProvider>
		</BrowserRouter>
	);
};

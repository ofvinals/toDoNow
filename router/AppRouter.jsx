import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TaskProvider } from '../src/context/TaskProvider';
import { Tasks } from '../src/Tasks';
import { TaskAdd } from '../src/components/TaskAdd';
import { Pending } from '../src/components/Pending';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<TaskProvider>
				<Routes>
					<Route path='/' element={<Tasks />}></Route>
					<Route path='/taskadd' element={<TaskAdd />}></Route>
					<Route path='/pending' element={<Pending />}></Route>
				</Routes>
			</TaskProvider>
		</BrowserRouter>
	);
};

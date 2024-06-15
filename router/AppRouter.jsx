import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TaskProvider } from '../src/context/TaskProvider';
import { Home } from '../src/pages/Home';
import { TaskAdd } from '../src/components/Tasks/TaskAdd';
import { Pending } from '../src/components/Tasks/Pending';
import { Done } from '../src/components/Tasks/Done';
import { Navbar } from '../src/components/Navbar';
import { Footer } from '../src/components/Footer';
import { Contacts } from '../src/components/Contacts/Contacts';
import { ContactProvider } from '../src/context/ContactsProvider';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<TaskProvider>
				<ContactProvider>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/taskadd' element={<TaskAdd />}></Route>
						<Route path='/pending' element={<Pending />}></Route>
						<Route path='/checktask' element={<Done />}></Route>
						<Route path='/contacts' element={<Contacts />}></Route>
					</Routes>
					<Footer />
				</ContactProvider>
			</TaskProvider>
		</BrowserRouter>
	);
};

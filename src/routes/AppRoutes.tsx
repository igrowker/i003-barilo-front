import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import PlanTrip from '../pages/PlanTrip';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Error from '@/pages/Error';
import PlanTripGroup from '@/pages/PlanTripGroup';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import Group from '@/pages/Group';

function AppRoutes() {
	return (
		<Router>
			<Header/>
			<Routes>
				<Route path='*' element={<Error />} />
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/plan-trip/group' element={<PlanTripGroup />} />
				<Route path="/plan-trip" element={<PlanTrip />} /> 
				<Route path="group" element={<Group/>}/>
			</Routes>
			<Footer/>
		</Router>
	)
}

export default AppRoutes

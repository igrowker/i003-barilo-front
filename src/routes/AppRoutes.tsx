import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import PlanTrip from '../pages/PlanTrip'
import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Error from '@/pages/Error'
import Access from '@/pages/Access'
import Footer from '@/components/Footer'
import PlanTripGroup from '@/pages/PlanTripGroup'
import Group from '@/pages/Group'
import Home from '@/pages/Home'
import Crowdfunding, { CrowdfundingDonor } from '@/pages/Crowdfunding'
import CrowdfundingForm from '@/pages/CrowdfundingForm'
import MercadoPago from '@/pages/MercadoPago'
import Header from '@/components/Header'
import Payment from '@/pages/Payment'

function AppRoutes() {
	const location = useLocation(); 

	const routesWithHeader = [
		'/home',
		'/group',
		'/access-group',
		'/crowdfunding',
		'/crowdfunding-donor',
		'/crowdfundingForm',
		'/mercadopago',
	];
	return (
		<>
			{routesWithHeader.includes(location.pathname) && <Header />}
			<Routes>
				<Route path='*' element={<Error />} />
				<Route path='/' element={<Landing />} />
				<Route path='/login' element={<Login />} />
				<Route path='/home' element={<Home />} />
				<Route path='/register' element={<Register />} />
				<Route path='/plan-trip/group' element={<PlanTripGroup />} />
				<Route path="/plan-trip" element={<PlanTrip />} /> 
				<Route path="/group" element={<Group/>}/>
				<Route path='/access-group' element={<Access />} />
				<Route path='/crowdfunding' element={<Crowdfunding />} />
				<Route path='/crowdfunding-donor' element={<CrowdfundingDonor />} />
				<Route path='/payment' element={<Payment />} />
				<Route path='/crowdfundingForm' element={<CrowdfundingForm />} />
				 <Route path='/mercadopago' element={<MercadoPago />} /> {/* Para probar los pagos */}
			</Routes>
			<Footer/>
		</>
	)
}

function AppWrapper() {
	return (
		<Router>
			<AppRoutes />
		</Router>
	);
}

export default AppWrapper;

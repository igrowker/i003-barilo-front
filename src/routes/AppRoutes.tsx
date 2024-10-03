import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
import Payment from '@/pages/Payment'
import PaymentMethod from '@/pages/PaymentMethod'
import PaymentMethodCard from '@/pages/PaymentMethodCard'

function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path='*' element={<Error />} />
				<Route path='/' element={<Landing />} />
				<Route path='/login' element={<Login />} />
				<Route path='/home' element={<Home />} />
				<Route path='/register' element={<Register />} />
				<Route path='/plan-trip/group' element={<PlanTripGroup />} />
				<Route path="/plan-trip" element={<PlanTrip />} /> 
				<Route path="group" element={<Group/>}/>
				<Route path='/access-group' element={<Access />} />
				<Route path='/crowdfunding' element={<Crowdfunding/>} />
				<Route path='/crowdfunding-donor' element={<CrowdfundingDonor/>} />
				<Route path='/payment' element={<Payment />} />
				<Route path='/payment-method' element={<PaymentMethod />} />
				<Route path="/payment-method/card" element={<PaymentMethodCard />} />
			</Routes>
			<Footer/>
		</Router>
	)
}

export default AppRoutes;

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
			</Routes>
			<Footer/>
		</Router>
	)
}

export default AppRoutes

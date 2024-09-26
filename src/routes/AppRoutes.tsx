import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PlanTrip from '../pages/PlanTrip'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Error from '@/pages/Error'
import PlanTripGroup from '@/pages/PlanTripGroup'

function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path='*' element={<Error />} />
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/dashboard' element={<PlanTrip />} />
				<Route path='/dashboard/group' element={<PlanTripGroup />} />
			</Routes>
		</Router>
	)
}

export default AppRoutes

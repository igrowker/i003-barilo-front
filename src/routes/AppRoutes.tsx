import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PlanTrip from '../pages/PlanTrip'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Error from '@/pages/Error'

function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path='*' element={<Error />} />
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path="/plan-trip" element={<PlanTrip />} />
			</Routes>
		</Router>
	)
}

export default AppRoutes

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PlanTrip from '../pages/PlanTrip'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Error from '@/pages/Error'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer'

function AppRoutes() {
	return (
		<Router>
			<Header/>
			<Routes>
				<Route path='*' element={<Error />} />
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/dashboard' element={<PlanTrip />} />
			</Routes>
			<Footer/>
		</Router>
	)
}

export default AppRoutes

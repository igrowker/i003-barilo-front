import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import PlanTrip from '../pages/PlanTrip'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Error from '@/pages/Error'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer'
import Access from '@/pages/Access'

function AppRoutes() {
	return (
		<Router>
			<Header/>
			<Routes>
				<Route path='*' element={<Error />} />
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path="/plan-trip" element={<PlanTrip />} />
				<Route path="/access-group" element={<Access />} />
			</Routes>
			<Footer/>
		</Router>
	)
}

export default AppRoutes

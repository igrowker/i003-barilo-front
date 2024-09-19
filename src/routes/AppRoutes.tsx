import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PlanTrip from "../pages/PlanTrip";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/*Cambiar element de login y register cuando esten creadas las pages*/}
        <Route path="/login" element={<Home />} />
        <Route path="/register" element={<Home />} />
        <Route path="/dashboard" element={<PlanTrip />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
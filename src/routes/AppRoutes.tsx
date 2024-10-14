import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import PlanTrip from "@/pages/PlanTrip";
import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Error from "@/pages/Error";
import Access from "@/pages/Access";
import CreateTrip from "@/pages/CreateTrip";
import PlanTripGroup from "@/pages/PlanTripGroup";
import Group from "@/pages/Group";
import Home from "@/pages/Home";
import Crowdfunding, { CrowdfundingDonor } from "@/pages/Crowdfunding";
import CrowdfundingForm from "@/pages/CrowdfundingForm";
import MercadoPago from "@/pages/MercadoPago";
import Header from "@/components/Header";
import Payment from "@/pages/Payment";
import PaymentMethod from "@/pages/PaymentMethod";
import PaymentMethodCard from "@/pages/PaymentMethodCard";
import Destinations from "@/pages/Destinations";
import AppFooter from "@/components/AppFooter";
import PrivateRoute from "./PrivateRoute";
import Profile from "@/components/profile/Profile";
import EditProfile from "@/components/profile/EditProfile";
import ProfileSettings from "@/components/profile/ProfileSettings";
import ForgotPassword from "@/pages/ForgotPassword";
import HelpCenter from "@/pages/helpCenter";
import Language from "@/components/profile/Language";
import { useAuth } from "@/context/AuthProvider";
import Activities from "@/pages/Activities";
import Restaurants from "@/pages/Restaurants";
import ActivityDetailPage from "@/pages/ActivitiesDetailPage";

function AppRoutes() {
  const location = useLocation();
  const { token } = useAuth();

  const showHeaderFooterRoutes = [
    /^\/home$/,
    /^\/group$/,
    /^\/access-group$/,
    /^\/crowdfunding$/,
    /^\/mercadopago$/,
    /^\/payment$/,
    /^\/create-trip$/,
    /^\/destinations$/,
    /^\/activities$/,
    /^\/restaurants$/,
    /^\/activity\/\d+$/,
  ];

  const shouldShowHeaderFooter = () => {
    return showHeaderFooterRoutes.some((pattern) => pattern.test(location.pathname));
  };

  return (
    <>
      {shouldShowHeaderFooter() && <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home token={token} />} />
          <Route path="/create-trip" element={<CreateTrip />} />
          <Route path="/plan-trip/group" element={<PlanTripGroup />} />
          <Route path="/plan-trip" element={<PlanTrip />} />
          <Route path="/group" element={<Group />} />
          <Route path="/access-group" element={<Access />} />
          <Route path="/crowdfunding" element={<Crowdfunding />} />
          <Route path="/crowdfunding-donor" element={<CrowdfundingDonor />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route path="/payment-method/card" element={<PaymentMethodCard />} />
          <Route path="/crowdfundingForm" element={<CrowdfundingForm />} />
          <Route path="/mercadopago" element={<MercadoPago />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activity/:id" element={<ActivityDetailPage />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/profileSettings" element={<ProfileSettings />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/language" element={<Language />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      {shouldShowHeaderFooter() && <AppFooter />}
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default AppWrapper;

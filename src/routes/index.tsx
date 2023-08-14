import { BrowserRouter as Router, Route, Routes as RouterRoutes } from 'react-router-dom';
import { Home } from "../pages/main-site/Home"
import { Aboutus } from '../pages/main-site/Aboutus';
import { Contactus } from '../pages/main-site/contactus';
import { Login } from '../pages/portal/login';
import { Register } from '../pages/portal/register';
import { CustomerDashboard } from '../pages/portal/customer/dashboard';
import { CustomerRegisterParcel  } from '../pages/portal/customer/register-parcel';
import { ShowParcel } from '../pages/portal/customer/show-parcels';
import { Profile } from '../pages/portal/customer/Profile';
import { AdminDashboard } from '../pages/portal/admin/admin-dashboard';
import { AdminRegisterParcel } from '../pages/portal/admin/register-parcel';
import { AdminShowparcel } from '../pages/portal/admin/Show-parcel';

export const AppRoutes = () => {
  return (
    <Router>
      <RouterRoutes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        {/* Add more routes here */}

        {/* Customer Routes */}
        <Route path='/dashboard' element={<CustomerDashboard/>} />
        <Route path='/register-Parcel' element={<CustomerRegisterParcel />} />
        <Route path='/show-Parcel' element={<ShowParcel/>} />
        <Route path='/profile' element={<Profile/>} />
        {/* Admin Routes */}
        <Route path='/mainboard' element={<AdminDashboard/>} />
        <Route path='/main-parcel-registration' element={<AdminRegisterParcel/>} />
        <Route path='/main-show-parcel' element={<AdminShowparcel/>} />

      </RouterRoutes>
    </Router>
  )
}

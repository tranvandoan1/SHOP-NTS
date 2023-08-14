import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Client/Home/Home'
import DetailIndex from '../Client/Detail/DetailIndex'
import "@brainhubeu/react-carousel/lib/style.css";
import '../../components/css/responsive.css'

import '../../components/css/cssAntd.css'
import Login from '../Client/Login/Login';
import SignUp from '../Client/Login/SignUp';
import Admin from '../Admin/Admin';
import Dashboard from '../Admin/Dashboard/Dashboard';
import Products from '../Admin/Product/Products';
import Categories from '../Admin/Categories/Categories';
import Cart from '../Admin/Cart/Cart';
import Setting from '../Admin/Setting/Setting';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/detail" element={<DetailIndex />} />
        <Route path="/admin" element={<Admin />} >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categories" element={<Categories />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="setting" element={<Setting />} />

        </Route>
       
      </Routes>
    </BrowserRouter>

  )
}

export default Router
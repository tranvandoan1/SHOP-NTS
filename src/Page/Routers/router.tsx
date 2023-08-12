import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Client/Home/Home'
import DetailIndex from '../Client/Detail/DetailIndex'
import "@brainhubeu/react-carousel/lib/style.css";
import '../../components/responsive.css'

import '../../components/cssAntd.css'
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailIndex />} />
      </Routes>
    </BrowserRouter>

  )
}

export default Router
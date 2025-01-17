import './App.css'
import { BrowserRouter as Router, Route, Routes,} 
from "react-router-dom";
// import HomePage from './components/Home/HomePage';
import PartnerPage from './components/pages/Partner-with-us/Partner-with-us';
import FoodHotelSearch from './pages/foodHotelSearch/FoodHotelSearch';
import Login from './pages/Login_Sign/Login';
import AllFood from './pages/AllFood/AllFood';
import SignUp from './pages/Login_Sign/Sign';
import UserPage from './pages/UserPgae/UserPage';
import Home from './home/Home';
// import Footer from './components/footer/Footer';
import AdminDashboard from './pages/adminDhasboard/AdminDashboard';





function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/partner-new" element={<PartnerPage/>} />
        <Route path='/search-food' element={<FoodHotelSearch/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/food' element={<AllFood/>}/>
        <Route path='/userpage' element={<UserPage/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  )
}

export default App
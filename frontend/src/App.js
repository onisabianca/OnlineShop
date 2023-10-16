import React from "react";
import "./App.css";
import { BrowserRouter, Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";
import RentalsApartments from "./pages/RentalsApartments";
import RentalsHouses from "./pages/RentalsHouses";
import RentalsStudios from "./pages/RentalsStudios";
import SalesApartments from "./pages/SalesApartments";
import SalesHouses from "./pages/SalesHouses";
import SalesStudios from "./pages/SalesStudios";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login";
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Visit from "./pages/Visit"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element ={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/news" element={<News/>}></Route>
          <Route path="/rentals-apartments" element={<RentalsApartments/>}></Route>
          <Route path="/rentals-houses" element={<RentalsHouses/>}></Route>
          <Route path="/rentals-studios" element={<RentalsStudios/>}></Route>
          <Route path="/sales-apartments" element={<SalesApartments/>}></Route>
          <Route path="/sales-houses" element={<SalesHouses/>}></Route>
          <Route path="/sales-studios" element={<SalesStudios/>}></Route>
          <Route path="/admin" element={<AdminPage/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/visit" element={<Visit/>}></Route>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

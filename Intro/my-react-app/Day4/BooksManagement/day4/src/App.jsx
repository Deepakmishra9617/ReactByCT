import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Login from "./Pages/Login.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import AddBooks from "./Pages/AddBooks.jsx";
import Signup from "./Pages/Signup.jsx";
import Navbar from "./Components/Navbar.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>

      < Navbar  />


        <Routes>
          <Route path="/" element={<Home/> } />
          <Route path="/about" element={<About/> } />
          <Route path="/contact" element={<Contact/> } />
          <Route path="/login" element={<Login/> } />
          <Route path="/signup" element={<Signup/> } />
          <Route path="/*" element={<ErrorPage/> } />
          <Route path="/add-books" element={<AddBooks/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
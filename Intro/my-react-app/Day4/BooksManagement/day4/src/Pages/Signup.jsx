import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import { Link } from "react-router-dom"
import {toast, ToastContainer} from "react-toastify"
import "./SignUp.css"

function Signup() {

  const [errors, setErrors] = useState({});

  const [formData, setformData] = useState({
    userName: "",
    email: "",
    contact: "",
    password: "",
    address: ""
  });

  const formValidator = () => {
    let newErrors = {};
    let { userName, email, contact, password, address } = formData;

    if (userName.trim().length < 2) {
      newErrors.userName = "Username must be at least 2 characters long";
    }

    const isValidName = /^[a-zA-Z]+$/;
    if (!isValidName.test(userName)) {
      newErrors.userName = "Username can only contain letters";
    }

    const isvalidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!isvalidEmail.test(email)) {
      newErrors.email = "Invalid Email";
    }

    const isvalidContact = /^\d{10}$/;
    if (!isvalidContact.test(contact)) {
      newErrors.contact = "Contact must be a 10-digit number";
    }

    let isvalidPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!isvalidPassword.test(password)) {
      newErrors.password = "Invalid Password";
    }


    // No validation for address as per requirements


    if(address.trim().length ===0){
      newErrors.address = "Address is required";
    }


    return newErrors;
  };


  const changeHandler = (e) => {
    let { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const validateErrors = formValidator();
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      // alert("Form submitted successfully");
      toast.success("Form submitted successfully");

      setformData({
        userName: "",
        email: "",
        contact: "",
        password: "",
        address: "",
      });
    }
  };


 return (
  <div className="signup-wrapper">
    <form className="signup-card" onSubmit={submitHandler}>
      <ToastContainer/>

      <h3>SignUp</h3>

      <label>Username:</label>
      <input type="text" name="userName"
        value={formData.userName} onChange={changeHandler} />
      {errors.userName && <span className="error-text">{errors.userName}</span>}

      <label>Email:</label>
      <input type="email" name="email"
        value={formData.email} onChange={changeHandler} />
      {errors.email && <span className="error-text">{errors.email}</span>}

      <label>Contact:</label>
      <input type="number" name="contact"
        value={formData.contact} onChange={changeHandler} />
      {errors.contact && <span className="error-text">{errors.contact}</span>}

      <label>Password:</label>
      <input type="password" name="password"
        value={formData.password} onChange={changeHandler} />
      {errors.password && <span className="error-text">{errors.password}</span>}

      <label>Address:</label>
      <input type="text" name="address"
        value={formData.address} onChange={changeHandler} />
      {errors.address && <span className="error-text">{errors.address}</span>}

      <button type="submit" className="signup-btn">Signup</button>

      <p className="login-text">
        Already have an account? <a href="/login">Login</a>
      </p>

    </form>
  </div>
);
}

export default Signup;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    const userData = {
      username: name,      
      email: email,
      password: password,
    }
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/signup/', userData)
      console.log('response.data==>',response.data)
      console.log('Registration successful');
      setErrors({})
      setSuccess(true)
      setTimeout(() => {
  navigate("/");
}, 1500); 

    }catch(error){
        setErrors(error.response?.data || { non_field_errors: [error.message] });
      console.log("Registration error:",  error.response?.data || error.message)
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-3xl font-bold mb-5 text-center text-gray-900">Signup</h2>

        <label>Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <small>
  {errors.username && <div className="text-red-900">{errors.username[0]}</div>}
</small>


        <label>Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <small>
  {errors.email && <div className="text-red-900">{errors.email[0]}</div>}
</small>


        <label>Password</label>
        <input
          type="password"
          className="w-full p-2 border rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create password"
        />
        <small>{errors.password && <div className="text-red-900">{errors.password[0]}</div>}</small>
       {success && (
  <div className="bg-green-100 border border-green-500 text-green-700 px-4 py-3 mb-5 rounded font-semibold">
    Registration Successful
  </div>
)}

        <button className="w-full bg-gray-900 text-white p-2 rounded-lg text-lg cursor-pointer hover:bg-green-600">
          Signup
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="#" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;

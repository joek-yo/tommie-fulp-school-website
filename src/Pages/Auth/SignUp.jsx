// src/pages/Auth/SignUp.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "student" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" onChange={handleChange} required />
          <select name="role" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" onChange={handleChange}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg font-semibold">Sign Up</button>
        </form>
        <p className="text-center text-gray-600 mt-4">Already have an account? <a href="/signin" className="text-green-600 hover:underline">Sign In</a></p>
      </div>
    </div>
  );
};

export default SignUp;

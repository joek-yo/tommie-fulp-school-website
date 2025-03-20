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
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" className="input-field" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="input-field" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="input-field" onChange={handleChange} required />
          <select name="role" className="input-field" onChange={handleChange}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="btn-primary">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

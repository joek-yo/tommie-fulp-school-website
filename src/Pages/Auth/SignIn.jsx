// src/pages/Auth/SignIn.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signin", formData);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" className="input-field" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="input-field" onChange={handleChange} required />
          <button type="submit" className="btn-primary">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

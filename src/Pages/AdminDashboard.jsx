// src/pages/AdminDashboard.jsx

import React from "react";
import Sidebar from "../components/Sidebar";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar role="admin" />
      <div className="ml-64 p-5 w-full">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600">Manage users, courses, and activities.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;

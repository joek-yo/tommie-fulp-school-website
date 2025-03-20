// src/pages/StudentDashboard.jsx

import React from "react";
import Sidebar from "../components/Sidebar";

const StudentDashboard = () => {
  return (
    <div className="flex">
      <Sidebar role="student" />
      <div className="ml-64 p-5 w-full">
        <h1 className="text-3xl font-bold">Student Dashboard</h1>
        <p className="text-gray-600">View courses, assignments, and progress.</p>
      </div>
    </div>
  );
};

export default StudentDashboard;

// src/pages/TeacherDashboard.jsx

import React from "react";
import Sidebar from "../components/Sidebar";

const TeacherDashboard = () => {
  return (
    <div className="flex">
      <Sidebar role="teacher" />
      <div className="ml-64 p-5 w-full">
        <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
        <p className="text-gray-600">Manage classes, students, and assignments.</p>
      </div>
    </div>
  );
};

export default TeacherDashboard;

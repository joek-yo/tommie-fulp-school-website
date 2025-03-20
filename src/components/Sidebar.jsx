// src/components/Sidebar.jsx

import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ role }) => {
  return (
    <div className="w-64 h-screen bg-blue-900 text-white p-5 fixed">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link to={`/${role}/dashboard`} className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to={`/${role}/profile`} className="hover:text-gray-300">
            Profile
          </Link>
        </li>
        <li>
          <Link to={`/${role}/settings`} className="hover:text-gray-300">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

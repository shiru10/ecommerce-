import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
const Navbar = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(AuthContext);
  const [popupButton, setbuttonPopup] = useState(false);

  const LogoutButtonPopup = () => {
    setbuttonPopup((prev) => !prev);
  };

  const handleLogout = ()=>{
    localStorage.removeItem("userData");
    setUserData(null);
    navigate("/login");
    LogoutButtonPopup();
  }
  return (
    <div className="py-3 px-4 bg-emerald-400 flex justify-between items-center relative">
      <img
        src="https://p1.hiclipart.com/preview/694/135/611/black-n-white-apple-logo-png-clipart-thumbnail.jpg"
        className="max-w-10 max-h-10"
      />
      <div>
        <ul className="list-none flex gap-3 font-medium text-white">
          <li className="list-none">
            {" "}
            <Link to="/">Home </Link>
          </li>
          <li className="list-none">About</li>
        </ul>
      </div>
      <span>
        {userData ? (
          <p className="font-bold text-white cursor-pointer" onClick={LogoutButtonPopup}>
            {userData.username}
          </p>
        ) : (
          <button
            className="bg-white px-4 py-2 rounded-2xl cursor-pointer font-medium text-black text-md"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </span>
      { popupButton &&
        <div className="absolute top-14 right-0 pt-6">
          <button className="bg-emerald-400  px-4 py-2 rounded-2xl cursor-pointer font-medium text-white" onClick={handleLogout}>
            Logout
          </button>
        </div>
      }
    </div>
  );
};

export default Navbar;

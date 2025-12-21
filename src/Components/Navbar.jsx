import { React, useEffect, useRef, useState } from "react";
import { IoCart } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import CartItems from "../Components/CartItems";

const Navbar = () => {
  const navigate = useNavigate();
  const popupRef = useRef(null);
  const popupRefCart = useRef(null);
  const { userData, setUserData } = useContext(AuthContext);
  const [popupButton, setbuttonPopup] = useState(false);
  const [addToCartIcon, setAddToCartIcon] = useState(false);

  const LogoutButtonPopup = () => {
    setbuttonPopup((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUserData(null);
    navigate("/login");
    LogoutButtonPopup();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setbuttonPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRefCart.current && !popupRefCart.current.contains(event.target)) {
        setAddToCartIcon(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      <div className="flex gap-3 justify-center items-center">
        <IoCart
          className="text-white text-2xl cursor-pointer"
          onClick={() => setAddToCartIcon((prev) => !prev)}
        />
        <span>
          {userData ? (
            <p
              className="font-bold text-white cursor-pointer flex gap-1.5 justify-center items-center"
              onClick={LogoutButtonPopup}
            >
              <FaUserCircle />
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
      </div>
      {popupButton && (
        <div ref={popupRef} className="absolute top-14 right-0 pt-6">
          <button
            className="bg-emerald-400  px-4 py-2 rounded-2xl cursor-pointer font-medium text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}

      {addToCartIcon && (
        <div ref={popupRefCart} className="absolute top-18 right-0 bg-white shadow">
          <CartItems />
        </div>
      )}
    </div>
  );
};

export default Navbar;

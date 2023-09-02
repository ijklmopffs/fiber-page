import React, { useState } from "react";
import { Link } from "react-router-dom";
import hero from "../../Assets/hero-Illustration.png";
import star from "../../Assets/star.svg";
import checkmark from "../../Assets/Checkmark.svg";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Fiber</h1>
        <div
          className={
            nav
              ? "flex flex-col md:flex-row items-center justify-between w-3/4 rounded-md left-20 md:w-[45rem] lg:w-[55rem] absolute bg-gray-200 md:static md:bg-transparent p-4 top-20"
              : "flex flex-col md:flex-row items-center justify-between w-3/4 rounded-md left-20 md:w-[45rem] lg:w-[55rem] absolute bg-gray-200 md:static md:bg-transparent p-4 top-[-100%]"
          }
        >
          <div className="flex gap-4 flex-col md:flex-row">
            <Link to="/">Community</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/feature">Feature</Link>
          </div>
          <div className="flex gap-4 flex-col md:flex-row mt-2 md:mt-0">
            <button className="font-bold text-xl">Sign In</button>
            <Link to="/signup">
              <button className="bg-blue-500 hover:bg-blue-900 p-5 px-6 rounded-md text-white">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </nav>

      <section className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div>
          <div className="hidden md:flex items-center gap-2">
            <div className="flex gap-2">
              <img src={star} alt="" className="w-5" />
              <img src={star} alt="" className="w-5" />
              <img src={star} alt="" className="w-5" />
              <img src={star} alt="" className="w-5" />
              <img src={star} alt="" className="w-5" />
            </div>
            <p className="font-medium">Rated 4.8/5 (243 reviews)</p>
          </div>
          <h1 className="font-bold text-7xl w-96 md:w-[40rem] text-start my-2">
            Create your portfolio in minutes.
          </h1>
          <p className="w-96 text-start">
            With Fiber, you can setup your own portfolio in minutes with dozens
            of premade, beautiful templates.
          </p>
          <div className="flex mt-2 gap-4 items-center flex-col md:flex-row">
            <button className="bg-blue-900 p-5 rounded-md text-white font-semibold w-full md:w-auto">
              Start Free Trial
            </button>
            <Link to="/" className="text-blue-800 font-extrabold underline">
              View Examples
            </Link>
          </div>
          <div className="flex items-start md:items-center gap-2 my-4 flex-col md:flex-row">
            <div className="flex items-center gap-2">
              <img src={checkmark} alt="" className="w-5" />
              <p>No Credit Card Required</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={checkmark} alt="" className="w-5" />
              <p>10 Free Templates</p>
            </div>
          </div>
        </div>
        <div>
          <img src={hero} alt="" className="w-[30rem]" />
        </div>
      </section>
    </>
  );
}

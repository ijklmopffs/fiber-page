import React from "react";
import signup from "../../Assets/Sign Up Image.png";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <section className="flex items-center justify-between text-start gap-20 lg:flex-nowrap">
        <div>
          <Link to="/">
            <h1 className="font-bold text-2xl">Fiber</h1>
          </Link>
          <h2 className="font-black text-4xl my-2">
            Create your Fiber account
          </h2>
          <form className="w-96">
            <div className="flex flex-col my-5">
              <label htmlFor="name" className="font-medium text-xl">
                Your Name
              </label>
              <input
                type="text"
                className="border-gray-300 border-2 p-3 rounded-md my-2"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col my-5">
              <label htmlFor="email" className="font-medium text-xl">
                E-mail
              </label>
              <input
                placeholder="john@example.com"
                type="email"
                id="email"
                className="border-gray-300 border-2 p-3 rounded-md my-2"
              />
            </div>
            <div className="flex flex-col my-5">
              <label htmlFor="password" className="font-medium text-xl">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="At least 8 characters"
                minLength={8}
                className="border-gray-300 border-2 p-3 rounded-md my-2"
              />
            </div>
          </form>
          <div className="flex items-center gap-2 my-4">
            <input
              type="checkbox"
              name=""
              id="checkbox"
              className="cursor-pointer "
            />
            <p className="w-80 font-medium text-xl ">
              By creating an account on Fiber, you agree to the
              <Link
                to="/"
                className="ml-1 underline font-extrabold text-xl text-purple-950"
              >
                Terms & Conditions.
              </Link>
            </p>
          </div>
          <div>
            <button className="bg-blue-700 p-4 w-full text-white rounded-md font-bold text-xl">
              Create Fiber Account
            </button>
            <p className="text-center font-medium text-xl mt-2">
              Already have an account?
              <Link
                to="/signin"
                className="ml-1 underline font-extrabold text-xl text-purple-950"
              >
                Sign in.
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden md:block bg-blue-950 md:p-10 lg:p-40 text-center text-white">
          <img src={signup} alt="" className="md:w-[35rem]" />
          <h2 className="font-bold text-5xl my-2">Unparalleled Templates</h2>
          <p className="w-80 mx-auto">
            Crafted by a team of professional designers, our templates are
            unparalleled in the market.
          </p>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import time from "../../Assets/time.svg";
import code from "../../Assets/code.svg";
import allSizes from "../../Assets/allSizes.svg";
import pageImage from "../../Assets/Page Image.png";
import user1 from "../../Assets/User Avatar.svg";
import user2 from "../../Assets/User Avatar 2.svg";
import user3 from "../../Assets/User Avatar 32.svg";

export default function Hero() {
  return (
    <div className="text-start my-4 max-w-7xl">
      <p className="text-blue-900 font-extrabold text-xl">Why Fiber?</p>
      <h2 className="font-extrabold text-4xl my-4 w-[28rem]">
        A good portfolio means good employability
      </h2>
      <div className="flex gap-4 mx-auto justify-between flex-col md:flex-row">
        <div className="flex flex-col items-start gap-2">
          <div>
            <img src={time} alt="" className="w-10" />
          </div>
          <h3 className="font-extrabold">Build in minutes</h3>
          <p className="w-72 text-start text-gray-500 font-medium">
            With a selection of premade templates, you can build out a portfolio
            in less than 10 minutes.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <div>
            <img src={code} alt="" className="w-10" />
          </div>
          <h3 className="font-extrabold">Add custom CSS</h3>
          <p className="w-64 text-start text-gray-500 font-medium">
            Customize your portfolio even more with the ability to add your own
            custom CSS styles.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <div>
            <img src={allSizes} alt="" className="w-10" />
          </div>
          <h3 className="font-extrabold">Responsive</h3>
          <p className="w-72 text-start text-gray-500 font-medium">
            All Fiber templates are fully responsive to ensure the experience is
            seamless across all devices.
          </p>
        </div>
      </div>

      <section className="mt-20">
        <div className="flex bg-blue-900 p-10 rounded-md items-center justify-between pb-0 flex-col md:flex-row gap-4">
          <div>
            <h2 className="text-white text-5xl my-2">
              Diversify your portfolio.
            </h2>
            <p className="text-gray-300 w-80 my-2">
              Create an even more impressive more portfolio by creating case
              studies for your projects. Simply follow our step by step guide.
            </p>
            <button className="bg-blue-700 text-white p-4 rounded-md">
              Start Free Trial
            </button>
          </div>
          <div>
            <img src={pageImage} alt="" className="w-[45rem]" />
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="flex gap-10 flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center items-center">
          <div className="flex flex-col border-2 border-gray-300 w-96 p-4">
            <div className="flex items-center gap-4 w-96">
              <img src={user1} alt="" />
              <div>
                <h4 className="text-blue-700 font-extrabold text-lg">
                  Sarah Andrews
                </h4>
                <p>$100k in revenue</p>
              </div>
            </div>
            <div>
              <p className="w-80 my-2 font-semibold text-gray-500">
                Setting up my portfolio with Fiber took no more than 10 minutes.
                Since then, my portfolio has attracted a lot of clients and made
                me more than $100k.
              </p>
              <p className="border-2 border-gray-300 p-4 text-center font-extrabold text-lg text-blue-700">
                View Sarah's portfolio
              </p>
            </div>
          </div>

          <div className="flex flex-col border-2 border-gray-300 w-96 p-4">
            <div className="flex items-center gap-4 w-96">
              <img src={user2} alt="" />
              <div>
                <h4 className="text-blue-700 font-extrabold text-lg">
                  Matthew Higgins
                </h4>
                <p>$20k in revenue</p>
              </div>
            </div>
            <div>
              <p className="w-80 my-2 font-semibold text-gray-500">
                I have been getting A LOT of leads ever since I used Fiber's
                premade templates, now I just need to work on my case studies,
                and I'll be ready to go.
              </p>
              <p className="border-2 border-gray-300 p-4 text-center font-extrabold text-lg text-blue-700">
                View Matthew's portfolio
              </p>
            </div>
          </div>

          <div className="flex flex-col border-2 border-gray-300 w-96 p-4">
            <div className="flex items-center gap-4 w-96">
              <img src={user3} alt="" />
              <div>
                <h4 className="text-blue-700 font-extrabold text-lg">
                  Janice Dave
                </h4>
                <p>$30k in revenue</p>
              </div>
            </div>
            <div>
              <p className="w-64 w- my-2 font-semibold text-gray-500">
                I only started freelancing this year and have already made more
                than I ever made in my full time job. The templates are so
                amazing.
              </p>
              <p className="border-2 border-gray-300 p-4 text-center font-extrabold text-lg text-blue-700">
                View Sarah's portfolio
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

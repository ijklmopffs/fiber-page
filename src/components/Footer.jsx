import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="flex gap-8 mt-20 md:items-center text-start justify-between flex-col md:flex-row items-start">
        <div>
          <h1 className="font-bold text-2xl">Fiber</h1>
          <p className="w-80 mb-10 mt-2 text-gray-500 font-bold">
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates.
          </p>

          <p>Made with love in the Netherlands.</p>
        </div>
        <div className="flex flex-col">
          <h2 className="mb-5 font-bold text-xl">Sitemap</h2>
          <a href="/" className="my-1">
            Homepage
          </a>
          <a href="/" className="my-1">
            Pricing
          </a>
          <a href="/" className="my-1">
            Testimonials
          </a>
          <a href="/" className="my-1">
            Features
          </a>
        </div>
        <div className="flex flex-col mb-8">
          <h2 className="mb-5 font-bold text-xl">Resources</h2>
          <a href="/" className="my-1">
            Support
          </a>
          <a href="/" className="my-1">
            Contact
          </a>
          <a href="/" className="my-1">
            FAQ
          </a>
        </div>
        <div className="flex flex-col mb-7">
          <h2 className="mb-5 font-bold text-xl">Company</h2>
          <a href="/" className="my-1">
            About
          </a>
          <a href="/" className="my-1">
            Customers
          </a>
          <a href="/" className="my-1">
            Blog
          </a>
        </div>
        <div className="flex flex-col mb-7">
          <h2 className="mb-5 font-bold text-xl">Portfolios</h2>
          <a href="/" className="my-1">
            Sarah Andrews
          </a>
          <a href="/" className="my-1">
            Matthew Higgins
          </a>
          <a href="/" className="my-1">
            Janice Dave
          </a>
        </div>
      </footer>
    </>
  );
}

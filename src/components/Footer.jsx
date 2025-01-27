import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  return (
    <div className="md:mx-10 bg-blue-200 px-5 mb-5">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm py-5 px-5 mb-5">
        {/* Left Section */}
        <div>
          <img
            className="mb-5 w-40"
            src={assets.logo}
            alt="HealthSched Logo"
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li
              onClick={() => navigate('/Home')}
              className="cursor-pointer hover:text-blue-600 transition"
            >
              Home
            </li>
            <li
              onClick={() => navigate('/about')}
              className="cursor-pointer hover:text-blue-600 transition"
            >
              About us
            </li>
            <li
              onClick={() => navigate('/contacts')}
              className="cursor-pointer hover:text-blue-600 transition"
            >
              Contact us
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition">
              Privacy policy
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 9166353078</li>
            <li>lokesh916635@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ HealthSched - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

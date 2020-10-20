import React from "react";

import Link from "next/link";

export default function Footer() {
  function submit() {}
  return (
    <footer className="container mx-auto">
      <div className="flex justify-between">
        <div className="w-1/6">
          <h6 className="text-white">Company</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link href="#">
                <a className="text-indigo-500 hover:text-teal-500 hover:underline">
                  API Developer
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-indigo-500 hover:text-teal-500 hover:underline">
                  Carrer
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-indigo-500 hover:text-teal-500 hover:underline">
                  Our Story
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-indigo-500 hover:text-teal-500 hover:underline">
                  New Soon
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/6">
          <h6 className="text-white">Student</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link href="#">
                <a className="text-indigo-500 hover:text-teal-500 hover:underline">
                  Get Scholarship
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-indigo-500 hover:text-teal-500 hover:underline">
                  Our Pathskill
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-indigo-500 hover:text-teal-500 hover:underline">
                  All Features
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-indigo-500 hover:text-teal-500 hover:underline">
                  Refund Policy
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/6">
          <h6 className="text-white">Touch Us</h6>
          <p className="mt-4 text-indigo-500 leading-loose">
            Microservice Learning <br />
            Kyaro Town XXI <br />
            Jowston Hill, Gregminister <br />
            +991 6000 2020
          </p>
        </div>
        <div className="w-2/6">
          <h6 className="text-white">Promotions</h6>
          <p className="mt-4 text-indigo-500 mb-4">
            Submit your email for new updates
          </p>
          <form onSubmit={submit} className="flex">
            <input
              type="text"
              className="bg-white focus:outline-none border-0 px-4 md:px-6 py-3 w-full "
              placeholder="Your email address"
            />
            <button className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-4 md:px-6 py-3 whitespace-no-wrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t pt-8 mt-8 border-gray-800 text-center">
        <p className="text-indigo-500">
          2020 Copyright Microservice E-Learning by Alfredo Patricius Tarigan.
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

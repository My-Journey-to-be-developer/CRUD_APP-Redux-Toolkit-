import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
 return (
    <nav className="bg-gray-300 h-14">
      <div className="flex items-center justify-between h-14">
        <div className="flex">
          <h4 className="text-2xl font-bold ml-2 text-blue-500">
            <span className="text-3xl text-gray-600">R</span>edux-
            <span className="text-3xl text-gray-600">T</span>oolkit
          </h4>
          <ul className="flex items-center gap-4 ml-4">
            <li className="">
              <Link to="/">Create Post</Link>
              </li>
            <li className="">
              <Link to="/read">All Post</Link>
              </li>
          </ul>
        </div>
        <input
          className="w-[25vw] h-12 rounded-lg mr-2 px-3 flex text-2xl items-end justify-center"
          type="search"
          placeholder="Search here....."
        />
      </div>
    </nav>
  );
};

export default Navbar;

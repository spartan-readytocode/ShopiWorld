import React from "react";
import { NavLink } from "react-router-dom";
import { GiClothes } from "react-icons/gi";
import { IoIosCart } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="p-2 h-12 flex justify-between overflow-hidden">
      <div>
        <p className="text-lg font-extrabold px-4 text-amber-900">SHOPIWORLD</p>
      </div>
      <div>
        <ul className="flex gap-2 float-right">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="w-40 lg:w-52 md:w-60
               border border-slate-300 rounded-2xl p-1"
            />
          </div>
          <NavLink to={"/"} className="cursor-pointer">
            <GiClothes size={28} color="green" />
          </NavLink>
          <NavLink to={"/likedclothes"}>
            <MdFavoriteBorder
              size={28}
              color="red"
              className="cursor-pointer"
            />
          </NavLink>
          <IoIosCart size={28} color="brown" className="cursor-pointer" />
          <NavLink to={"/cart"}>
            <IoPersonCircle size={28} color="blue" className="cursor-pointer" />
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

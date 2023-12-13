import React from "react";
import { bg2, bg3 } from "../../Images/Exporter";
import { MdArrowDownward } from "react-icons/md";
import { motion } from "framer-motion";

const Topsection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }} // Adjust the duration here (in seconds)
      className="flex gap-1 p-2 m-5 pt-3 justify-center relative" // Added relative positioning
    >
      <div>
        <img
          src={bg3}
          alt="Background image"
          className="w-full h-96 rounded-xl"
        />
        <div className="itemcontainer lg:px-10 py-6 flex flex-col justify-center ">
          <p className="text-3xl font-mono font-extrabold leading-9 text-red-600 ">
            COMEON GRAB SOME INTERESTING OFFERS
          </p>
          <p className="text-2xl font-mono font-extrabold leading-loose text-red-950">
            SALES ARE <span>LIVE</span>
          </p>
          <p className="font-bold text-lg flex gap-3 items-center text-red-900">
            SURF BELOW TO GET OFFERS{" "}
            <button className="p-1 border-2 border-red-900 hover:bg-red-200">
              <a href="#shirts">
                {" "}
                <MdArrowDownward size={28} />
              </a>
            </button>
          </p>
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          src={bg2}
          alt="Background image"
          className="rounded-2xl hidden lg:block"
          style={{ width: "33vw", height: "75vh" }}
        />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-400 h-1 w-16 rounded-full"></div>
    </motion.div>
  );
};

export default Topsection;

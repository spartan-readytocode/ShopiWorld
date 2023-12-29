import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { tshirtContainer } from "../../../Container/Container";
import "./Shirt.css"; // Optional for additional styles
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Tshirt = () => {
  const [likedShirts, setLikedShirts] = useState([]);

  const handleLike = (id) => {
    setLikedShirts((prevLikedShirts) => {
      if (prevLikedShirts.includes(id)) {
        return prevLikedShirts.filter((shirtId) => shirtId !== id);
      } else {
        return [...prevLikedShirts, id];
      }
    });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-3/4">
        <div className="text-center font-bold text-2xl mb-8 w-2/3 flex justify-center items-center">
          TSHIRTS - Get the new trend!
        </div>
        <Marquee autoFill pauseOnHover speed={20}>
          <div
            className="shirts-container lg:grid lg:grid-cols-4 lg:gap-4 flex flex-wrap gap-2 justify-center  items-center"
            id="shirts"
          >
            {tshirtContainer.map((tshirt) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                key={tshirt.id}
                className="shirt-item shadow-lg rounded-3xl overflow-hidden bg-white"
              >
                <img
                  src={tshirt.img}
                  alt={tshirt.Name}
                  className="w-72 h-80 rounded-t-3xl"
                />
                <div className="p-4">
                  <p className="text-center text-xl font-semibold text-sky-500">
                    {tshirt.Name}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-gray-700 font-medium">
                      Price: ${tshirt.Price}
                    </p>
                    <FaHeart
                      onClick={() => handleLike(tshirt.id)}
                      className={`transition duration-150 ease-in-out ${
                        likedShirts.includes(tshirt.id)
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                      style={{ cursor: "pointer" }}
                      animate={{
                        scale: likedShirts.includes(tshirt.id) ? 1.2 : 1,
                      }}
                    />
                  </div>
                  <p className="flex justify-center items-center gap-2 border-gray-200 mt-4 py-2">
                    <button
                      className="font-semibold text-red-700 hover:text-red-600"
                      onClick={(e) => {
                        alert("Added to the cart");
                      }}
                    >
                      ADD TO CART
                    </button>
                    <FaShoppingCart
                      size={20}
                      className="text-red-500 hover:text-red-400"
                    />
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Tshirt;

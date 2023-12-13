import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { shirtContainer } from "../../../Container/Container";
import "./Shirt.css"; // Optional for additional styles
import { motion } from "framer-motion";

const Shirt = () => {
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
    <div className="flex flex-col items-center">
      <div className="text-center font-bold text-2xl mb-8">
        SHIRTS - Get Up to 50% off!
      </div>
      <div className="shirts-container grid grid-cols-3 gap-4">
        {shirtContainer.map((shirt) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            key={shirt.id}
            className="shirt-item shadow-lg rounded-3xl overflow-hidden bg-white"
          >
            <img
              src={shirt.img}
              alt={shirt.Name}
              className="w-72 h-80 rounded-t-3xl"
            />
            <div className="p-4">
              <p className="text-center text-xl font-semibold text-sky-500">
                {shirt.Name}
              </p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-700 font-medium">
                  Price: ${shirt.Price}
                </p>
                <FaHeart
                  onClick={() => handleLike(shirt.id)}
                  className={`transition duration-150 ease-in-out ${
                    likedShirts.includes(shirt.id)
                      ? "text-red-500"
                      : "text-gray-400"
                  }`}
                  style={{ cursor: "pointer" }}
                  animate={{ scale: likedShirts.includes(shirt.id) ? 1.2 : 1 }}
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
    </div>
  );
};

export default Shirt;

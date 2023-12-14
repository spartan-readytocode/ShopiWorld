import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import {
  addLikedShirt,
  removeLikedShirt,
} from "../../../Store/Features/LikedClothes";
import { addToCart } from "../../../Store/Features/Cartslice"; // Import addToCart action from cartSlice
import { motion } from "framer-motion";
import { shirtContainer } from "../../../Container/Container";

const Shirt = () => {
  const dispatch = useDispatch();
  const likedShirts = useSelector((state) => state.likedShirts.likedShirts);

  const handleLike = (id) => {
    if (likedShirts.includes(id)) {
      dispatch(removeLikedShirt(id));
    } else {
      dispatch(addLikedShirt(id));
    }
  };

  const handleAddToCart = (shirt) => {
    dispatch(addToCart(shirt));
    alert("Added to the cart");
  };

  return (
    <div className="flex flex-col items-center mb-6 " id="shirts">
      <div className="text-center font-bold text-2xl mb-8">
        SHIRTS - Get Up to 50% off!
      </div>
      <div className="shirts-container lg:grid lg:grid-cols-4 lg:gap-4 flex flex-wrap gap-2 justify-center ">
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
                  onClick={() => handleAddToCart(shirt)}
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

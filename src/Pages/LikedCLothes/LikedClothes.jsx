// LikedClothes.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { shirtContainer } from "../../Container/Container";
import { removeLikedShirt } from "../../Store/Features/LikedClothes"; // Replace with the correct path
import { addToCart } from "../../Store/Features/Cartslice"; // Replace with the correct path

const LikedClothes = () => {
  const dispatch = useDispatch();
  const likedShirts = useSelector((state) => state.likedShirts.likedShirts);

  const getLikedShirtDetails = (shirtId) => {
    return shirtContainer.find((shirt) => shirt.id === shirtId);
  };

  const handleRemoveFromLiked = (shirtId) => {
    dispatch(removeLikedShirt(shirtId));
  };

  const handleAddToCart = (shirt) => {
    dispatch(addToCart(shirt));
    handleRemoveFromLiked(shirt.id); // Remove from liked after adding to cart
  };

  return (
    <div className="text-center m-8">
      <h1 className="text-3xl font-bold mb-4">Liked Clothes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {likedShirts.map((likedShirtId) => {
          const likedShirt = getLikedShirtDetails(likedShirtId);
          if (likedShirt) {
            return (
              <motion.div
                key={likedShirt.id}
                className="bg-white p-4 rounded-md shadow-md overflow-hidden transform transition-transform hover:scale-105  flex  flex-col justify-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {likedShirt.Name}
                  </h3>
                  <p className="text-gray-700 font-semibold mb-2">
                    Price: ${likedShirt.Price}
                  </p>

                  <motion.img
                    src={likedShirt.img}
                    alt={likedShirt.Name}
                    className="w-full h-80 object-cover rounded-md mb-2"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>

                <div className="flex justify-center gap-2 items-center">
                  <button
                    onClick={() => handleAddToCart(likedShirt)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    ADD TO CART
                  </button>
                  <button
                    onClick={() => handleRemoveFromLiked(likedShirt.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    REMOVE
                  </button>
                </div>
              </motion.div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default LikedClothes;

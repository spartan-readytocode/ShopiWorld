import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { shirtContainer } from "../../../Container/Container";
import { FaShoppingCart } from "react-icons/fa";
import "./Shirt.css"; // Import a separate CSS file for styles (optional)

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
    <div>
      <div>
        <p>SHIRTS</p>
        <p>Get Up to 50% off</p>
      </div>
      <div className="shirts-container">
        <div className="shirts flex flex-wrap gap-1">
          {shirtContainer.map((shirt) => (
            <div key={shirt.id} className="shirt-item p-2 ">
              <img
                src={shirt.img}
                alt={shirt.Name}
                className="w-70 h-80 rounded-3xl"
              />
              <p className="text-center">{shirt.Name}</p>
              <p>Price: ${shirt.Price}</p>
              <FaHeart
                onClick={() => handleLike(shirt.id)}
                style={{
                  color: likedShirts.includes(shirt.id) ? "red" : "grey",
                  cursor: "pointer",
                }}
              />
              <p className="flex justify-center items-center gap-2 border-gray-300">
                <button
                  className="font-semibold text-red-700 "
                  onClick={(e) => {
                    alert("Added to the cart");
                  }}
                >
                  ADD TO CART
                </button>
                <FaShoppingCart size={18} className="text-red-500" />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shirt;

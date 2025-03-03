import React from "react";

const Card = ({ image, name, description, caption }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden w-72 p-4 ">
      {/* Image with fixed aspect ratio */}
      <div className="w-full aspect-[4/3] overflow-hidden rounded-lg">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Card Content */}
      <div className="mt-4 text-center">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <p className="text-gray-400 text-xs mt-1 italic">{caption}</p>
      </div>
    </div>
  );
};

export default Card;

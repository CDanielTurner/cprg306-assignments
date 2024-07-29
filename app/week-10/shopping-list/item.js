import React from "react";

export default function Item({ itemObj, onSelect }) {
  let { name, quantity, category } = itemObj;

  return (
    <li
      className="bg-blue-950 m-3 w-60 h-30 rounded text-center hover:bg-gray-700"
      onClick={() => onSelect(itemObj)}
    >
      <h3 className="font-bold text-blue-300 text-lg">{name}</h3>
      <p className="text-lg-white">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
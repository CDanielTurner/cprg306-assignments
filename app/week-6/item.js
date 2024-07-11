import React from "react";

export default function Item({ itemObj }) {
  let { name, quantity, category } = itemObj;

  return (
    <li className="bg-blue-950 m-3 w-60 h-30 rounded text-center">
      <h1 className="font-bold text-blue-300">{name}</h1>
      <p className="text-blue-100">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
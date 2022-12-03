import React from "react";

export const Card = ({ cake, personal }) => {
  return (
    <div className="w-full h-50 rounded-lg shadow-lg mt-5">
      <img
        className="object-scale-down rounded-lg"
        src={personal}
        alt="cake"
      />

      <div className="p-4">
        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
          {cake}
        </h4>
        <p className="mb-2 leading-normal"></p>
        <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
          Cake
        </button>
      </div>
    </div>
  );
};

import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loader = ({ onClick, isLoading, buttonText }) => {
  return (
    <button
      onClick={onClick}
      className={` text-white font-bold py-2 px-4 rounded ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="flex items-center text-center">
          <FaSpinner className="animate-spin mr-2 " /> Loading...
        </span>
      ) : (
        buttonText
      )}
    </button>
  );
};

export default Loader;

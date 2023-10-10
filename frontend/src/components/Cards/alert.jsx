import React from "react";

const Alert = ({ text }) => {
  return (
    <div className="flex items-center justify-center bg-green-500 text-white text-sm font-bold px-4 py-3" role="alert">
      <p>{text}</p>
    </div>
  );
};

export default Alert;









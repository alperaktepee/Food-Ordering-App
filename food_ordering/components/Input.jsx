import React from "react";

const Input = () => {
  return (
    <div className="w-full">
      <label className="relative block cursor-text w-full">
        <input
          type="text"
          className="w-full h-14 px-4 border border-primary outline-none peer pt-3 "
          required
        />
        <span className="absolute px-4 top-0 left-0 text-md flex items-center h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs">
          Email
        </span>
      </label>
    </div>
  );
};

export default Input;

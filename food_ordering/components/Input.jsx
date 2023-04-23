import React from "react";

const Input = (props) => {

  return (
    <div className="w-full">
      <label className="relative block cursor-text w-full">
        <input
          id={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
          type={props.type}
          required
          className={`w-full h-14 px-4 border outline-none peer ${
            props.type !== "datetime-local" && "pt-3"
          } ${props.touched && props.errorMessage ? "border-red-500" : "border-primary"}`}
        />
        <span className="absolute px-4 top-0 left-0 text-md flex items-center h-full peer-focus:h-5 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs">
          {props.placeholder}
        </span>
      </label>
      {props.touched && props.errorMessage ? (
        <span className="text-xs text-red-700">{props.errorMessage}</span>
      ) : null}
    </div>
  );
};

export default Input;

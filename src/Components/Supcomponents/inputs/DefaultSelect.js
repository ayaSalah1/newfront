import React from "react";
import "./DefaultSelect.css";
function DefaultSelect(props) {
  const {
    name,
    value,
    onChange,
    error,
    title,
    options = [],
    className,
    classNameSelect,
  } = props;

  return (
    <div className={`px-4 select-default-container  items-center ${className}`}>
      <select
        className={`select-default w-full  text-default-opacity ${
          error ? "select-error" : ""
        } ${classNameSelect}`}
        name={name}
        value={value}
        onChange={onChange}
        style={{ margin: 0 }}
      >
        <option value="" disabled>
          {title}
        </option>
        {options.map((option) => (
          <option
            key={option._id}
            value={option._id}
            className={"option-default"}
          >
            {option.name}
          </option>
        ))}
      </select>
      {error && (
        <p
          className="error-message"
          style={{
            fontSize: "12px",
            marginTop: "-5px",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default DefaultSelect;

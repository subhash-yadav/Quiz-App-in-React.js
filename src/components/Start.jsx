import React, { useRef } from "react";
import "./Start.css";
const Start = ({ setUsername }) => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value)
  }
  return (
    <div className="start">
      <input
        type="text"
        placeholder="enter username"
        className="startInput"
        ref={inputRef}
      />
      <button className="startBtn" onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Start;

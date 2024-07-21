import { useSnapshot } from "valtio";
import state from "../store";
import React from "react";
import { getContrastingColor } from "../config/helpers";
const CustomButtton = ({ title, type, customStyles, handleClick }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return { color: snap.color, border: `1px solid ${snap.color}` };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles} `}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButtton;

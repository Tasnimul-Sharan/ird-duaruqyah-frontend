"use client";
import { useState } from "react";

const Slider = ({ min, max }) => {
  const [value, setValue] = useState(min);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
  };

  const getGradient = () => {
    const percentage = ((value - min) / (max - min)) * 100;
    return `linear-gradient(to right, #68D391 0%, #68D391 ${percentage}%, #E2E8F0 ${percentage}%, #E2E8F0 100%)`;
  };

  return (
    <div className="flex items-center">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="w-full appearance-none bg-gradient-to-r h-2 rounded-full outline-none"
        style={{ background: getGradient() }}
      />
      <output className="ml-2 text-sm text-gray-700">{value}</output>
    </div>
  );
};

export default Slider;

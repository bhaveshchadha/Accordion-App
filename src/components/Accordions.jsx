import React from "react";
import { FaPlus } from "react-icons/fa6";
function Accordions() {
  return (
    <div className="container">
      <div className="box question">Enable Multi Sections</div>
      <div className="box">
        Lorem ipsum dolor sit amet.
        <FaPlus />
      </div>
      <div className="box">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        possimus provident. Quidem!
        <FaPlus />
      </div>
      <div className="box">
        Lorem ipsum dolor sit amet consectetur.
        <FaPlus />
      </div>
      <div className="box">
        Lorem ipsum dolor sit amet consectetur.
        <FaPlus />
      </div>
    </div>
  );
}

export default Accordions;

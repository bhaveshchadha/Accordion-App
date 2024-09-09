import React from "react";
import { FaPlus } from "react-icons/fa6";
function Accordions() {
  return (
    <div className="container">
      <div className="box  question">Enable Multi Sections</div>
      <div className="box answer">
        Lorem ipsum dolor sit amet.
        <FaPlus size={10} />
      </div>
      <div className="box answer">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        possimus provident. Quidem!
        <FaPlus size={10} />
      </div>
      <div className="box answer">
        Lorem ipsum dolor sit amet consectetur.
        <FaPlus size={10} />
      </div>
      <div className="box answer">
        Lorem ipsum dolor sit amet consectetur.
        <FaPlus size={10} />
      </div>
    </div>
  );
}

export default Accordions;

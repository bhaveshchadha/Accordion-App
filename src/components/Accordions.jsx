import React from "react";
import { FaPlus } from "react-icons/fa6";
function Accordions() {
  return (
    <div className="container">
      <div className="box  title">Enable Multi Sections</div>
      <div className="box">
        <div className=" question">
          Lorem ipsum dolor sit amet.
          <FaPlus className=" show_answer" size={10} />
        </div>
      </div>
      <div className="box">
        <div className="question">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          possimus provident. Quidem!
          <FaPlus className=" show_answer" size={10} />
        </div>
      </div>
      <div className="box">
        <div className="question">
          Lorem ipsum dolor sit amet consectetur.
          <FaPlus className=" show_answer" size={10} />
        </div>
      </div>
      <div className="box">
        <div className="question">
          Lorem ipsum dolor sit amet consectetur.
          <FaPlus className=" show_answer" size={10} />
        </div>
      </div>
    </div>
  );
}

export default Accordions;

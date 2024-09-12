import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
function Accordions() {
  const [multiSelections, setMultiSelections] = useState(false);
  const handleMultiSections = () => {
    const title = document.querySelector(".title");

    if (multiSelections) {
      setMultiSelections(false);
      title.textContent = "Enable Multi Selections";
    } else {
      setMultiSelections(true);
      title.textContent = "Disable Multi Selections";
    }
    console.log("enabled");
  };
  const handleClick = (e) => {
    const elementsWithShowClass = document.querySelectorAll(".show");

    // Remove the 'close' class from each found element
    if (!multiSelections) {
      elementsWithShowClass.forEach((element) => {
        element.classList.remove("show");
      });
    }
    const childWithCloseClass = e.currentTarget.querySelector(".close");

    childWithCloseClass.classList.add("show");
  };

  return (
    <div className="container">
      <div className="box title" onClick={handleMultiSections}>
        Enable Multi Sections
      </div>
      <div className="box show_answer" onClick={handleClick}>
        <div className=" question">
          Lorem ipsum dolor sit amet.
          <FaPlus size={10} />
        </div>
        <div className=" answer close">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et
          distinctio accusamus modi ipsam quidem tenetur fugit a, aspernatur,
          maxime, facilis expedita. Incidunt iure ipsa voluptatem officia quod
          eveniet eligendi.
        </div>
      </div>
      <div className="box show_answer" onClick={handleClick}>
        <div className="question">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          possimus provident. Quidem!
          <FaPlus size={10} />
        </div>
        <div className=" answer close">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et
          distinctio accusamus modi ipsam quidem tenetur fugit a, aspernatur,
          maxime, facilis expedita. Incidunt iure ipsa voluptatem officia quod
          eveniet eligendi.
        </div>
      </div>
      <div className="box show_answer" onClick={handleClick}>
        <div className="question">
          Lorem ipsum dolor sit amet consectetur.
          <FaPlus size={10} />
        </div>
        <div className=" answer close">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et
          distinctio accusamus modi ipsam quidem tenetur fugit a, aspernatur,
          maxime, facilis expedita. Incidunt iure ipsa voluptatem officia quod
          eveniet eligendi.
        </div>
      </div>
      <div className="box show_answer" onClick={handleClick}>
        <div className="question">
          Lorem ipsum dolor sit amet consectetur.
          <FaPlus size={10} />
        </div>
        <div className=" answer close">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et
          distinctio accusamus modi ipsam quidem tenetur fugit a, aspernatur,
          maxime, facilis expedita. Incidunt iure ipsa voluptatem officia quod
          eveniet eligendi.
        </div>
      </div>
    </div>
  );
}

export default Accordions;

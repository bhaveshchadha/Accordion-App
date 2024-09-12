import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import data from "../data/data";

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
      {console.log(data.length)}

      {data.length > 0 ? (
        data.map((d) => (
          <div className="box show_answer" onClick={handleClick} key={d.id}>
            <div className=" question">
              {d.question}
              <FaPlus size={10} />
            </div>
            <div className=" answer close">{d.answer}</div>
          </div>
        ))
      ) : (
        <div>No data</div>
      )}
    </div>
  );
}

export default Accordions;

import React from "react";
import { FaPlus } from "react-icons/fa6";

function AccordionItem({ d, multiSelections }) {
  const handleClick = (e) => {
    const elementsWithShowClass = document.querySelectorAll(".show");

    if (!multiSelections) {
      // Remove the 'close' class from each found element
      elementsWithShowClass.forEach((element) => {
        element.classList.remove("show");
      });
    }
    const childWithCloseClass = e.currentTarget.querySelector(".close");

    childWithCloseClass.classList.add("show");
  };

  return (
    <div className="box show_answer" onClick={handleClick}>
      <div className=" question">
        {d.question}
        <FaPlus size={10} />
      </div>
      <div className=" answer close">{d.answer}</div>
    </div>
  );
}

export default AccordionItem;

import React, { useState } from "react";
import data from "../data/data";
import AccordionItem from "./AccordionItem";

function Accordions() {
  const [multiSelections, setMultiSelections] = useState(false);
  const handleMultiSections = () => {
    const title = document.querySelector(".title");

    if (multiSelections) {
      setMultiSelections(false);
    } else {
      setMultiSelections(true);
    }
  };

  return (
    <div className="container">
      <div className="box title" onClick={handleMultiSections}>
        {multiSelections
          ? "Disable Multiple Sections"
          : "Enable Multi Sections"}
      </div>
      {console.log(data.length)}

      {data?.length > 0 ? (
        data.map((d) => (
          <AccordionItem key={d.id} d={d} multiSelections={multiSelections} />

          // <div className="box show_answer" onClick={handleClick} key={d.id}>
          //   <div className=" question">
          //     {d.question}
          //     <FaPlus size={10} />
          //   </div>
          //   <div className=" answer close">{d.answer}</div>
          // </div>
        ))
      ) : (
        <div>No data</div>
      )}
    </div>
  );
}

export default Accordions;

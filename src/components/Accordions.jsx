import React, { useState } from "react";
import data from "../data/data";
import AccordionItem from "./AccordionItem";

function Accordions() {
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const handleClick = () => {
    if (enableMultiSelection) {
      setEnableMultiSelection(false);
    } else {
      setEnableMultiSelection(true);
    }
  };
  return (
    // data.map((d)=>{
    //   <AccordionItem/>
    // })
    <div className="container">
      <div className="box title" onClick={handleClick}>
        {enableMultiSelection
          ? "Enable Multi Selection"
          : " Disable Multi Selection"}
      </div>

      {data.map((d) => {
        {
          console.log("first");
        }
        return (
          <AccordionItem
            d={d}
            key={d.id}
            enableMultiSelection={enableMultiSelection}
          />
        );
        // <AccordionItem />;
      })}
    </div>
    // <div className="container">
    //   <div className="box title"
    //   </div>

    //   {data?.length > 0 ? (
    //     data.map((d) => (
    //       <AccordionItem
    //         key={d.id}
    //         id={d.id}
    //         d={d}
    //         multiSelections={multiSelections}
    //       />

    //       // <div className="box show_answer" onClick={handleClick} key={d.id}>
    //       //   <div className=" question">
    //       //     {d.question}
    //       //     <FaPlus size={10} />
    //       //   </div>
    //       //   <div className=" answer close">{d.answer}</div>
    //       // </div>
    //     ))
    //   ) : (
    //     <div>No data</div>
    //   )}
    // </div>
  );
}

export default Accordions;

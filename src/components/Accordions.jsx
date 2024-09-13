import React, { useState } from "react";
import data from "../data/data";
import AccordionItem from "./AccordionItem";

function Accordions() {
  return (
    <></>
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

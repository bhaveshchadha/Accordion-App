import React, { useState } from "react";
import data from "../data/data";
import AccordionItem from "./AccordionItem";

function Accordions() {
  return (
    <div className="container">
      <div className="box title">Enable Multi Selection</div>
      <div className="box collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="box collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="box collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
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

import React from "react";

function AccordionItem() {
  return <div>AccordionItem</div>;
}

export default AccordionItem;
// import React, { useState } from "react";
// import { FaPlus } from "react-icons/fa6";

// function AccordionItem({ d, multiSelections, id }) {
//   const [toggleIds, setToggleIds] = useState([]);
//   const handleClick = (e) => {
//     // const elementsWithShowClass = document.querySelectorAll(".show");

//     // if (!multiSelections) {

//     //   setToggleIds([id]);

//     // setToggleIds([id]);

//     // }
//     setToggleIds([id]);
//     // const childWithCloseClass = e.currentTarget.querySelector(".close");

//     // childWithCloseClass.classList.add("show");
//   };
//   console.log(
//     "toggleids",
//     toggleIds,
//     toggleIds.includes("1"),
//     toggleIds.includes("2"),
//     toggleIds.includes("3"),
//     toggleIds.includes("4")
//   );
//   return (
//     <div className={`box  `} onClick={handleClick}>
//       <div className=" question">
//         {d.question}
//         <FaPlus size={10} />
//       </div>
//       <div className={`answer close ${toggleIds.includes(id) ? "show" : ""}`}>
//         {d.answer}
//       </div>
//     </div>
//   );
// }

// export default AccordionItem;

// import React from "react";
// import Button from "./Button";

// const list = ["All", "Live", "Gaming"];

// const ButtonList = () => {

//   // return (

//     // <div className="flex">
//     //   <Button name="All" />
//     //   <Button name="Gaming" />
//     //   <Button name="Songs" />
//     //   <Button name="Live" />
//     //   <Button name="Soccer" />
//     //   <Button name="Cricket" />
//     //   <Button name="Cooking" />
//     //   <Button name="Cricket" />
//     //   <Button name="Valentines" />
//     //   <Button name="Cricket" />
//     //   <Button name="Cooking" />
//     //   <Button name="Cricket" />
//     // </div>

//   // );
// };

// export default ButtonList;


import React from "react";
import Button from "./Button";

const list = 
[
  "All",
  "Live",
  "Gaming",
  "Songs",
  "Soccer",
  "Cricket",
  "Cooking",
  "Valentines",
  "All",
  "Live",
  "Gaming",
  "Songs",

  // add more items here
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};


export default ButtonList;

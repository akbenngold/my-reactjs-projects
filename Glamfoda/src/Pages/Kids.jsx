import React from "react";
import Main from "../Components/Main";
import KidsBg from "../assets/kids.jpg";
function Kids() {
  return (
    <div>
      <Main
        background={KidsBg}
        banner="check out our kids collection"
        target="/kids/collection"
      />
    </div>
  );
}

export default Kids;

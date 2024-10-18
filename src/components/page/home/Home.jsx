import React from "react";
import Section1 from "../sections/Section1";
import Section2 from "../sections/Section2";

function Home() {
  return (
    <div className="w-full h-[93vh] bg-[#5513d1] overflow-y-auto text-white">
      <Section1 />
      <Section2 />
    </div>
  );
}

export default Home;

import React from "react";

function Rock() {
  return (
    <div className="w-[100vw] h-[93vh]">
      <div className="w-full flex justify-center gap-10 mt-2">
        <div
          className="w-72 h-36 rounded-xl flex justify-center px-3 py-3  flex-col items-center text-white"
          style={{
            backgroundSize: "100% 100%",
            backgroundPosition: "0px 0px",
            backgroundImage:
              "linear-gradient(90deg, #A100FFFF 0%, #71C4FFFF 100%)",
          }}
        >
          <h1 className="text-4xl">Score</h1>
          <h1 className="text-4xl text-red-500">0</h1>
        </div>
        <div className="w-72 h-36 flex justify-center items-center text-3xl">
          <h1>---------Fight---------</h1>
        </div>
        <div
          className="w-72 h-36 rounded-xl flex justify-center px-3 py-3  flex-col items-center text-white"
          style={{
            backgroundSize: "100% 100% ",
            backgroundPosition: "0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px",
            backgroundImage: `radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%),
                      radial-gradient(113% 91% at 17% -2%, #FF5A00FF 1%, #FF000000 99%),
                      radial-gradient(142% 91% at 83% 7%, #FFDB00FF 1%, #FF000000 99%),
                      radial-gradient(142% 91% at -6% 74%, #FF0049FF 1%, #FF000000 99%),
                      radial-gradient(142% 91% at 111% 84%, #FF7000FF 0%, #FF0000FF 100%)`,
          }}
        >
          <h1 className="text-4xl">Score</h1>
          <h1 className="text-4xl text-blue-500">0</h1>
        </div>
      </div>
      <div className="w-[100vw] relative flex justify-center items-center flex-col gap-10">
        <span className="flex text-3xl text-red-500">Select Your Weapon</span>
        <div className="flex gap-5">
          <img
            src="src/public/RockImges/paper-removebg-preview (1).png"
            alt=""
            className="w-40 hover:scale-110 duration-300 cursor-pointer"  
          />
          <img
            src="src/public/RockImges/rock-removebg-preview.png"
            alt="" 
            className="w-40 hover:scale-110 duration-300 cursor-pointer"
          />
          <img
            src="src/public/RockImges/sessior-removebg-preview.png"
            alt=""
            className="w-40 hover:scale-110 duration-300 cursor-pointer" 
          />
        </div>
      </div>
    </div>
  );
}

export default Rock;

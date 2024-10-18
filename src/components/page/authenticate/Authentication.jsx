import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
function Authentication() {
  const [email,setemail]=useState("")
  const [register,setregister]=useState("")
  const navigate=useNavigate()
const loginComplate=()=>{
  console.log(email,register)
  localStorage.setItem("user",email)
  navigate("/game")
}
 
  document.title = "RoomiFy | Login";
  return (
    
    <div
      className=" w-full h-[90.7vh]  flex flex-wrap  overflow-hidden relative "
      style={{
        backgroundImage: "url('/Login/17973908.jpg')",
        backgroundSize: "cover",
      }}
    >
      <img
        src="/game/1.png"
        className="h-96 rotate-[-25deg]  left-[-10%] top-[-2%]  absolute"
        alt=""
      />
      <img
        src="/game/2.png"
        className="h-[70vh]  absolute right-[-10%] top-[-10%] "
        alt=""
      />
      <img
        src="/game/3.png"
        className="h-96  absolute  right-[-5%]  bottom-[-20%] "
        alt=""
      />
      <img
        src="/game/5.png"
        className="h-[75vh]  absolute top-4     left-60 rotate-[20deg]"
        alt=""
      />
      <img
        src="/game/1.png"
        className="h-[70vh] bottom-[-20%]  absolute  "
        alt=""
      />
      <div className="w-full h-full bg-black/15 backdrop-blur-sm flex justify-center items-center ">
        <div
          action=""
          className=" flex flex-col gap-5 justify-center items-center border-2 border-zinc-800 px-10 py-20 rounded-2xl bg-black/15 backdrop-blur-sm"
          
        >
          <h1 className="text-white text-3xl m-4">Login Your Identity </h1>
          <input
            required
            type="text"
            placeholder="enter your Email"
            className="h-12 rounded-lg px-4 w-72 outline-none border-none bg-black/45 text-white backdrop-blur-sm"
            onChange={(text)=>setemail(text.target.value)}
           
          />
          <input
            required
            type="text"
            placeholder="enter your password"
            className="h-12 rounded-lg px-4 w-72 outline-none border-none bg-black/45 text-white backdrop-blur-sm"
            onChange={(text)=>setregister(text.target.value)}
        
          />
          
          <button
            type="submit"
            className="px-4 mt-3 py-3 bg-blue-500 w-44 rounded text-white hover:bg-blue-600 duration-300"
            onClick={()=>loginComplate()}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Authentication;

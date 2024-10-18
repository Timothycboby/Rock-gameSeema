import React from "react";
import { Button, Popover, QRCode } from "antd";

function Section1() {
  return (
    <div className="flex flex-wrap relative h-[100vh]">
      <div className="h-full w-full relative">
        <img
          src="/game/1.png"
          className="opacity-50   absolute  top-[-20%] "
          alt=""
        />
        <img
          src="/game/2.png"
          className="opacity-50 absolute  bottom-0 right-0 "
          alt=""
        />
        <img
          src="/game/3.png"
          className="opacity-50  absolute top-[-15%] right-14 "
          alt=""
        />
        <img
          src="/game/4.png"
          className="opacity-50 absolute  bottom-[-40%]  "
          alt=""
        />
        <img
          src="/game/5.png"
          className="opacity-50  absolute top-32 left-[25%] "
          alt=""
        />
      </div>
      <div className="w-full h-full absolute top-0 flex justify-center items-center flex-col gap-5">
        <h1 className="text-7xl w-[60%] text-center  font-mono">
          Where strategy meets fun—play{" "}
          <span className="text-[#F9E400]">Rock-Paper-Scissors</span> and
          conquer the leaderboard!
        </h1>
        <span>
          <Popover
            content={
              <QRCode value="https://poki.com/en/boy" bordered={false} />
            }
          >
            <Button className="px-10 py-7 text-2xl " type="primary">
              Play More
            </Button>
          </Popover>
        </span>
      </div>
    </div>
  );
}

export default Section1;

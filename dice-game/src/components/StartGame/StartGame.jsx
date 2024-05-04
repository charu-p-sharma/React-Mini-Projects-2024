import React from "react";
import NumbersDiv from "./NumbersDiv";

const StartGame = () => {
  return (
    <div className="nav_content flex">
      <div className="game_score text-left text-bold ">
        <h4 className="text-2xl text-white  bg-slate-950  hover:bg-slate-800   mt-8 text-2xl font-bold py-3 px-3  md:text-4xl md:mt-14">
          0
        </h4>
        <p className="text-1xl">Score</p>
      </div>

      <div className="numbers text-right ">
        <NumbersDiv></NumbersDiv>
        <p className="text-bold text-1xl">Numbers</p>
      </div>
    </div>
  );
};

export default StartGame;

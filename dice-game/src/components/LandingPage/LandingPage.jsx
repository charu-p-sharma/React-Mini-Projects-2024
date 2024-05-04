import React from "react";

export const LandingPage = () => {
  return (
    <div className=" mt-10 start_game_div md:flex justify-center md:mt-44">
      <div className="contents ">
        <div className="left_image md:">
          <img src="/Images/dice.png" alt="Dice image" />
        </div>
        <div className="right_content md:text-right text-center ">
          <h1 className="flex text-center font-bold text-8xl uppercase">
            Dice Game
          </h1>
          <button className="text-white  bg-slate-950  hover:bg-slate-800   mt-8 text-2xl font-bold py-3 px-3  md:text-4xl md:mt-14">
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

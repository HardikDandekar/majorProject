import React from "react";
import Nav2 from "./Nav2";
import Nav from "./Nav";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div className="h-screen flex relative ">
      <div className="left w-[40%] bg-zinc-800 h-full">
        <Nav2 />

        <div className=" mt-[10%] absolute ml-60">
          <h1 className="text-8xl text-zinc-100 font-extrabold">
            LUXURY <br />
            LIFESTYLE <br /> RENTALS
          </h1>

          <Link to={"/Explore"}>
            <button className="bg-zinc-100 px-10 py-2 mt-6 ">
              Explore More
            </button>
          </Link>
        </div>
      </div>

      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1687634366100-547fd24324f1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
        className="right h-full w-[60%] bg-no-repeat bg-cover bg-center "
      >
        <Nav />
      </div>
    </div>
  );
};

export default Home;

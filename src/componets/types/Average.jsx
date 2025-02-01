import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Average = () => {
  const navigate = useNavigate();
  const { carList } = useSelector((state) => state.car);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const savedCars = JSON.parse(localStorage.getItem("addcars")) || [];
    setCars(savedCars);
  }, [carList]);
  

  return (
    <div className="bg-zinc-700 h-full">
      <div className="h-[13%] flex items-center justify-center bg-zinc-800 fixed w-full z-20 top-0 ">
        <button
          onClick={() => navigate("/")}
          className="ml-10 bg-orange-300 rounded px-8 py-2"
        >
          Back
        </button>

        <div className="w-full h-[80px] flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-zinc-200">Average Cabs</h1>
        </div>

        <button onClick={() => navigate("/Create")} className="mr-10 bg-orange-300 rounded px-8 py-2">
          Add
        </button>
      </div>

      <div className="h-full px-28 py-12 flex mt-20 flex-wrap gap-5">
        {carList.map((c, i) => (
          <div key={i} className="h-[340px] w-[380px] overflow-hidden bg-slate-400">
            <div className="h-[60%]">
              <img className="h-full w-full object-cover" src={c.url} alt="" />
            </div>

            <div className="h-[40%] p-3">
              <h1 className="text-2xl mb-9 font-bold">{c.name}</h1>
              <Link
                to={`/Average/${c.id}`}
                className="px-40 py-3 ml-1 font-bold rounded bg-zinc-700 text-white hover:text-zinc-900 hover:bg-zinc-200 transition-all duration-300"
              >
                Show
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Average;

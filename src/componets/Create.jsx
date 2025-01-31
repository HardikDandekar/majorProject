import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCar } from "../store/reducer/carSlice";
import { nanoid } from "nanoid";

const Create = () => {
  const [namei, setName] = useState("");
  const [pinp, setPinp] = useState("");
  const [typ, setTyp] = useState("");
  const [des, setDes] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [cars, setCars] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const savedCars = JSON.parse(localStorage.getItem("addcars")) || [];
    setCars(savedCars);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const carData = {
      name: namei,
      price: pinp,
      type: typ,
      description: des,
      url: imageUrl,
      id: nanoid(),
    };

    const updatedCars = [...cars, carData];
    setCars(updatedCars);
    localStorage.setItem("addcars", JSON.stringify(updatedCars));

    dispatch(addCar(carData));

    setName("");
    setPinp("");
    setTyp("");
    setDes("");
    setImageUrl("");

    navigate("/Average");
  };

  return (
    <div className="bg-zinc-800 min-h-screen flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="bg-zinc-200 shadow-md rounded-lg p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-zinc-800 mb-4">
          Car Details Form
        </h2>

        <div className="mb-4">
          <label htmlFor="carName" className="block text-zinc-800 font-medium mb-2">
            Car Name
          </label>
          <input
            value={namei}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="carName"
            name="carName"
            placeholder="Enter car name"
            className="w-full px-4 py-2 border rounded-lg bg-zinc-300 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-zinc-800 font-medium mb-2">
            Price (per day)
          </label>
          <input
            value={pinp}
            onChange={(e) => setPinp(e.target.value)}
            type="number"
            id="price"
            name="price"
            placeholder="Enter price"
            className="w-full px-4 py-2 border rounded-lg bg-zinc-300 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="carType" className="block text-zinc-800 font-medium mb-2">
            Car Type
          </label>
          <select
            value={typ}
            onChange={(e) => setTyp(e.target.value)}
            id="carType"
            name="carType"
            className="w-full px-4 py-2 border rounded-lg bg-zinc-300 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-600"
          >
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-zinc-800 font-medium mb-2">
            Description
          </label>
          <textarea
            value={des}
            onChange={(e) => setDes(e.target.value)}
            id="description"
            name="description"
            placeholder="Enter car description"
            className="w-full px-4 py-2 border rounded-lg bg-zinc-300 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-600"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-zinc-800 font-medium mb-2">
            Car Image URL
          </label>
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Enter image URL"
            className="w-full px-4 py-2 border rounded-lg bg-zinc-300 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-zinc-600 text-zinc-200 py-2 rounded-lg hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;

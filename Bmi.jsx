import React from "react";
import dietIcon from "./BMIphoto/diet.jpg";
import { useState } from "react";
export const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setBmiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const calculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    if (isValidHeight && isValidWeight) {
      const heightInMeters = height / 100; // converting CM to METER
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2)); // the bmivalue is converted into fixed numbers in length 2
      if (bmiValue < 18.5) {
        setBmiStatus("Under Weight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("Over Weight");
      } else {
        setBmiStatus("Obese"); // weight over weight then the over weight
      }
      setErrorMessage("");
    } else {
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("Please Enter an Valid Numbers");
    }
  };
  return (
    <>
      <section className="text-center w-screen h-screen flex justify-center items-center bg-blue-50">
        <div className=" border border-blue-500 hover:border-blue-600 hover:border-4 shadow-lg  rounded-lg  w-auto h-auto pr-40 pl-40 bg-white">
          <h1 className="font-post text-4xl text-blue-700 flex justify-center mb-3 mt-5 items-center select-none ">
            BMI Calculator
          </h1>
          <img src={dietIcon} alt="" className="w-80 mb-4 select-none" />
          <div>
            {errorMessage && (
              <p className="text-red-600 pb-3 font-nano"> {errorMessage} </p>
            )}
          </div>
          <div>
            <label
              htmlFor="height"
              className="block  font-ubuntu font-semibold text-2xl mb-3 select-none"
            >
              {" "}
              Height (CM)
            </label>
            <input
              type="text"
              name=""
              id="height"
              placeholder="Enter Height"
              className="text-2xl mb-4 p-2 focus:outline-blue-700 border-2 rounded-md border-blue-500"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <div>
              <label
                htmlFor="weight"
                className="block font-ubuntu font-semibold text-2xl mb-3 select-none "
              >
                Weigth(Kg)
              </label>
              <input
                type="text"
                name=""
                id="weight"
                placeholder="Enter Weight"
                className="text-2xl mb-4 p-2 focus:outline-blue-700 border-2 rounded-md border-blue-500"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              className="hover:bg-blue-900 bg-blue-500 text-white p-3 rounded-lg text-2xl m-3 font-nano font-medium "
              onClick={calculateBmi}
            >
              Calulate BMI
            </button>
            {bmi !== null && (
              <div className="text-3xl m-2 font-bold font-nano">
                <p className="m-2 mt-6 mb-6 text-blue-600">
                  Your BMI is : {bmi}
                </p>
                <p className="m-2 mb-7 font-nano"> Status: {status}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

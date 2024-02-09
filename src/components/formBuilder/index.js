import React from "react";
import Add from "./add";
import Form from "./form";
import Display from "./display";
import { useNavigate } from "react-router-dom";

function Index(props) {
  const navigate = useNavigate();
  return (
    <div
      className="App flex flex-col  justify-center items-center min-h-screen"
      style={{
        backgroundColor: "#4158D0",
        backgroundImage:
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      }}
    >
      <div className="flex">
        <div className="w-96 m-5">
          <Add />
          <Form />
        </div>
        <div className="w-96 m-5">
          <Display />
        </div>
      </div>

      <div
        className="absolute left-5 top-5 p-2 bg-gray-800 shadow-2xl rounded text-white font-bold text-sm cursor-pointer"
        onClick={() => {
          navigate("/select");
        }}
      >
        Go To Custom Select
      </div>
    </div>
  );
}

export default Index;

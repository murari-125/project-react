import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { formSliceActions } from "../../store/formSlice";

function Index(props) {
  const dispatch = useDispatch();

  const [label, setLabel] = useState("");
  const [label2, setLabel2] = useState("");
  const [options, setOptions] = useState([]);

  const handleAddInputClick = (e) => {
    e.preventDefault();
    const formEle = document.getElementById("addInputForm9248");

    if (formEle && formEle.checkValidity()) {
      dispatch(formSliceActions.addInput(label));
      setLabel(() => "");
    } else formEle.reportValidity();
  };
  const handleAddSelectClick = (e) => {
    e.preventDefault();
    const formEle = document.getElementById("addSelectForm928");

    if (formEle && formEle.checkValidity()) {
      dispatch(formSliceActions.addSelect({ label: label2, options }));
      setLabel2(() => "");
      setOptions(() => []);
    } else formEle.reportValidity();
  };

  return (
    <div className="">
      <div className="text-xl font-bold text-white">Actions</div>
      <form action="" id="addInputForm9248" className="flex flex-col items-end">
        <input
          type="text"
          placeholder="add label for input"
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          value={label}
          onChange={(e) => {
            setLabel(() => e.target.value);
          }}
        />
        <button
          className="mt-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleAddInputClick}
        >
          Add Input
        </button>
      </form>
      <form
        action=""
        id="addSelectForm928"
        className="flex flex-col items-end mt-3"
      >
        <div className="flex w-full">
          <input
            type="text"
            placeholder="add label for input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={label2}
            onChange={(e) => {
              setLabel2(() => e.target.value);
            }}
          />
          <div className="mx-1"></div>
          <input
            type="text"
            placeholder="add , separated options"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={options}
            multiple
            onChange={(e) => {
              const enteredOptions = e.target.value;
              const uniqueOptions = [
                ...new Set(enteredOptions.split(",")),
              ].join(",");
              setOptions(uniqueOptions);
            }}
          />
        </div>
        <button
          className="mt-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleAddSelectClick}
        >
          Add Select
        </button>
      </form>
    </div>
  );
}

export default Index;

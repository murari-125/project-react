import React from "react";
import { useSelector } from "react-redux";

function Index(props) {
  const getAllData = useSelector((state) => state.form.data);

  // console.log(getAllData.map((arr) => arr.map((o) => o)));
  console.log(getAllData);

  return (
    <div className="">
      {getAllData.length > 0 && (
        <>
          <div className="text-xl font-bold text-white">Display</div>

          {getAllData.map((arr) => {
            return (
              <div className="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white ">
                {arr.map((o) => (
                  <div className="flex p-1 rounded items-center">
                    <div className="break-words p-2 rounded shadow-2xl bg-gray-800">
                      {o.label}
                    </div>
                    <div className="mx-3">:</div>
                    <div className="break-all">{o.value}</div>
                  </div>
                ))}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Index;

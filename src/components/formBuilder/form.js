import React, { useEffect } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { formSliceActions } from "../../store/formSlice";

function Index(props) {
  const dispatch = useDispatch();
  const formElements = useSelector((state) => state.form.form);

  const handleSaveClick = (e) => {
    e.preventDefault();
    const formEle = document.getElementById("form98374");

    if (formEle && formEle.checkValidity()) {
      dispatch(
        formSliceActions.addData(
          formElements.map((e) => {
            return { id: e.id, label: e.label, value: e.value };
          })
        )
      );
      dispatch(formSliceActions.resetFormValues());
    } else formEle.reportValidity();
  };

  useEffect(() => {
    formElements.forEach((element) => {
      if (!element.isInput) {
        console.log(element.id, element.options.split(",")[0]);
        dispatch(
          formSliceActions.setSelect({
            id: element.id,
            value:
              element.value ||
              (element.options ? element.options.split(",")[0] : ""), // Set initial value
          })
        );
      }
    });
  }, [dispatch, formElements]);

  console.log(formElements);

  return (
    <div>
      {formElements.length > 0 && (
        <>
          <div className="text-xl font-bold text-white">Custom Form</div>

          <form action="" id="form98374">
            {formElements.map((element) => {
              return element.isInput ? (
                <div>
                  <div class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {element.label}
                  </div>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id={element.id}
                    value={element.value}
                    required
                    onChange={(e) => {
                      dispatch(
                        formSliceActions.setInput({
                          id: element.id,
                          value: e.target.value,
                        })
                      );
                    }}
                  />
                </div>
              ) : (
                <div>
                  <div class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {element.label}
                  </div>

                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id={element.id}
                    value={
                      element.value ||
                      (element.options ? element.options.split(",")[0] : "")
                    } // Initialize value with the first option
                    required
                    onChange={(e) => {
                      dispatch(
                        formSliceActions.setSelect({
                          id: element.id,
                          value: e.target.value,
                        })
                      );
                    }}
                  >
                    {element?.options?.split(",").map?.((op) => (
                      <option key={op} value={op}>
                        {op}
                      </option>
                    ))}
                  </select>
                </div>
              );
            })}

            <div
              className="cursor-pointer mt-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleSaveClick}
            >
              Save
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Index;

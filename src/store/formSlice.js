import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: [
    // { isInput: false,label : "", id: 1, value: "", options: [1, 2] }
  ],

  data: [],
};

let formSlice = createSlice({
  name: "inviteSlice",
  initialState: initialState,
  reducers: {
    addInput(state, action) {
      state.form.push({
        isInput: true,
        id: state.form.length,
        label: action.payload,
        value: "",
      });
    },
    addSelect(state, action) {
      console.log(action.payload);
      state.form.push({
        isInput: false,
        id: state.form.length,
        label: action.payload.label,

        value: "",
        options: action.payload.options,
      });
    },
    setInput(state, action) {
      const { id, value } = action.payload;
      console.log(id, value, action.payload);
      const index = state.form.findIndex((item) => item.id == id);
      if (index !== -1) {
        state.form[index].value = value;
      }
    },
    setSelect(state, action) {
      const { id, value } = action.payload;
      const index = state.form.findIndex((item) => item.id == id);
      if (index !== -1) {
        state.form[index].value = value;
      }
    },

    resetFormValues(state, action) {
      state.form.forEach((i) => (i.value = ""));
    },

    addData(state, action) {
      // [{id, label, value}]
      state.data.push(action.payload);
    },
  },
});

export const formSliceActions = formSlice.actions;

export default formSlice;

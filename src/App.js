import { Form, Route, Routes } from "react-router-dom";
import FormBuilder from "./components/formBuilder";
import CustomSelect from "./components/customSelect";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormBuilder />} />
      <Route path="/select" element={<CustomSelect />} />
    </Routes>
  );
}

export default App;

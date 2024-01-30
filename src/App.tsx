import { useState } from "react";
import InputFormPersonal from "./components/InputFormPersonal";
import InputFormSchool from "./components/InputFormSchool";

function App() {
  return (
    <div>
      <InputFormPersonal />
      <InputFormSchool />
    </div>
  );
}

export default App;

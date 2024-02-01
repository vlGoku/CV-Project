import { useState } from "react";
import InputFormPersonal from "./components/InputFormPersonal";
import InputFormSchool from "./components/InputFormSchool";
import InputFormWork from "./components/InputFormWork";
import "@picocss/pico";

function App() {
  const appStyle = {
    margin: "auto",
    width: "50%",
  };

  return (
    <>
      <div style={appStyle}>
        <h1>Lebenslauf</h1>
        <InputFormSchool />
      </div>
    </>
  );
}

export default App;

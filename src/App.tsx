import InputFormPersonal from "./components/InputFormPersonal";
import InputFormSchool from "./components/InputFormSchool";
import InputFormWork from "./components/InputFormWork";
import "@picocss/pico";

function App() {
  const appStyle = {
    border: "1px solid black",
    padding: "30px",
  };

  return (
    <>
      <div className="container" style={appStyle}>
        <div className="containerPersonal">
          <h1>Lebenslauf</h1>
          <InputFormPersonal />
        </div>
        <div className="containerSchool">
          <InputFormSchool />
        </div>
        <div className="containerWorkplace">
          <InputFormWork />
        </div>
      </div>
    </>
  );
}

export default App;

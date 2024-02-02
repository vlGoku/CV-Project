import InputFormPersonal from "./components/InputFormPersonal";
import InputFormSchool from "./components/InputFormSchool";
import InputFormWork from "./components/InputFormWork";
import "@picocss/pico";
import "./app.css";

function App() {
  const appStyle = {
    border: "1px solid black",
    padding: "30px",
  };

  return (
    <>
      <div className="container" style={appStyle}>
        <div className="containerPersonal">
          <h1 className="overallHeader">Lebenslauf</h1>
          <InputFormPersonal />
        </div>
        <div className="containerSchool">
          <h2 className="headerCategories">School</h2>
          <div className="outputSchool">
            <InputFormSchool />
          </div>
        </div>
        <div className="containerWorkplace">
          <h2 className="headerCategories">Workplace</h2>
          <div className="outputWorkplace">
            <InputFormWork />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

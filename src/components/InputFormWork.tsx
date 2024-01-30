import { ChangeEvent, FormEvent, useState } from "react";
import ViewWork from "./ViewWork";

export default function InputFormWork() {
  const initialUserData = {
    start: "",
    end: "",
    nameOfWorkplace: "",
  };

  const [userData, setUserData] = useState(initialUserData);

  //Style Object*******
  const formStyle = {
    backgroundColor: "#777777",
    borderRadius: "10px",
    width: "300px",
  };
  const blockStyle = {
    display: "block",
  };
  const paddingStyle = {
    padding: "10px",
  };
  const btnStyle = {
    margin: "10px",
    padding: "10px",
    backgroundColor: "#ADD8E6",
    border: "none",
    borderRadius: "3px",
  };
  //Style Object *******

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setUserData({ ...userData, [type]: e?.target?.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <form style={formStyle} onSubmit={(e) => handleSubmit(e)}>
        <div style={paddingStyle}>
          <label style={blockStyle}>Start</label>
          <input
            type="date"
            value={userData.start}
            onChange={(e) => handleInputChange(e, "start")}
          ></input>
        </div>
        <div style={paddingStyle}>
          <label style={blockStyle}>End</label>
          <input
            type="date"
            value={userData.end}
            onChange={(e) => handleInputChange(e, "end")}
          ></input>
        </div>
        <div style={paddingStyle}>
          <label style={blockStyle}>Name of Workplace</label>
          <input
            type="text"
            value={userData.nameOfWorkplace}
            onChange={(e) => handleInputChange(e, "nameOfWorkplace")}
          ></input>
        </div>
        <button type="submit" style={btnStyle}>
          Done{" "}
        </button>
      </form>
      <ViewWork data={userData} />
    </>
  );
}

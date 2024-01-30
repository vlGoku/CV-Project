import { useState } from "react";

export default function InputFormPersonal() {
  const initialUserData = {
    firstname: "",
    lastname: "",
    dateofbirth: "",
    street: "",
    zipcode: "",
    country: "",
  };
  //State
  const [userData, setUserData] = useState(initialUserData);
  //Style Objects ***********
  const blockStyle = {
    display: "block",
  };
  const paddingStyle = {
    padding: "10px",
  };
  const btnStyle = {
    padding: "10px",
    backgroundColor: "#ADD8E6",
    border: "none",
  };
  //Style Objects *******

  return (
    <form>
      <div style={paddingStyle}>
        <label style={blockStyle}>First Name</label>
        <input type="text" value={userData.firstname}></input>
      </div>
      <div style={paddingStyle}>
        <label style={blockStyle}>Last Name</label>
        <input type="text" value={userData.lastname}></input>
      </div>
      <div style={paddingStyle}>
        <label style={blockStyle}>Date of Birth</label>
        <input type="date" value={userData.dateofbirth}></input>
      </div>
      <div style={paddingStyle}>
        <label style={blockStyle}>Street</label>
        <input type="text" value={userData.street}></input>
      </div>
      <div style={paddingStyle}>
        <label style={blockStyle}>ZIP-Code</label>
        <input type="text" value={userData.zipcode}></input>
      </div>
      <div style={paddingStyle}>
        <label style={blockStyle}>Country</label>
        <input type="text" value={userData.country}></input>
      </div>
    </form>
  );
}

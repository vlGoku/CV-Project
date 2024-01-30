import { ChangeEvent, FormEvent, useState } from "react";
import ViewPersonal from "./ViewPersonal";

export default function InputFormPersonal() {
  const initialUserData = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    street: "",
    zipCode: "",
    country: "",
  };
  //State
  const [userData, setUserData] = useState(initialUserData);
  //Style Objects ***********
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
  //Style Objects *******
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleEditMode = () => {
    setEditMode(true);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setUserData({ ...userData, [type]: e?.target?.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEditMode(false);
  };

  return (
    <>
      <form style={formStyle} onSubmit={(e) => handleSubmit(e)}>
        <div style={paddingStyle}>
          <label style={blockStyle}>First Name</label>
          <input
            type="text"
            value={userData.firstName}
            onChange={(e) => handleInputChange(e, "firstName")}
          ></input>
        </div>
        <div style={paddingStyle}>
          <label style={blockStyle}>Last Name</label>
          <input
            type="text"
            value={userData.lastName}
            onChange={(e) => handleInputChange(e, "lastName")}
          ></input>
        </div>
        <div style={paddingStyle}>
          <label style={blockStyle}>Date of Birth</label>
          <input
            type="date"
            value={userData.dateOfBirth}
            onChange={(e) => handleInputChange(e, "dateOfBirth")}
          ></input>
        </div>
        <div style={paddingStyle}>
          <label style={blockStyle}>Street</label>
          <input
            type="text"
            value={userData.street}
            onChange={(e) => handleInputChange(e, "street")}
          ></input>
        </div>
        <div style={paddingStyle}>
          <label style={blockStyle}>ZIP-Code</label>
          <input
            type="text"
            value={userData.zipCode}
            onChange={(e) => handleInputChange(e, "zipCode")}
          ></input>
        </div>
        <div style={paddingStyle}>
          <label style={blockStyle}>Country</label>
          <input
            type="text"
            value={userData.country}
            onChange={(e) => handleInputChange(e, "country")}
          ></input>
        </div>
        <button type="submit" style={btnStyle}>
          Done{" "}
        </button>
      </form>
      <ViewPersonal data={userData} />
    </>
  );
}

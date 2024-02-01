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

  const [editMode, setEditMode] = useState<boolean>(true);

  const handleEditMode = () => {
    setEditMode(false);
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
      {editMode && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>First Name</label>
            <input
              type="text"
              value={userData.firstName}
              onChange={(e) => handleInputChange(e, "firstName")}
            ></input>
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              value={userData.lastName}
              onChange={(e) => handleInputChange(e, "lastName")}
            ></input>
          </div>
          <div>
            <label>Date of Birth</label>
            <input
              type="date"
              value={userData.dateOfBirth}
              onChange={(e) => handleInputChange(e, "dateOfBirth")}
            ></input>
          </div>
          <div>
            <label>Street</label>
            <input
              type="text"
              value={userData.street}
              onChange={(e) => handleInputChange(e, "street")}
            ></input>
          </div>
          <div>
            <label>ZIP-Code</label>
            <input
              type="text"
              value={userData.zipCode}
              onChange={(e) => handleInputChange(e, "zipCode")}
            ></input>
          </div>
          <div>
            <label>Country</label>
            <input
              type="text"
              value={userData.country}
              onChange={(e) => handleInputChange(e, "country")}
            ></input>
          </div>
          <button type="submit" onClick={() => handleEditMode()}>
            Done{" "}
          </button>
        </form>
      )}
      <ViewPersonal data={userData} />
      <button type="submit" onClick={() => setEditMode(true)}>
        Edit
      </button>
    </>
  );
}

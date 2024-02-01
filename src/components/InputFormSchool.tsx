import { ChangeEvent, FormEvent, useState, MouseEvent } from "react";
import ViewSchool from "./ViewSchool";

type TSchool = {
  start: string;
  end: string;
  nameOfSchool: string;
};

export default function InputFormSchool() {
  const initSchool = {
    start: "",
    end: "",
    nameOfSchool: "",
  };
  //State
  const [school, setSchool] = useState<TSchool>(initSchool);

  const [schools, setSchools] = useState<TSchool[]>([]);

  const [editMode, setEditMode] = useState<boolean>(true);

  const handleEditMode = () => {
    setEditMode(false);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setSchool({ ...school, [type]: e?.target?.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleAddSchool = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSchools([...schools, school]);
    setSchool({ start: "", end: "", nameOfSchool: "" });
    handleEditMode();
  };

  const handleDeleteSchool = (name: string) => {
    setSchools(schools.filter((school) => school.nameOfSchool !== name));
  };

  return (
    <>
      <h3>School</h3>
      {editMode && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Start</label>
            <input
              type="date"
              value={school.start}
              onChange={(e) => handleInputChange(e, "start")}
            ></input>
          </div>
          <div>
            <label>End</label>
            <input
              type="date"
              value={school.end}
              onChange={(e) => handleInputChange(e, "end")}
            ></input>
          </div>
          <div>
            <label>Name of School</label>
            <input
              type="text"
              value={school.nameOfSchool}
              onChange={(e) => handleInputChange(e, "nameOfSchool")}
            ></input>
          </div>
          <button onClick={(e) => handleAddSchool(e)}>Add School</button>
        </form>
      )}
      <ViewSchool data={schools} onDelete={handleDeleteSchool} />
      <button type="submit" onClick={() => setEditMode(true)}>
        Add School
      </button>
    </>
  );
}

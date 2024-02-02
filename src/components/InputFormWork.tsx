import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import ViewWork from "./ViewWork";

type TWorkplace = {
  start: string;
  end: string;
  nameOfWorkplace: string;
};

export default function InputFormWork() {
  const initWork = {
    start: "",
    end: "",
    nameOfWorkplace: "",
  };

  const [work, setWorkplace] = useState<TWorkplace>(initWork);

  const [workplaces, setWorkplaces] = useState<TWorkplace[]>([]);

  const [editMode, setEditMode] = useState<boolean>(true);

  const handleEditMode = () => {
    setEditMode(false);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setWorkplace({ ...work, [type]: e?.target?.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleAddWorkplace = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setWorkplaces([...workplaces, work]);
    setWorkplace({ start: "", end: "", nameOfWorkplace: "" });
    handleEditMode();
  };

  const handleDeleteWorkplace = (name: string) => {
    setWorkplaces(workplaces.filter((work) => work.nameOfWorkplace !== name));
  };

  return (
    <>
      {editMode && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Start</label>
            <input
              type="date"
              value={work.start}
              onChange={(e) => handleInputChange(e, "start")}
            ></input>
          </div>
          <div>
            <label>End</label>
            <input
              type="date"
              value={work.end}
              onChange={(e) => handleInputChange(e, "end")}
            ></input>
          </div>
          <div>
            <label>Name of Workplace</label>
            <input
              type="text"
              value={work.nameOfWorkplace}
              onChange={(e) => handleInputChange(e, "nameOfWorkplace")}
            ></input>
          </div>
          <button type="submit" onClick={(e) => handleAddWorkplace(e)}>
            Done{" "}
          </button>
        </form>
      )}
      <ViewWork data={workplaces} onDelete={handleDeleteWorkplace} />
      <button
        className="buttonAdd"
        type="submit"
        onClick={() => setEditMode(true)}
      >
        Add Workplace
      </button>
    </>
  );
}

type TProps = {
  data: {
    start: string;
    end: string;
    nameOfSchool: string;
  }[];
  onDelete: (name: string) => void;
};

export default function ViewSchool(props: TProps) {
  return (
    <>
      {props.data.map((school) => {
        return (
          <ul className="listStyle" key={school.nameOfSchool}>
            <li contentEditable>
              <h3>Name of School: {school.nameOfSchool}</h3>
            </li>
            <li contentEditable>
              <h3>
                Period: {school.start} - {school.end}
              </h3>
            </li>
            <button onClick={() => props.onDelete(school.nameOfSchool)}>
              Delete
            </button>
          </ul>
        );
      })}
    </>
  );
}

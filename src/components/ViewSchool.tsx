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
          <ul key={school.nameOfSchool}>
            <li contentEditable>Name of School: {school.nameOfSchool}</li>
            <li contentEditable>
              Period: {school.start} - {school.end}
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

type TProps = {
  data: {
    start: string;
    end: string;
    nameOfSchool: string;
  }[];
};

export default function ViewSchool(props: TProps) {
  return (
    <>
      <h3>School</h3>
      {props.data.map((school) => {
        <ul key={school.nameOfSchool}>
          <li>
            {school.start} {school.end}
          </li>
        </ul>;
      })}
    </>
  );
}

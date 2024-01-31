type TProps = {
  data: {
    start: string;
    end: string;
    nameOfSchool: string;
  };
};

export default function ViewSchool(props: TProps) {
  return (
    <div className="viewSchoolDiv">
      <h3>Start: {props.data.start}</h3>
      <h3>End: {props.data.end}</h3>
      <h3>Name of School: {props.data.nameOfSchool}</h3>
    </div>
  );
}

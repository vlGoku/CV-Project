type TProps = {
  data: {
    start: string;
    end: string;
    nameOfWorkplace: string;
  };
};

export default function ViewWork(props: TProps) {
  return (
    <div>
      <h3>Start: {props.data.start}</h3>
      <h3>End: {props.data.end}</h3>
      <h3>Name of Workplace: {props.data.nameOfWorkplace}</h3>
    </div>
  );
}

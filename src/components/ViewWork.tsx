type TProps = {
  data: {
    start: string;
    end: string;
    nameOfWorkplace: string;
  }[];
  onDelete: (name: string) => void;
};

export default function ViewWork(props: TProps) {
  return (
    <>
      {props.data.map((work) => {
        return (
          <ul key={work.nameOfWorkplace}>
            <li contentEditable>Workplace: {work.nameOfWorkplace}</li>
            <li contentEditable>
              Period: {work.start} - {work.end}
            </li>
            <button onClick={() => props.onDelete(work.nameOfWorkplace)}>
              Delete
            </button>
          </ul>
        );
      })}
    </>
  );
}

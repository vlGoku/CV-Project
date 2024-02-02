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
          <ul className="listStyle" key={work.nameOfWorkplace}>
            <li contentEditable>
              <h3>Workplace: {work.nameOfWorkplace}</h3>
            </li>
            <li contentEditable>
              <h3>
                Period: {work.start} - {work.end}
              </h3>
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

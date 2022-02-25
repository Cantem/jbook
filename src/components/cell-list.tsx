import { useTypedSelector } from "../hooks/use-typed-selector";
import { Cell } from "../state";
import CellListItem from "./cell-list-item";

const CellList: React.FC = () => {
  // @ts-ignore
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id: string) => data[id])
  );

  const renderedCells = cells.map((cell: Cell) => (
    <CellListItem key={cell.id} cell={cell} />
  ));

  return <div>{renderedCells}</div>;
};

export default CellList;

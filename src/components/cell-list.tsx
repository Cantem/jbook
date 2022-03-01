import "./cell-list.css";
import { Fragment } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { Cell } from "../state";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";

const CellList: React.FC = () => {
  // @ts-ignore
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id: string) => data[id])
  );

  const renderedCells = cells.map((cell: Cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div className="cell-list">
      <AddCell forceVisible={cells.length === 0} previousCellId={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;

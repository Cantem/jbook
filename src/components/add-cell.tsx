import "./add-cell.css";
import { useActions } from "../hooks/use-actions";
import Button from "./button";

interface AddCellProps {
  previousCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ previousCellId, forceVisible }) => {
  const { insertCellAfter } = useActions();

  return (
    <div className={`add-cell ${forceVisible && "force-visible"}`}>
      <div className="add-buttons">
        <Button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(previousCellId, "code")}
        >
          <span className="icon is-small">
            <i className="fas fa-plus"></i>
          </span>
          <span>Code</span>
        </Button>
        <Button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(previousCellId, "text")}
        >
          <span className="icon is-small">
            <i className="fas fa-plus"></i>
          </span>
          <span>Text</span>
        </Button>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;

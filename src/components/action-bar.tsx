import "./action-bar.css";
import { useActions } from "../hooks/use-actions";
import Button from "./button";

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div className="action-bar">
      <Button
        className="button is-primary is-small"
        onClick={() => moveCell(id, "up")}
      >
        <span className="icon">
          <i className="fas fa-arrow-up" />
        </span>
      </Button>
      <Button
        className="button is-primary is-small"
        onClick={() => moveCell(id, "down")}
      >
        <span className="icon">
          <i className="fas fa-arrow-down" />
        </span>
      </Button>
      <Button
        className="button is-primary is-small"
        onClick={() => deleteCell(id)}
      >
        <span className="icon">
          <i className="fas fa-times" />
        </span>
      </Button>
    </div>
  );
};

export default ActionBar;

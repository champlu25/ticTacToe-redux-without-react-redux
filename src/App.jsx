import "./App.css";
import Field from "./components/Field/Field";
import Information from "./components/Information/Information";
import PropTypes from "prop-types";
import { useState } from "react";

const AppLayout = ({
  currentPlayer,
  setCurrentPlayer,
  isGameEnded,
  setIsGameEnded,
  isDraw,
  setIsDraw,
  field,
  setField,
}) => {
  return (
    <>
      <Information
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        field={field}
        isGameEnded={isGameEnded}
        setIsGameEnded={setIsGameEnded}
        isDraw={isDraw}
        setIsDraw={setIsDraw}
      />
      <Field
        field={field}
        setField={setField}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
      />
      <button
        className="restart-btn"
        onClick={() => {
          setCurrentPlayer("X");
          setIsGameEnded(false);
          setIsDraw(false);
          setField(["", "", "", "", "", "", "", "", ""]);
        }}
      >
        Начать заново
      </button>
    </>
  );
};

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

  return (
    <AppLayout
      currentPlayer={currentPlayer}
      setCurrentPlayer={setCurrentPlayer}
      isGameEnded={isGameEnded}
      setIsGameEnded={setIsGameEnded}
      isDraw={isDraw}
      setIsDraw={setIsDraw}
      field={field}
      setField={setField}
    />
  );
}
AppLayout.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  setIsGameEnded: PropTypes.func.isRequired,
  isDraw: PropTypes.bool.isRequired,
  setIsDraw: PropTypes.func.isRequired,
  field: PropTypes.array.isRequired,
  setField: PropTypes.func.isRequired,
};

export default App;

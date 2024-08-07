import styles from "./field.module.css";
import PropTypes from "prop-types";

// stateless-компонент
// Игровое поле 3x3 (9 кнопок)
const FieldLayout = ({ field, setField, currentPlayer, setCurrentPlayer }) => {
  return (
    <>
      <div className={styles.playingField}>
        {field.map((cell, index) => (
          <button
            disabled={field[index] !== ""}
            onClick={() => {
              currentPlayer === "X"
                ? setCurrentPlayer("O")
                : setCurrentPlayer("X");
              setField((prevField) => {
                const newField = [...prevField];
                newField[index] = currentPlayer;
                return newField;
              });
            }}
            key={index}
            className={styles.cell}
          >
            {cell}
          </button>
        ))}
      </div>
    </>
  );
};

// statefull-компонент:

const Field = ({ field, setField, currentPlayer, setCurrentPlayer }) => {
  return (
    <FieldLayout
      field={field}
      setField={setField}
      currentPlayer={currentPlayer}
      setCurrentPlayer={setCurrentPlayer}
    />
  );
};

Field.propTypes = {
  field: PropTypes.array.isRequired,
  setField: PropTypes.func.isRequired,
  currentPlayer: PropTypes.string.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired,
};

FieldLayout.propTypes = {
  field: PropTypes.array.isRequired,
  setField: PropTypes.func.isRequired,
  currentPlayer: PropTypes.string.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired,
};

export default Field;

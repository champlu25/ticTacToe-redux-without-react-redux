import styles from "./information.module.css";
import PropTypes from "prop-types";

// stateless-компонент
const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
  return (
    <>
      <div className={styles.statusGame}>
        {!isDraw && isGameEnded ? `Победа: ${currentPlayer}` : null}
        {isDraw ? "Ничья" : null}
        {!isDraw && !isGameEnded ? `Ходит: ${currentPlayer}` : null}
      </div>
    </>
  );
};

// statefull-компонент
const Information = ({
  currentPlayer,
  setCurrentPlayer,
  field,
  isGameEnded,
  setIsGameEnded,
  isDraw,
  setIsDraw,
}) => {
  const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8],
    [2, 4, 6], // Варианты побед по диагонали
  ];

  // Проверка на победу
  for (let i = 0; i < WIN_PATTERNS.length; i++) {
    const xWin = WIN_PATTERNS[i].every((el) => field[el] === "X");
    const oWin = WIN_PATTERNS[i].every((el) => field[el] === "O");

    if (xWin) {
      setCurrentPlayer("X");
      setIsGameEnded(true);
      return (
        <InformationLayout
          currentPlayer={currentPlayer}
          isGameEnded={isGameEnded}
          isDraw={isDraw}
        />
      );
    } else if (oWin) {
      setCurrentPlayer("O");
      setIsGameEnded(true);
      return (
        <InformationLayout
          currentPlayer={currentPlayer}
          isGameEnded={isGameEnded}
          isDraw={isDraw}
        />
      );
    }
  }

  // Проверка на ничью только если игра не закончилась победой
  if (!isGameEnded) {
    const isFinish = field.every((el) => el !== "");
    if (isFinish) {
      setIsDraw(true);
      setIsGameEnded(true);
    }
  }

  return (
    <InformationLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
    />
  );
};

Information.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired,
  field: PropTypes.array.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  setIsGameEnded: PropTypes.func.isRequired,
  isDraw: PropTypes.bool.isRequired,
  setIsDraw: PropTypes.func.isRequired,
};

InformationLayout.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
};

export default Information;

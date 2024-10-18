import styles from "./field.module.css";
import { store } from "../../store";

// stateless-компонент
// Игровое поле 3x3 (9 кнопок)
const FieldLayout = () => {
  const onClick = (currentPlayer, index) => {
    store.dispatch({
      type: "SET_FIELD",
      payload: { currentPlayer, index },
    });

    const { field } = store.getState();

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

      if (xWin || oWin) {
        store.dispatch({ type: "SET_STATUS_GAME_END", payload: true });
        return;
      }
    }

    // Проверка на ничью
    const isFinish = field.every((el) => el !== "");
    if (isFinish) {
      store.dispatch({ type: "SET_STATUS_GAME_DRAW", payload: true });
      store.dispatch({ type: "SET_STATUS_GAME_END", payload: true });
    } else {
      store.dispatch({
        type: "SET_CURRENT_PLAYER",
        payload: currentPlayer === "X" ? "O" : "X",
      });
    }
  };

  const { field, currentPlayer, isGameEnded } = store.getState();

  return (
    <div className={styles.playingField}>
      {field.map((cell, index) => (
        <button
          disabled={field[index] !== "" || isGameEnded}
          onClick={() => onClick(currentPlayer, index)}
          key={index}
          className={styles.cell}
        >
          {cell}
        </button>
      ))}
    </div>
  );
};

// statefull-компонент:
const Field = () => {
  return <FieldLayout />;
};

export default Field;

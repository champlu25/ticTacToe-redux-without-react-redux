import { FieldLayout } from "./FieldLayout";
import { store } from "../../store";

// statefull-компонент:
export const Field = () => {
  const { field, currentPlayer, isGameEnded } = store.getState();

  const onClick = (currentPlayer, index) => {
    store.dispatch({
      type: "SET_FIELD",
      payload: { currentPlayer, index },
    });

    const updateField = [...field];
    updateField[index] = currentPlayer;

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
      const xWin = WIN_PATTERNS[i].every((el) => updateField[el] === "X");
      const oWin = WIN_PATTERNS[i].every((el) => updateField[el] === "O");

      if (xWin || oWin) {
        store.dispatch({ type: "SET_STATUS_GAME_END", payload: true });
        return;
      }
    }

    // Проверка на ничью
    const isFinish = updateField.every((el) => el !== "");
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

  return (
    <FieldLayout
      field={field}
      isGameEnded={isGameEnded}
      onClick={onClick}
      currentPlayer={currentPlayer}
    />
  );
};

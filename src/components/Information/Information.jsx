import { store } from "../../store";
import { InformationLayout } from "./InformationLayout";

// statefull-компонент
export const Information = () => {
  const { isDraw, isGameEnded, currentPlayer } = store.getState();

  return (
    <InformationLayout
      isDraw={isDraw}
      isGameEnded={isGameEnded}
      currentPlayer={currentPlayer}
    />
  );
};

import styles from "./information.module.css";
import { store } from "../../store";

// stateless-компонент
const InformationLayout = () => {
  const { isDraw, isGameEnded, currentPlayer } = store.getState();

  return (
    <div className={styles.statusGame}>
      {isGameEnded && !isDraw ? `Победа: ${currentPlayer}` : null}
      {isDraw ? "Ничья" : null}
      {!isDraw && !isGameEnded ? `Ходит: ${currentPlayer}` : null}
    </div>
  );
};

// statefull-компонент
const Information = () => {
  return <InformationLayout />;
};

export default Information;

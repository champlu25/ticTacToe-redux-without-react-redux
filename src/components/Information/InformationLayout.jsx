import styles from "./information.module.css";

// stateless-компонент
export const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
  return (
    <div className={styles.statusGame}>
      {isGameEnded && !isDraw ? `Победа: ${currentPlayer}` : null}
      {isDraw ? "Ничья" : null}
      {!isDraw && !isGameEnded ? `Ходит: ${currentPlayer}` : null}
    </div>
  );
};

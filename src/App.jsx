import Board from "./Components/Board/Board";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.gameField}>
      <Board />
    </div>
  );
};

export default App;

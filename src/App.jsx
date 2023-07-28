import BoardComponent from "./Components/Board/Board";
import styles from "./App.module.scss";

const App = () => {
  
  return (
    <div className={styles.gameField}>
      <BoardComponent />
    </div>
  );
};

export default App;

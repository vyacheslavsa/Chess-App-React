import styles from "./Board.module.scss";
import cn from "classnames";

const Board = () => {
  const arrCage = [...new Array(64)];

  let isEvenNumber = true;

  return (
    <div className={styles.rootBoard}>
      {arrCage.map((_, i) => {
        isEvenNumber = i > 7 && i % 8 === 0 ? !isEvenNumber : isEvenNumber;
        const isBlackCage = i % 2 === 0;

        return (
          <div className={cn(styles.cage, { [styles.blackCage]: isEvenNumber ? isBlackCage : !isBlackCage })} key={i}>
            {i}
          </div>
        );
      })}
    </div>
  );
};

export default Board;

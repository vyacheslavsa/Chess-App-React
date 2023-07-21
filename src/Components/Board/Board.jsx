/* eslint-disable react/prop-types */
import styles from "./Board.module.scss";
import cn from "classnames";
import BoardService from "../../services/BoardService";
import { useEffect, useState } from "react";

const Board = ({ teamBlack }) => {
  const createBoard = new BoardService();
  const arrFields = createBoard.generateFields();
  let isEvenNumber = true;

  const [fields, setFields] = useState([]);

  useEffect(() => {
    teamBlack.forEach((figure) => {
      const findField = arrFields.find((field) => {
        return field.positionX === figure.startPosition.x && field.positionY === figure.startPosition.y;
      });
      findField.figure = figure;
    });
    setFields(arrFields);
  }, [teamBlack]);

  console.log(fields);

  return (
    <div className={styles.rootBoard}>
      {fields.map((cage, i) => {
        isEvenNumber = i > 7 && i % 8 === 0 ? !isEvenNumber : isEvenNumber;
        const isBlackCage = i % 2 === 0;

        return (
          <div className={cn(styles.cage, { [styles.blackCage]: isEvenNumber ? isBlackCage : !isBlackCage })} key={i}>
            {cage?.figure?.svgComponent}
          </div>
        );
      })}
    </div>
  );
};

export default Board;

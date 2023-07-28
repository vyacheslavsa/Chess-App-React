/* eslint-disable react/prop-types */
import styles from "./Board.module.scss";
import cn from "classnames";
import Board from "../../services/Board";
import { useEffect, useState } from "react";
import Figure from "../../services/Figure";
import PawnSVGVector from "../../assets/Components/PawnSVGVector";
import { BLACK_FIGURES_COLORS } from "../../constans";

const BoardComponent = () => {
  const myBoard = new Board();

  const arrFields = myBoard.generateCell();
  const pawnChess = new Figure(
    { positionX: "c", positionY: 7 },
    <PawnSVGVector backgroundColor={BLACK_FIGURES_COLORS.BACKGROUND} borderColor={BLACK_FIGURES_COLORS.BORDER} />
  );

  const [stateCell, setStateCell] = useState(arrFields);

  useEffect(() => {
    setStateCell((prevCells) => {
      const copyPrevCells = [...prevCells];
      copyPrevCells[1].figure = pawnChess;
      return copyPrevCells;
    });
  }, []);

  return (
   
    <div className={styles.rootBoard}>
      {stateCell.map((cell, i) => {
        return (
          <div className={cn(styles.cage, { [styles.blackCage]: cell.colorCell === "black" })} key={i}>
            {cell?.figure?.logo}
          </div>
        );
      })}
    </div>
    
    
  );
};

export default BoardComponent;

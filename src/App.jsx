import Board from "./Components/Board/Board";
import styles from "./App.module.scss";
import { BLACK_FIGURES_COLORS } from "./constans";
import Figure from "./services/Figure";
import PawnSVGVector from "./assets/Components/PawnSVGVector";
const App = () => {
  const pawn_black_1 = new Figure(
    { x: "a", y: 2 },
    <PawnSVGVector backgroundColor={BLACK_FIGURES_COLORS.BACKGROUND} borderColor={BLACK_FIGURES_COLORS.BORDER} />
  );
  const pawn_black_2 = new Figure(
    { x: "b", y: 2 },
    <PawnSVGVector backgroundColor={BLACK_FIGURES_COLORS.BACKGROUND} borderColor={BLACK_FIGURES_COLORS.BORDER} />
  );
  const pawn_black_3 = new Figure(
    { x: "c", y: 2 },
    <PawnSVGVector backgroundColor={BLACK_FIGURES_COLORS.BACKGROUND} borderColor={BLACK_FIGURES_COLORS.BORDER} />
  );
  const pawn_black_4 = new Figure(
    { x: "d", y: 2 },
    <PawnSVGVector backgroundColor={BLACK_FIGURES_COLORS.BACKGROUND} borderColor={BLACK_FIGURES_COLORS.BORDER} />
  );
  const pawn_black_5 = new Figure(
    { x: "e", y: 2 },
    <PawnSVGVector backgroundColor={BLACK_FIGURES_COLORS.BACKGROUND} borderColor={BLACK_FIGURES_COLORS.BORDER} />
  );
  const pawn_black_6 = new Figure(
    { x: "f", y: 2 },
    <PawnSVGVector backgroundColor={BLACK_FIGURES_COLORS.BACKGROUND} borderColor={BLACK_FIGURES_COLORS.BORDER} />
  );
  const pawn_black_7 = new Figure(
    { x: "g", y: 2 },
    <PawnSVGVector backgroundColor={BLACK_FIGURES_COLORS.BACKGROUND} borderColor={BLACK_FIGURES_COLORS.BORDER} />
  );
  const pawn_black_8 = new Figure(
    { x: "h", y: 2 },
    <PawnSVGVector backgroundColor={BLACK_FIGURES_COLORS.BACKGROUND} borderColor={BLACK_FIGURES_COLORS.BORDER} />
  );

  const teamBlack = [
    pawn_black_1,
    pawn_black_2,
    pawn_black_3,
    pawn_black_4,
    pawn_black_5,
    pawn_black_6,
    pawn_black_7,
    pawn_black_8,
  ];

  return (
    <div className={styles.gameField}>
      <Board teamBlack={teamBlack} />
    </div>
  );
};

export default App;

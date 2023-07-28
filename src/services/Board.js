export default class BoardService {
  //сгенерировать массив полей
  generateCell() {
    const xValues = Array.from("abcdefgh");

    const nestedArray = xValues //
      .map((cell, i) => {
        return xValues.map((key) => {
          return {
            cellName: `Field_${key}-${i + 1}`,
            positionX: key,
            positionY: i + 1,
            figure: null,
          };
        });
      })
      .reverse();

    const newArr = nestedArray.flat();

    let isEvenNumber = true;
    newArr.forEach((cell, i) => {
      isEvenNumber = i > 7 && i % 8 === 0 ? !isEvenNumber : isEvenNumber;
      const isBlackCage = i % 2 === 0;

      const result = isEvenNumber ? isBlackCage : !isBlackCage;
      cell.colorCell = result ? "white" : "black";
    });

    return newArr;
  }
}

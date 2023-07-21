export default class BoardService {
  //сгенерировать массив полей
  generateFields() {
    const xValues = Array.from("abcdefgh");

    const nestedArray = xValues
      .map((_, i) => {
        return xValues.map((key) => {
          return {
            fieldName: `Field_${key}-${i + 1}`,
            positionX: key,
            positionY: i + 1,
            figure: null,
          };
        });
      })
      .reverse();

    return nestedArray.flat();
  }
}

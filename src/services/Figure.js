export default class Figure {
  constructor(position, logo) {
    this.position = position;
    this.logo = logo;
  }

  changePosition(newPosition) {
    this.position = newPosition;
  }
}

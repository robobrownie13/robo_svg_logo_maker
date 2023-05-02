const { Triangle, Square, Circle } = require("../lib/shapes.js");

describe("ShapeTest", () => {
  test("should render a blue triangle", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150,18 244,182 56,182" fill="blue"/>'
    );
  });

  test("should render a black square", () => {
    const shape = new Square();
    shape.setColor("#000000");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height ="160" fill="#000000"/>'
    );
  });

  test("should render a green circle", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="green"/>'
    );
  });
});

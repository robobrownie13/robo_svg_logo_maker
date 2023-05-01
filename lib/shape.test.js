const ShapeTest = require("../lib/shapes.js");

describe("ShapeTest", () => {
  test("should render a blue triangle"),
    () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150,18 244,182 56,182" fill="blue" />'
      );
    };

  test("should render a green circle"),
    () => {
      const shape = new Circle();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        '<circle cx="25" cy="75" r="100" stroke="green" fill="green" stroke-width="5"/>'
      );
    };
});

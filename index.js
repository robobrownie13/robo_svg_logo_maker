const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/shapes");
const { writeFile } = require("fs").promises;

function generateSVG(res) {
  let shape;
  if (res.shape === "Triangle") {
    shape = new Triangle();
    console.log(shape);
  } else if (res.shape === "Square") {
    shape = new Square();
    console.log(shape);
  } else {
    shape = new Circle();
    console.log(shape);
  }
  shape.setColor(res.shape_color);

  return ` <svg
    width="300"
    height="200"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
><g>${shape.render()}
<text x="150" y="130" text-anchor="middle" font-size="40" fill="${
    res.text_color
  }">${res.text.toUpperCase()}</text>
</g></svg>
`;
}

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for your logo text.",
    },
    {
      type: "input",
      name: "text_color",
      message:
        "Enter text color preference. (Only color keyword or hexidecimals will render properly)",
    },
    {
      type: "list",
      name: "shape",
      message: "Select logo shape.",
      choices: ["Triangle", "Square", "Circle"],
    },
    {
      type: "input",
      name: "shape_color",
      message:
        "Enter shape color preference. (Only color keyword or hexidecimals will render properly)",
    },
  ]);
};

const init = () => {
  promptUser()
    .then((res) =>
      writeFile(`logo_${res.text.toUpperCase()}.svg`, generateSVG(res))
    )
    .then(() => console.log(`\n"Sucessfully created logo!"`))
    .catch((err) => console.error(err));
};

init();

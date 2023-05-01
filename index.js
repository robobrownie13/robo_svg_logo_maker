/*GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered*/
const inquirer = require("inquirer");

const fs = require("fs").promises;
const { Triangle, Square, Circle } = require("./lib/shapes");
const { writeFile } = require("fs");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "logo_text",
      message: "Enter up to three characters for your logo text.",
    },
    {
      type: "input",
      name: "logo_text_color",
      message:
        "Enter text color preference. (Only color keyword or hexidecimals will render properly)",
    },
    {
      type: "list",
      name: "logo_shape",
      message: "Select logo shape.",
      choices: ["Triangle", "Square", "Circle"],
    },
    {
      type: "input",
      name: "logo_shape_color",
      message:
        "Enter shape color preference. (Only color keyword or hexidecimals will render properly)",
    },
  ]);
};

const init = () => {
  promptUser()
    .then((res) => writeFile(`logo_${res.logo_text}.svg`, res))
    .then(() => console.log(`\n"Sucessfully created logo!"`))
    .catch((err) => console.error(err));
};

init();

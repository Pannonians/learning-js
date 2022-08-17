const inquirer = require("inquirer");

function run() {
  console.log("Welcome to NDS's Pizza");

  const questions = [
    {
      type: "confirm",
      name: "toBeDelivered",
      message: "Is this for delivery?",
      default: false,
    },
    {
      type: "rawlist",
      name: "deliver type",
      message: "How to deliver pizza?",
      choices: ["By bicycle(eco delivery)", "By car(extra tax and faster)"],
    },
    {
      type: "input",
      name: "phone",
      message: "What's your phone number?",
      validate(value) {
        const pass = value.match(
          /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
        );
        if (pass) {
          return true;
        }

        return "Please enter a valid phone number";
      },
    },
    {
      type: "list",
      name: "size",
      message: "What size do you need?",
      choices: ["Large", "Medium", "Small"],
      filter(val) {
        return val.toLowerCase();
      },
    },
    //Put validation by regex since I don't want to allow empty value here
    {
      type: "input",
      name: "quantity",
      message: "How many do you need?",
      validate(value) {
        const pass = value.match(/^-?\d+\.?\d*$/);
        if (pass) {
          return true;
        }

        return "Please enter a quantity";
      },
    },
    {
      type: "expand",
      name: "toppings",
      message: "What about the toppings?",
      choices: [
        {
          key: "c",
          name: "Capricosa",
          value: "Capricosa",
        },
        {
          key: "m",
          name: "Madjarica",
          value: "hungarian",
        },
        {
          key: "s",
          name: "Srbijana",
          value: "srbijana",
        },
        {
          key: "b",
          name: "Bianca",
          value: "bianca",
        },
        {
          key: "p",
          name: "Pepperoni",
          value: "pepperoni",
        },
      ],
    },
    {
      type: "rawlist",
      name: "beverage",
      message: "You also get a free 2L beverage",
      choices: ["Pepsi", "7up", "Coke", "Jelen Beer"],
    },
    {
      type: "rawlist",
      name: "rate",
      message: "Rate the service",
      choices: ["bad", "good", "very good"],
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    console.log("\nOrder receipt:");
    console.log(JSON.stringify(answers, null, "  "));
  });
}

module.exports = {
  run,
};

module.exports = function () {
  // const readline = require("readline").createInterface({
  //   input: process.stdin,
  //   output: process.stdout,
  // });

  // readline.question(`What's your name?`, (name) => {
  //   console.log(`Hi, ${name}`);
  //   readline.close();
  // });

  const inquirer = require("inquirer");

  const questions = [
    // {
    //   type: "confirm",
    //   name: "isMan",
    //   message: "你是人类吗?",
    // },
    // {
    //   type: "input",
    //   name: "name",
    //   message: "你叫什么名字?",
    // },
    // {
    //   type: "input",
    //   name: "phone",
    //   message: "What's your phone number?",
    //   validate(value) {
    //     const pass = value.match(
    //       /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
    //     );
    //     if (pass) {
    //       return true;
    //     }

    //     return "Please enter a valid phone number";
    //   },
    // },
    {
      type: "list",
      name: "size",
      message: "What size do you need?",
      choices: ["Large", "Medium", "Small"],
      filter(val) {
        return val.toLowerCase();
      },
    },
    // {
    //   type: "expand",
    //   name: "toppings",
    //   message: "What about the toppings?",
    //   choices: [
    //     {
    //       key: "p",
    //       name: "Pepperoni and cheese",
    //       value: "PepperoniCheese",
    //     },
    //     {
    //       key: "a",
    //       name: "All dressed",
    //       value: "alldressed",
    //     },
    //     {
    //       key: "w",
    //       name: "Hawaiian",
    //       value: "hawaiian",
    //     },
    //   ],
    // },
    // {
    //   type: "rawlist",
    //   name: "beverage",
    //   message: "You also get a free 2L beverage",
    //   choices: ["Pepsi", "7up", "Coke"],
    // },
    // {
    //   type: "input",
    //   name: "comments",
    //   message: "Any comments on your purchase experience?",
    //   default: "Nope, all good!",
    // },
    // {
    //   type: "list",
    //   name: "prize",
    //   message: "For leaving a comment, you get a freebie",
    //   choices: ["cake", "fries"],
    //   when(answers) {
    //     return answers.comments !== "Nope, all good!";
    //   },
    // },
    {
      type: "checkbox",
      message: "Select toppings",
      name: "toppings",
      choices: [
        new inquirer.Separator(" = The Meats = "),
        {
          name: "Pepperoni",
        },
        {
          name: "Ham",
        },
        {
          name: "Ground Meat",
        },
        {
          name: "Bacon",
        },
        new inquirer.Separator(" = The Cheeses = "),
        {
          name: "Mozzarella",
          checked: true,
        },
        {
          name: "Cheddar",
        },
        {
          name: "Parmesan",
        },
        new inquirer.Separator(" = The usual ="),
        {
          name: "Mushroom",
        },
        {
          name: "Tomato",
        },
        new inquirer.Separator(" = The extras = "),
        {
          name: "Pineapple",
        },
        {
          name: "Olives",
          disabled: "out of stock",
        },
        {
          name: "Extra cheese",
        },
      ],
      validate(answer) {
        if (answer.length < 1) {
          return "You must choose at least one topping.";
        }

        return true;
      },
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    // const { name, gender } = answers;

    // console.log(`你好 ${name}，${gender}!`);

    console.log(answers);
  });
};

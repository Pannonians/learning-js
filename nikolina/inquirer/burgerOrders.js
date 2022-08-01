const inquirer = require('inquirer')

function run () {
    console.log('Hi, welcome to Nikolina\'s Burgers')

    const questions = [
        {
          type: 'confirm',
          name: 'toBeDelivered',
          message: 'Is this for delivery?',
          default: false,
        },
        {
          type: 'input',
          name: 'phone',
          message: "What's your phone number?",
          validate(value) {
            const pass = value.match(
              /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
            );
            if (pass) {
              return true;
            }
      
            return 'Please enter a valid phone number';
          },
        },
        {
          type: 'list',
          name: 'type of burger',
          message: 'What kind of burger do you prefer?',
          choices: ['Regular', 'Cheeseburger', 'Customburger'],
          filter(val) {
            return val.toLowerCase();
          },
        },
        {
          type: 'input',
          name: 'quantity',
          message: 'How many do you need?',
          validate(value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
          },
          filter: Number,
        },
        {
          type: 'expand',
          name: 'toppings',
          message: 'What about the toppings?',
          choices: [
            {
              key: 's',
              name: 'Salads',
              value: 'Salads',
            },
            {
              key: 'a',
              name: 'All dressed',
              value: 'alldressed',
            },
            {
              key: 'm',
              name: 'Madjarica',
              value: 'hungarian',
            },
          ],
        },
        {
          type: 'rawlist',
          name: 'beverage',
          message: 'You also get a free 2L beverage',
          choices: ['Pepsi', '7up', 'Coke'],
        },
        {
          type: 'input',
          name: 'comments',
          message: 'Any comments on your purchase experience?',
          default: 'Nope, all good!',
        },
        {
          type: 'list',
          name: 'prize',
          message: 'For leaving a comment, you get a freebie',
          choices: ['cake', 'fries'],
          when(answers) {
            return answers.comments !== 'Nope, all good!';
          },
        },
      ];

      inquirer.prompt(questions).then((answers) => {
        console.log('\nOrder receipt:');
        console.log(JSON.stringify(answers, null, '  '));
      });
}

module.exports = { run, }
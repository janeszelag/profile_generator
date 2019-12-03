const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let newObject = {};

rl.question(`What's your name? Nicknames are also acceptable :)`, (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  
  newObject['name'] = answer;

  rl.question(`What's an activity you like doing?`, (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    
    newObject['activity'] = answer;
    
    rl.question(`What's your favourite thing to eat for that meal?`, (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      
      newObject['meal'] = answer;

      rl.question(`Which sport is your absolute favourite?`, (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        
        newObject['sport'] = answer;

        console.log(`${newObject.name} likes to ${newObject.activity}. When it comes to food, ${newObject.name} likes to eat ${newObject.meal}. Their favourite sport is ${newObject.sport}.`)
      
        rl.close();
      });
      
    });
    
  });
  
});


// Ask the user if they'd like tea.
// console.log their response.
// Ask the user if they'd like biscuits.
// console.log their complete response: So you ${firstAns} want tea and
// you ${secondAns} want coffee.
// Close the reader.

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


function teaAndBiscuits () {
  let teaRes, bisRes;

  reader.question('Would you like some tea?', (teaAns) => {
    teaRes = teaAns;
    console.log(`You replied ${teaAns}.`);
    reader.question('Would you like some biscuits?', (bisAns) => {
      bisRes = bisAns;
      console.log(`You replied ${bisAns}.`);
      const firstAns = (teaRes === 'yes') ? "do" : "don't";
      const secondAns = (bisRes === 'yes') ? "do" : "don't";
      console.log(
        `So you ${firstAns} want tea and you ${secondAns} want biscuits.`
      );
      reader.close();
    });
  });



}


teaAndBiscuits();

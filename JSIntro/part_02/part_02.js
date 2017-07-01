// Phase I
function titleize(names, callback) {
  // let titilized = names.map((el) => `Mx. ${el}`);
  // callback(titilized);

  let titilized = names.map( function(name) {
    return `Super ${name}`;
  });
  callback(titilized);
}

// titleize(['Norris', 'Bailey', 'Batman'], (names) => {
//   names.forEach( name => console.log(name));
// });

titleize(['Norris', 'Bailey', 'Batman'], function(names) {
    names.forEach( function(name) {
      console.log(`Thanks, ${name}!`);
    });
});


// Phase II
function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
  return `${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`;
};

Elephant.prototype.grow = function() {
  this.height = this.height + 12;
  return this.height;
};

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
  return this.tricks;
};

Elephant.prototype.play = function() {
  let trickIndex = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} is ${this.tricks[trickIndex]}!`);
  return this.tricks[trickIndex];
};

var e = new Elephant(
  'Harry',
  60,
  ['painting a picture', 'doing a dance']
);

let ellie = new Elephant(
  "Ellie",
  185,
  ["giving human friends a ride", "playing hide and seek"]
);

let charlie = new Elephant(
  "Charlie",
  200,
  ["painting pictures", "spraying water for a slip and slide"]
);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant(
  "Micah",
  143,
  ["trotting", "playing tic tac toe", "doing elephant ballet"]
);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function(elephant) {
  console.log( `${elephant.name} is trotting by!` );
};


function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs",
      please = "please, mofo.";

  console.log(`${order} ${please}`);

  return function(dish) {
    order = `${order} and ${dish}`;
    console.log(`${order} ${please}`);
  };
}


let bfastOrder = dinerBreakfast();
bfastOrder("chocolate chip pancakes");
bfastOrder("grits");
bfastOrder("ramen");

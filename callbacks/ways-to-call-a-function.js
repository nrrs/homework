function Cat () {
  this.name = 'Garfield';
  this.age = 3;
}

function Dog () {
  this.name = 'Bailey';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`);
};

const Garfield = new Cat ();
const Bailey = new Dog ();

Bailey.chase(Garfield);

Bailey.chase.call(Garfield, Bailey);

Bailey.chase.apply(Bailey, [Garfield]);

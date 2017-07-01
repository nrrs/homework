function madLib(verb, adjective, noun) {
  let upVerb = verb.toUpperCase(),
      upAdj = adjective.toUpperCase(),
      upNoun = noun.toUpperCase();

  return `We shall ${upVerb} the ${upAdj} ${upNoun}.`;
}

function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

function fizzBuzz(array) {
  let output = [];

  // array.forEach( function(el) {
  //     if ( el % 3 === 0 || el % 5 === 0 ) {
  //       output.push(el);
  //     }
  // });

  array.forEach( (el) => {
      if ( el % 3 === 0 || el % 5 === 0 ) {
        output.push(el);
      }
  });

  return output;
}

function isPrime(number) {
  let i;
  for (i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function firstNPrimes(n) {
  let output = [];
  let i = 2;

  while (output.length < n) {
    if (isPrime(i)) {
      output.push(i);
    }
    i++;
  }

  return output;
}

function sumOfNPrimes(n) {
  let primes = firstNPrimes(n),
      sum =0;

  primes.forEach( (el) => {
      sum += el;
  });

  return sum;
}

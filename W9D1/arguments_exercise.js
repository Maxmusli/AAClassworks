// arguments keyword
// function sum() {
//   let sum = 0;
//   for(let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// ... operator
// function sum(...arguments) {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// console.log(sum(1, 2, 3, 4, 5));

// function myBind(arguments)

Function.prototype.myBind = function (context) {
  let bargs = Array.from(arguments);
  let that = this;
  return function() {
    let cargs = Array.from(arguments);
    return that.apply(context, bargs.slice(1).concat(cargs));
  };
};

// function myBind(...args)

Function.prototype.myBind = function (context, ...outterargs) {
  return (...innerargs) => {
    this.apply(context, outterargs.concat(innerargs))
  }
}

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

// curriedSum

function curriedSum(numArgs) {
  const numbers = [];
  
  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((a, b) => a + b);
    } else {
      return _curriedSum;
    }
  }
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

// function.prototype.curry

Function.prototype.curry = function(numArgs) {
  const args = [];
  let that = this;

  return function _curriedSum(num) {
    // debugger
    args.push(num);
    if (args.length === numArgs) {
      return that.apply(that, args);
    } else {
      return _curriedSum;
    }
  }

}

// function sumThree(numbers) {
//   return numbers.reduce((a, b) => a + b);
// }

// console.log(sumThree.curry(3)(4)(20)(6));

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
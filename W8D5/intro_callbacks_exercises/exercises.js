// Clock Creation
class Clock {
  constructor() {
    const date = new Date();
    this.hour = date.getHours();
    this.minute = date.getMinutes();
    this.second = date.getSeconds();
    this.printTime();
    let that = this;
    setInterval(function() {
      that._tick();
    }, 1000);
    }

  printTime() {
    console.log(`${this.hour}:${this.minute}:${this.second}`);
  }

  _tick() {
    this.second++;
    this.printTime();
    if (this.second >= 60) {
      this.second = 0;
      this.minute++;
    }
    if (this.minute >= 60) {
      this.minute = 0;
      this.hour++;
    }
    if (this.hour >= 24) {
      this.hour = 0;
    }
  }

}

// test clock
// const clock = new Clock();



// addNumbers
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    completionCallback(sum);
  }
  else {
    reader.question("Enter a number:", function (numString) {
      const num = parseInt(numString);
      sum += num;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
}

// test addNumbers
// addNumbers(0, 3, sum => {
//   console.log(`Total Sum: ${sum}`);
//   reader.close();
// });



// function absurdBubbleSort(arr, sortCompetionCallback) {
//   // let madeAnySwaps = true;
//   function outerBubbleSortLoop(madeAnySwaps=true) {
//     // Begin an inner loop if you made any swaps. Otherwise, call
//     // `sortCompletionCallback`.
//     if (madeAnySwaps === true) {
//      innerBubbleSortLoop(arr, i, false, outerBubbleSortLoop);
//     } else {
//       sortCompetionCallback(arr);
//     } 
//   }

//   // Kick the first outer loop off, starting `madeAnySwaps` as true.
// }

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}?\n`, function (response) {
    if (response.toLowerCase() === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length - 1) {
    return outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i+1], bool => {
      if (bool === true) {
        console.log('helo');
        let j = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = j;
        // [arr[i], arr[i+1]] = [[arr[i+1], arr[i]]
        madeAnySwaps = true;
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
      } else {
        // madeAnySwaps = false;
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
      }
    });
  }
  
}

function absurdBubbleSort(arr, sortCompetionCallback) {
  let madeAnySwaps = true;
  function outerBubbleSortLoop(madeAnySwaps) {
 
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompetionCallback(arr);
    }
  }
  outerBubbleSortLoop(madeAnySwaps);
 
}

// test
// let el1 = 1;
// let el2 = 5;

// askIfGreaterThan(el1, el2, bool => {
//   if (bool) {
//     console.log(`${el1} is greater than ${el2}`);
//   } else {
//     console.log(`${el1} is less than ${el2}`);
//   }
//   reader.close();
// });

// let madeAnySwaps = false
// let arr = [1,5,3,2,4]
// innerBubbleSortLoop(arr, 0, madeAnySwaps, () => {
//   console.log('in outer bubble sort');
//   reader.close();
//   console.log(arr)
// })

let arr = [3,2,1];
absurdBubbleSort(arr, function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
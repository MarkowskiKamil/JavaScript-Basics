//Scale riddle. With 8 balls, ex.  [1,2,1,1,1,1,1,1] get position of the “heavy” ball.
//Indexes are to be chosen at random. Use weights comparison only two times.

//Put the array of balls in random order
const exampleArray = [1,1,1,1,2,1,1,1];
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
function randomizeIndexes(inputArray) {
    let randomizedArray = [];
    let arrayCopy = [...inputArray];
  
    for (let i = 0; i < inputArray.length; i++) {
      let randomIndex = getRandomNumberInRange(0, arrayCopy.length - 1);
      let randomElement = arrayCopy.splice(randomIndex, 1)[0]; // splice method returns array even if we removed 1 element!
      randomizedArray.push(randomElement);
    }
  
    return randomizedArray;
  }
// Here is randomized order of balls
  const ballArray = randomizeIndexes(exampleArray);
  console.log('Here we got an order of balls: ' + ballArray);

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }

  //FIRST WEIGHTING
  //Divide given array into three parts whith 3, 3 and 2 elements
  //Compare two arrays with 3 elements

  function firstWeigthing(arr) {
  const firstArr = arr.slice(0, 3);
  const secondArr = arr.slice(3, 6);
  const thirdArr = arr.slice(6, 8);
  if (sumArray(firstArr) > sumArray(secondArr)) {
    givenArr = firstArr;
  } else if (sumArray(firstArr) < sumArray(secondArr)) {
    givenArr = secondArr;
  } else if (sumArray(firstArr) === sumArray(secondArr)) {
    givenArr = thirdArr;
  }
  return givenArr;
  }

  //SECOND WEIGHTING

  function secondWeighting(arr) {
    const givenArr = firstWeigthing(arr);
    if (givenArr[0] > givenArr[1]) {
        result = givenArr[0];
    }
    else if (givenArr[0] < givenArr[1]) {
        result = givenArr[1];
    }
    else {
        result = givenArr[2];
    }
    const resultIndex = 1 + arr.indexOf(result)
return resultIndex;
  }

  console.log('The heavy ball is on the ' + secondWeighting(ballArray) + ' position.');
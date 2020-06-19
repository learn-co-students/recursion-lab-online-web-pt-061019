// Code your solution here!
function printString(str) {
  console.log(str[0]);
  if (str.length > 1) {
    printString(str.slice(1));
  } else {
    return;
  }
}

function reverseString(str) {
  if (str.length < 2) {
    return str;
  }
  return reverseString(str.substring(1)) + str[0];
}

function isPalindrome(str) {
  let length = str.length;

  if (length < 2) {
    return true;
  } else if (str[0] === str[length - 1]) {
    return isPalindrome(str.substring(1, length - 1));
  } else {
    return false;
  }
}

function addUpTo(arr, i) {
  return i ? arr[i] + addUpTo(arr, --i) : arr[i];
}

function maxOf(myArray) {
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray));
  }
}

function includesNumber(myArray, myNumber) {
  if (!myArray.length) {
    return false;
  } else if (myArray[0] === myNumber) {
    return true;
  } else {
    return includesNumber(myArray.slice(1), myNumber);
  }
}

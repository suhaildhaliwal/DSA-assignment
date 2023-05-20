// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?


function findPairsWithGivenSum(arr1, sum) {
    let pairs = [];
    let hash = {};
    for (let i = 0; i < arr1.length; i++) {
      let count = sum - arr1[i];
      if (hash[count] !== undefined) {
        pairs.push([arr1[i], count]);
      }
      hash[arr1[i]] = i;
    }
    return pairs;
  }
let arr1 = [0,1,2,3,4,5,6,7,8,9,10];
let sum = 5;
let pairs = findPairsWithGivenSum(arr1, sum);
console.log(`Pairs with sum ${sum} :` , pairs);






//Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.


  function reverseArrayInPlace(arr) {
    var start = 0;
    var end = arr.length - 1;
  
    while (start < end) {
      var temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
  
  var myArray = [1, 2, 3, 4, 5];
  console.log("Original array:", myArray);
  reverseArrayInPlace(myArray);
  console.log("Reversed array:", myArray)






  //Q3. Write a program to check if two strings are a rotation of each other?

  function areRotations(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    let str = str1 + str1;
    return str.includes(str2);
  } 

  let str1 ="suhail"
  let str2 = "suhail"
 
  if (areRotations(str1, str2)) {
    console.log(`"${str1}" and "${str2}" are rotations of each other.`);
  }
else {
    console.log(`"${str1}" and "${str2}" are not rotations of each other.`);
  }





  //Q4. Write a program to print the first non-repeated character from a string?

  function firstNonRepeatedChar(str) {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (charCount[char] === 1) {
        return char;
      }
    }
    return null;
  }
  let str = "suahil singh";
  console.log("String=", str);
  let FirstNonRepeatedChar = firstNonRepeatedChar(str);
  if (FirstNonRepeatedChar === null) {
    console.log("No non-repeated characters found.");
  } else {
    console.log("First non-repeated character=", FirstNonRepeatedChar);
  }





//Q5  Read about the Tower of Hanoi algorithm. Write a program to implement it.


function towerOfHanoi(n, from, to, aux) {
if (n === 1) {
    console.log(`Move disk 1 from ${from} to ${to}`);
    return;
  }
  towerOfHanoi(n - 1, from, aux, to);
  console.log(`Move disk ${n} from ${from} to ${to}`);
  towerOfHanoi(n - 1, aux, to, from);
}
let n = 2;
towerOfHanoi(n, 'M', 'S', 'G');





//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

function isOperator(character) {
    var operators = ["+", "-", "*", "/"]
    return operators.includes(character)
  }
  
  function postfixToPrefix(postfix) {
    var stack = [];
  
    for (var i = 0; i < postfix.length; i++) {
      var character = postfix[i];
  
      if (isOperator(character)) {
        var operand2 = stack.pop();
        var operand1 = stack.pop();
        var prefixExpression = character + operand1 + operand2;
        stack.push(prefixExpression);
      } else {
        stack.push(character);
      }
    }
  
    return stack.pop();
  }
  
  var postfixExpression = "34+2*";
  var prefixExpression = postfixToPrefix(postfixExpression);
  console.log("Prefix expression:", prefixExpression);
  




  //Q7 Write a program to convert prefix expression to infix expression.



  function isOperator(character) {
    var operators = ["+", "-", "*", "/"];
    return operators.includes(character);
  }
  
  function prefixToInfix(prefix) {
    var stack = [];
  
    for (var i = prefix.length - 1; i >= 0; i--) {
      var character = prefix[i];
  
      if (isOperator(character)) {
        var operand1 = stack.pop();
        var operand2 = stack.pop();
        var infixExpression = "(" + operand1 + character + operand2 + ")";
        stack.push(infixExpression);
      } else {
        stack.push(character);
      }
    }
  
    return stack.pop();
  }
  
  var prefixExpression = "*+342";
  var infixExpression = prefixToInfix(prefixExpression);
  console.log("Infix expression:", infixExpression);
  






  //Q8. Write a program to check if all the brackets are closed in a given code snippet.

  function areBracketsClosed(pgm) {
      let stack = [];   
      for (let i = 0; i < pgm.length; i++) {
        let char = pgm[i];
        if (char === '(' || char === '{' || char === '[') {
          stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
          if (stack.length === 0) return true;
          let top = stack.pop();
          if ((char === ')' && top !== '(') ||
              (char === '}' && top !== '{') ||
              (char === ']' && top !== '[')) {
            return true;
          }
        }
      }
      return stack.length === 0;
    }
    let pgm = "{ [ ( ] ) }";
    console.log("Code:", pgm);
    let result = areBracketsClosed(pgm);
   console.log("All brackets are closed : ", result);

   




  //Q9. Write a program to reverse a stack.
 
  function reverseStack(stack) {
      if (stack.length === 0) return stack;
      var item = stack.pop();
      reverseStack(stack);
      stack.unshift(item);
      return stack;
      }
    var stack = [9,8,7,6,5,4,3,2,1];
    console.log("original stack=",stack);
    stack = reverseStack(stack);
    console.log("reverse stack=",stack);
  








  //Q10 Write a program to find the smallest number using a stack.
   
  
      function findSmallest(stack1) {
      let min = 10;
      while (stack1.length > 0) {
        let item = stack1.pop();
        if (item < min) {
          min = item;
  }
  }
      return min;
      } 
    let stack1 = [12,2,5,2,4,6,8,0];
  console.log("Stack:", stack1);
    let smallest = findSmallest(stack1);
    console.log("Smallest Number:", smallest);
    
  
  
/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number < 0) {
    return false;
  }
  return true;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const numbers = [a, b, c];
  let maxNumber = numbers[0];
  for (let i = 0; i < numbers.length; ) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
    i += 1;
  }
  return maxNumber;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const boardSize = 8;
  const chessBoard = Array.from({ length: boardSize }, () =>
    Array(boardSize).fill(false)
  );
  chessBoard[king.x - 1][king.y - 1] = true;
  for (let i = 0; i < boardSize; ) {
    if (chessBoard[queen.x - 1][i] || chessBoard[i][queen.y - 1]) {
      return true;
    }
    i += 1;
  }
  for (let i = 1; i < boardSize; ) {
    if (
      (queen.x - 1 - i >= 0 &&
        queen.y - 1 - i >= 0 &&
        chessBoard[queen.x - 1 - i][queen.y - 1 - i]) ||
      (queen.x - 1 - i >= 0 &&
        queen.y - 1 + i < boardSize &&
        chessBoard[queen.x - 1 - i][queen.y - 1 + i]) ||
      (queen.x - 1 + i < boardSize &&
        queen.y - 1 - i >= 0 &&
        chessBoard[queen.x - 1 + i][queen.y - 1 - i]) ||
      (queen.x - 1 + i < boardSize &&
        queen.y - 1 + i < boardSize &&
        chessBoard[queen.x - 1 + i][queen.y - 1 + i])
    ) {
      return true;
    }
    i += 1;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  if (a + b > c && b + c > a && a + c > b) {
    return a === b || b === c || a === c;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let number = num;
  const romanNumerals = [
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ];

  let result = '';

  for (let i = 0; i < romanNumerals.length; ) {
    while (number >= romanNumerals[i].value) {
      result += romanNumerals[i].numeral;
      number -= romanNumerals[i].value;
    }
    i += 1;
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';

  for (let i = 0; i < numberStr.length; ) {
    switch (numberStr[i]) {
      case '-':
        result += 'minus';
        break;
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '.':
        result += 'point';
        break;
      case ',':
        result += 'point';
        break;
      default:
        result += '';
    }

    if (i < numberStr.length - 1) {
      result += ' ';
    }
    i += 1;
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length; ) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
    i += 1;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; ) {
    if (letter === str[i]) {
      return i;
    }
    i += 1;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  for (let i = 0; i < `${num}`.length; ) {
    if (`${num}`[i] === `${digit}`) {
      return true;
    }
    i += 1;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  const sumElements = (array, start, end) => {
    let sum = 0;
    for (let i = start; i < end; ) {
      sum += array[i];
      i += 1;
    }
    return sum;
  };

  for (let i = 0; i < arr.length; ) {
    const leftSum = sumElements(arr, 0, i);
    const rightSum = sumElements(arr, i + 1, arr.length);

    if (leftSum === rightSum) {
      return i;
    }
    i += 1;
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = new Array(size);

  for (let i = 0; i < size; ) {
    matrix[i] = new Array(size);
    i += 1;
  }

  let counter = 1;
  let startRow = 0;
  let endRow = size - 1;
  let startCol = 0;
  let endCol = size - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; ) {
      matrix[startRow][i] = counter;
      counter += 1;
      i += 1;
    }
    startRow += 1;

    for (let i = startRow; i <= endRow; ) {
      matrix[i][endCol] = counter;
      counter += 1;
      i += 1;
    }
    endCol -= 1;

    for (let i = endCol; i >= startCol; ) {
      matrix[endRow][i] = counter;
      counter += 1;
      i -= 1;
    }
    endRow -= 1;

    for (let i = endRow; i >= startRow; ) {
      matrix[i][startCol] = counter;
      counter += 1;
      i -= 1;
    }
    startCol += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrixx) {
  const matrix = matrixx;
  const n = matrix.length;

  for (let layer = 0; layer < Math.floor(n / 2); layer += 1) {
    const first = layer;
    const last = n - 1 - layer;

    for (let i = first; i < last; i += 1) {
      const offset = i - first;

      const top = matrix[first][i];
      matrix[first][i] = matrix[last - offset][first];
      matrix[last - offset][first] = matrix[last][last - offset];
      matrix[last][last - offset] = matrix[i][last];
      matrix[i][last] = top;
    }
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  function swap(arrayy, i, j) {
    const array = arrayy;
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  function partition(start, end) {
    const pivotValue = arr[end];
    let pivotIndex = start;

    for (let i = start; i < end; i += 1) {
      if (arr[i] < pivotValue) {
        swap(arr, i, pivotIndex);
        pivotIndex += 1;
      }
    }

    swap(arr, pivotIndex, end);
    return pivotIndex;
  }

  function quickSort(start, end) {
    if (start < end) {
      const pivotIndex = partition(start, end);
      quickSort(start, pivotIndex - 1);
      quickSort(pivotIndex + 1, end);
    }
  }

  quickSort(0, arr.length - 1);
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = str;
  const iter = iterations;
  const cache = new Map();

  const shuffle = (inputStr) => {
    if (cache.has(inputStr)) {
      return cache.get(inputStr);
    }
    let left = '';
    let right = '';
    for (let i = 0; i < inputStr.length; ) {
      if (i % 2 === 0) {
        left += inputStr[i];
      } else {
        right += inputStr[i];
      }
      i += 1;
    }
    const shuffledResult = left + right;
    cache.set(inputStr, shuffledResult);

    return shuffledResult;
  };

  for (let i = 0; i < iter; ) {
    result = shuffle(result);
    i += 1;
  }

  return result;
}

shuffleChar('qwerty', 10);

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const getDigitsArray = (n) => {
    let num = n;
    const digits = [];
    while (num > 0) {
      digits.unshift(num % 10);
      num = Math.floor(num / 10);
    }
    return digits;
  };

  const digits = getDigitsArray(number);

  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  if (i >= 0) {
    let j = digits.length - 1;
    while (digits[j] <= digits[i]) {
      j -= 1;
    }

    const temp = digits[i];
    digits[i] = digits[j];
    digits[j] = temp;
  } else {
    return number;
  }

  const rightPart = [];
  for (let k = i + 1; k < digits.length; ) {
    rightPart.push(digits[k]);
    k += 1;
  }

  rightPart.sort((a, b) => a - b);

  let result = 0;
  for (let k = 0; k <= i; ) {
    result = result * 10 + digits[k];
    k += 1;
  }
  for (let k = 0; k < rightPart.length; ) {
    result = result * 10 + rightPart[k];
    k += 1;
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};

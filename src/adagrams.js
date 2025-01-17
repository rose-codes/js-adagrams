export const letterPool = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

export const scoreChart = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10,
};

export const drawLetters = () => {
  let hand = [];
  let keysArr = Object.keys(letterPool);
  while (hand.length < 10) {
    let randomLetter = keysArr[Math.floor(Math.random() * 26)];
    let count = hand.filter((x) => x === randomLetter).length;
    if (count < letterPool[randomLetter]) {
      hand.push(randomLetter);
    }
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let fixedInput = input.toUpperCase();
  for (let char of fixedInput) {
    let countCharInInput = fixedInput.split(char).length - 1;
    let countCharInHand = lettersInHand.filter((y) => y === char).length;
    if (countCharInInput !== countCharInHand) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const fixedWord = word.toUpperCase();
  let score = 0;
  for (let letter of fixedWord) {
    score += scoreChart[letter];
  }
  if (fixedWord.length >= 7) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let highestScoreWord = "";
  for (let word of words) {
    let score = scoreWord(word);
    if (highestScore < score) {
      highestScore = score;
      highestScoreWord = word;
    } else if (highestScore == score) {
      let highestScoreWordLength = highestScoreWord.length;
      let currentWordLength = word.length;
      if (highestScoreWordLength !== currentWordLength) {
        if (currentWordLength == 10) {
          highestScoreWord = word;
        } else if (
          highestScoreWordLength > currentWordLength &&
          highestScoreWordLength !== 10
        ) {
          highestScoreWord = word;
        }
      }
    }
  }
  const returnObj = { word: highestScoreWord, score: highestScore };
  return returnObj;
};

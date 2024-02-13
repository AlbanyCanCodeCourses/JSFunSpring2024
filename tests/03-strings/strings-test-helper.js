import { getAnswer } from "../getAnswer.js";

const getNameStr = getAnswer("../exercises/03-strings/01-create-a-string.js");

const getTheCharacterPositionAnswer = getAnswer(
  "../exercises/03-strings/02-get-the-character-position.js"
);

const stringLengthStr = getAnswer(
  "../exercises/03-strings/03-string-length.js"
);

const getLastCharacterAnswer = getAnswer(
  "../exercises/03-strings/04-get-last-character.js"
);

const getLastWordInPlaceNameStr = getAnswer(
  "../exercises/03-strings/05-get-last-word-in-place-name.js"
);

export const getName = eval(`() => {
  ${getNameStr}
  return myName;
}`);

export const getTheCharacterPosition = eval(`(firstName, letter) => {
  ${getTheCharacterPositionAnswer}
  return characterPosition;
}`);

export const stringLength = eval(`(str) => {
  ${stringLengthStr}
  return strLength;
}`);

export const getLastCharacter = eval(`(str) => {
  ${getLastCharacterAnswer}
  return lastCharacter;
}`);

export const getLastWordInPlaceName = eval(`(place) => {
  ${getLastWordInPlaceNameStr}
  return newPlace;
}`);

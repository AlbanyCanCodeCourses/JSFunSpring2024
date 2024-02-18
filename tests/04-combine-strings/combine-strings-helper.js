import { getAnswer } from "../getAnswer.js";

const getBookTitleConcatStr = getAnswer(
  "../exercises/04-combine-strings/01-concatenate-operator.js"
);

const getBookTitleTemplateStr = getAnswer(
  "../exercises/04-combine-strings/02-template-literals.js"
);

const replaceLastNameAnswer = getAnswer(
  "../exercises/04-combine-strings/03-replace-last-name.js"
);

export const getBookTitleConcat = eval(`(bookTitle, author) => {
  ${getBookTitleConcatStr}
  return bookInfo;
}`);

export const getBookTitleTemplate = eval(`(bookTitle, author) => {
  ${getBookTitleTemplateStr}
  return bookInfo;
}`);

export const replaceLastName = eval(`(fullName, newLastName) => {
  ${replaceLastNameAnswer}
  return fullName;
}`);

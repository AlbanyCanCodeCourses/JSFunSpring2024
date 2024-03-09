import { getAnswer } from "../getAnswer.js";

const generateLinksStr = getAnswer(
  "../exercises/12-loops-objects/01-loop-through-object.js"
);

const returnObjectValuesStr = getAnswer(
  "../exercises/12-loops-objects/03-return-object-values.js"
);

export const generateLinks = eval(`(links) => {
  ${generateLinksStr}
  return html;
}`);

export const returnObjectValues = eval(`(blogPost) => {
  ${returnObjectValuesStr}
  return values;
}`);

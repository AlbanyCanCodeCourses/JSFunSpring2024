import { getAnswer } from "../getAnswer.js";

const createDogObjectStr = getAnswer(
  "../exercises/12-objects/01-create-object.js"
);

const createGraduateObjectStr = getAnswer(
  "../exercises/12-objects/02-create-nested-object.js"
);

const accessAnItemObjectStr = getAnswer(
  "../exercises/12-objects/03-accessing-item-in-object.js"
);

const updateStudentObjectStr = getAnswer(
  "../exercises/12-objects/04-update-object.js"
);

const returnObjectValuesStr = getAnswer(
  "../exercises/12-objects/05-return-object-values.js"
);

const combineObjectsStr = getAnswer(
  "../exercises/12-objects/06-combine-object.js"
);

export const createDogObject = eval(`() => {
  ${createDogObjectStr}
  return myDog;
}`);

export const createGraduateObject =
  eval(`(name, graduationYear, skills, githubLink, linkedInLink) => {
  ${createGraduateObjectStr}
  return graduate;
}`);

export const accessAnItemObject = eval(`(clothes) => {
  ${accessAnItemObjectStr}
  return hat;
}`);

export const updateStudentObject = eval(`(student) => {
  ${updateStudentObjectStr}
  return student;
}`);

export const returnObjectValues = eval(`(blogPost) => {
  ${returnObjectValuesStr}
  return values;
}`);

export const combineObjects = eval(`(obj1, obj2) => {
  ${combineObjectsStr}
  return myObject;
}`);

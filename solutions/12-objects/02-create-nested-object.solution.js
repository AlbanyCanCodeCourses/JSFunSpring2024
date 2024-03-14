let name = "Eddie Willard"; // e.g.
let graduationYear = 2022; // e.g.
let skills = ["Javascript", "React", "CSS"]; // e.g.
let githubLink = "https://github.com/example/profile"; // e.g.
let linkedInLink = "https://linkedin.com/profile"; // e.g.

/**
 * Create a nested object called "graduate".
 * Assigns "name", "graduationYear", and many of the other values above to the object
 * in this format:
 * @property {string} name
 * @property {string} graduationYear
 * @property {array} skills
 * @property {object} links e.g. { github: "...", linkedIn: "..." }
 *
 * @example
 * console.log(graduate); //
 * {
 *   name: "Eddie Willard",
 *   graduationYear: 2021,
 *   skills: ["JavaScript", "React", "CSS"],
 *   links: {
 *     github: "https://github.com/example/profile",
 *     linkedIn: "https://linkedin.com/profile"
 *   }
 * }
 *
 * Your answer should work with "name", "graduation", and the other variables above
 * are different values.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

const graduate = {
  name,
  graduationYear,
  skills,
  links: {
    github: githubLink,
    linkedIn: linkedInLink,
  },
};

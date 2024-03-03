import { expect } from "chai";
import {
  createDogObject,
  createGraduateObject,
  updateStudentObject,
  accessAnItemObject,
  returnObjectValues,
  combineObjects,
} from "./objects-test-helper.js";

describe("Objects", () => {
  describe("01-create-object", () => {
    it('should contain an object called "myDog"', () => {
      const myDog = createDogObject();
      expect(myDog).to.be.an("object");
    });
    it('the "owners" property should be an array', () => {
      const [name, breed, age, owners] = Object.values(createDogObject());
      expect(name).to.be.a("string").to.be.ok;
      expect(breed).to.be.a("string").to.be.ok;
      expect(age).to.be.a("number");
      expect(owners).to.be.an("array");
    });
  });

  describe("02-create-nested-object.js", () => {
    it("should return an object", () => {
      const graduateObject = createGraduateObject(
        "Eddie Willard",
        2020,
        ["JavaScript", "React", "CSS"],
        "https://github.com/example/profile",
        "https://linkedin.com/profile"
      );
      expect(graduateObject).to.be.an("object");
    });
    it("the object it returns should have the properties name (string), graduationYear (number), skills (array), links (object of strings)", () => {
      const graduateObject = createGraduateObject(
        "Eddie Willard",
        2020,
        ["JavaScript", "React", "CSS"],
        "https://github.com/example/profile",
        "https://linkedin.com/profile"
      );
      expect(graduateObject).to.deep.equal({
        name: "Eddie Willard",
        graduationYear: 2020,
        skills: ["JavaScript", "React", "CSS"],
        links: {
          github: "https://github.com/example/profile",
          linkedIn: "https://linkedin.com/profile",
        },
      });
    });
  });

  describe("03-accessing-item-in-object", () => {
    it('should return the value of "hat"', () => {
      const hat = accessAnItemObject({
        hat: "fedora",
        shirt: "button down vest",
        shoes: "dress shoes",
      });
      expect(hat).to.equal("fedora");
    });
  });

  describe("04-update-object", () => {
    it('should change the "name" property in the "student" object', () => {
      const student = updateStudentObject({
        name: "Cary Grant",
        skills: [],
      });
      expect(student.name).to.not.equal("Cary Grant");
      expect(student.name).to.be.a("string").to.be.ok;
    });
    it('should add a new skill to the "skills" array inside of the "student" object', () => {
      const student = updateStudentObject({
        name: "Judy Garland",
        skills: ["Acting", "Singing"],
      });
      expect(student.skills.length).to.equal(3);
    });
  });

  describe("05-return-object-values", () => {
    it('should contain an array called "values"', () => {
      const arr = returnObjectValues({});
      expect(arr).to.be.an("array");
    });
    it("should return all the values in an object", () => {
      const objectValues = returnObjectValues({
        title: "Best CSS Tricks of the Year",
        author: "Mark Marshall",
        date: "2021-12-31",
        content: "1. Elegant Shadow ...",
      });
      expect(objectValues).to.deep.equal([
        "Best CSS Tricks of the Year",
        "Mark Marshall",
        "2021-12-31",
        "1. Elegant Shadow ...",
      ]);
    });
  });

  describe("06-combine-object", () => {
    it('should contain an object called "myObject"', () => {
      const obj = combineObjects({}, {});
      expect(obj).to.be.an("object");
    });
    it("should combine two objects and return a single object", () => {
      const obj1 = {
        firstName: "Clark",
      };
      const obj2 = {
        lastName: "Kent",
      };
      const combinedObj = combineObjects(obj1, obj2);
      expect(combinedObj).to.deep.equal({
        firstName: "Clark",
        lastName: "Kent",
      });
    });
  });
});

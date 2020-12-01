var expect = require("chai").expect;
var starWars = require("./index");

describe("starwars-heroes", function () {
  describe("all", function () {
    it("should be an array of strings", function () {
      expect(starWars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function (item) {
          return typeof item === "string";
        });
      }
    });

    it("should contain `aayushi Skywalker`", function () {
      expect(starWars.all).to.include("aayushi Skywalker");
    });

    describe("random", function () {
      it("it should return random item from the starwars.all", function () {
        var randomItem = starWars.random();
        expect(starWars.all).to.include(randomItem);
      });
    });
  });
});

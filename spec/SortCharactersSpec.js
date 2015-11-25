describe("Sort Characters", function() {
  var sortCharacters = require('../src/Anagrams.js').sortCharacters;

  it("sorts alphabetically characters of a string", function() {
    expect(sortCharacters("zabc")).toEqual("abcz");
    expect(sortCharacters("bbaapp")).toEqual("aabbpp");
  });
  it("downcases all letters before sorting", function() {
    expect(sortCharacters("aBDzcA")).toEqual("aabcdz");
  });
});

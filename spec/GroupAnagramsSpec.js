describe("Group Anagrams", function() {
  var groupAnagrams = require('../src/Anagrams.js').groupAnagrams;

  it("rejects non array inputs", function() {
    expect(sortPeople(1)).toBeNull();
    expect(sortPeople("abc")).toBeNull();
  });
  it("rejects empty arrays", function() {
    expect(sortPeople([])).toBeNull();
  });
  it("groups words by anagrams", function() {
    expect(sortPeople(["parisien", "Marion", "aspirine", "manoir", "Romain", "clef"])).toEqual([
      ["aspirine", "parisien"],
      ["clef"],
      ["manoir", "Marion", "Romain"]
    ]);
  });
});

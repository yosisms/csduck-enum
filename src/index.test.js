const EnumDef = require("./index.js");

describe("EnumDef", () => {
  test("Should create an 'Option1', 'Option2' and 'Option3' enum. (options check => should be array)", () => {
    const EOptions = new EnumDef(["Option1", "Option2", "Option3"]);
    expect(EOptions.options).toEqual(["Option1", "Option2", "Option3"]);
  });

  test("Should create an 'Option1', 'Option2' and 'Option3' enum. (records check => should be object)", () => {
    const EOptions = new EnumDef(["Option1", "Option2", "Option3"]);
    expect(EOptions.records).toEqual({
      Option1: "Option1",
      Option2: "Option2",
      Option3: "Option3",
    });
  });
});

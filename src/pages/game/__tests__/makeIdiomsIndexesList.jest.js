import { filterList } from "../methods/makeIdiomsIndexesList";

describe("testing filterList", () => {
  it("should return an object", () => {
    console.log(filterList);
    expect(typeof filterList()).toBe("object")
  })
})

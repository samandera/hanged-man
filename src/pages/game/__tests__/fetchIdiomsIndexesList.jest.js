jest.mock("../methods/fetchIdiomsIndexesList");
import fetchIdiomsIndexesList from "../methods/fetchIdiomsIndexesList";
fetchIdiomsIndexesList.mockImplementation(() => {
  return 'xyz'
})

describe("testing fetchWord", () => {
  it("should be called", () => {
    fetchIdiomsIndexesList();
    expect(fetchIdiomsIndexesList).toBeCalled();
  })
  it("should be exual to xyz", () => {
    expect(fetchIdiomsIndexesList()).toBe("xyz");
  })
})

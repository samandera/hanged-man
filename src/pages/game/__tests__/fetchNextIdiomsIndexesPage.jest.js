import
  {
    indexArrayMethods,
    fetchNextIdiomsIndexesPage
  } from "../methods/makeIdiomsIndexesArray";
import { mockFetchIndexesArray, mockedPage0, mockedPage1 } from '../__mocks__/makeIdiomsIndexesArray';

describe("fetchNextIdiomsIndexesPage behaviour", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should not be called with singleIndexesQuery", () => {
    const spy = jest.spyOn(indexArrayMethods, "singleIndexesQuery");
    fetchNextIdiomsIndexesPage("en", {
      pagesIds: [],
      cmcontinue: ""
    }, 1, mockFetchIndexesArray);
    expect(spy).not.toHaveBeenCalled();
  });
  it("should not be called with singleIndexesQuery", () => {
    const spy = jest.spyOn(indexArrayMethods, "singleIndexesQuery");
    fetchNextIdiomsIndexesPage("en", {
      pagesIds: [],
      cmcontinue: "mockedPage1"
    }, 1, mockFetchIndexesArray);
    expect(spy).toHaveBeenCalled();
  });
})

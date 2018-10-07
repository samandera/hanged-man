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
  it("should be called with wrapSingleIndexesQuery", () => {
    const spy = jest.spyOn(indexArrayMethods, "wrapSingleIndexesQuery");
    fetchNextIdiomsIndexesPage("en", {
      pagesIds: [],
      cmcontinue: ""
    }, 1, mockFetchIndexesArray);
    expect(spy).not.toHaveBeenCalled();
  })
})

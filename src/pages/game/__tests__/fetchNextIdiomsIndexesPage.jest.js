import
  {
    indexArrayMethods,
    fetchNextIdiomsIndexesPage
  } from "../methods/makeIdiomsIndexesArray";
import { mockFetchIndexesArray, mockedPage0, mockedPage1 } from '../__mocks__/makeIdiomsIndexesArray';
import store from '../../store';

describe("fetchNextIdiomsIndexesPage behaviour", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should not be called with singleIndexesQuery", () => {
    const spy = jest.spyOn(indexArrayMethods, "singleIndexesQuery");
    fetchNextIdiomsIndexesPage(store.dispatch, "en", {
      pagesTitles: [],
      cmcontinue: ""
    }, 1, mockFetchIndexesArray);
    expect(spy).not.toHaveBeenCalled();
  });
  it("should not be called with singleIndexesQuery", () => {
    const spy = jest.spyOn(indexArrayMethods, "singleIndexesQuery");
    fetchNextIdiomsIndexesPage(store.dispatch, "en", {
      pagesTitles: [],
      cmcontinue: "mockedPage1"
    }, 1, mockFetchIndexesArray);
    expect(spy).toHaveBeenCalled();
  });
})

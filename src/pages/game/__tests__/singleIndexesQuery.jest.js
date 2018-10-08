import
  {
    indexArrayMethods,
    singleIndexesQuery
  } from "../methods/makeIdiomsIndexesArray";
import { mockFetchIndexesArray, mockedPage0, mockedPage1 } from '../__mocks__/makeIdiomsIndexesArray';
import store from '../../store';

describe("fetchNextIdiomsIndexesPage behaviour", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should be called with filterList", () => {
    const spy = jest.spyOn(indexArrayMethods, "filterList");
    singleIndexesQuery(store.dispatch, "en", 1, {pagesIds: [], cmcontinue: mockedPage1}, mockFetchIndexesArray)
    .then(data => {
      expect(spy).toBeCalled();
      done();
    })
  });
  it("should be called with fetchNextIdiomsIndexesPage", () => {
    const spy = jest.spyOn(indexArrayMethods, "fetchNextIdiomsIndexesPage");
    singleIndexesQuery(store.dispatch, "en", 1, {pagesIds: [], cmcontinue: mockedPage1}, mockFetchIndexesArray)
    .then(data => {
      expect(spy).toBeCalled();
      done();
    })
  });
})

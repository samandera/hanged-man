import
  makeIdiomsIndexesArray,
  { filterList, indexArrayMethods } from "../methods/makeIdiomsIndexesArray";
import { mockFetchIndexesArray, mockedPage0, mockedPage1 } from '../__mocks__/makeIdiomsIndexesArray';
import store from '../../store';

describe("makeIdiomsIndexesArray behaviour", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const indexes = filterList(mockedPage1, filterList(mockedPage0).pagesTitles).pagesTitles;
  it("array returned from makeIdiomsIndexesArray should be equal to amout of pages with ns of 0", () => {
    expect(makeIdiomsIndexesArray(store.dispatch, "en", mockFetchIndexesArray)).resolves.toBe(indexes)
  });
  it("makeIdiomsIndexesArray should be called with singleIndexesQuery", () => {
    const spy = jest.spyOn(indexArrayMethods, "singleIndexesQuery");
    localStorage.clear();
    makeIdiomsIndexesArray(store.dispatch, "en", mockFetchIndexesArray);
    expect(spy).toHaveBeenCalled();
  });
  it("makeIdiomsIndexesArray should not be called with singleIndexesQuery", () => {
    localStorage.setItem("enIdioms", JSON.stringify(indexes));
    const spy = jest.spyOn(indexArrayMethods, "singleIndexesQuery");
    makeIdiomsIndexesArray(store.dispatch, "en", mockFetchIndexesArray);
    expect(spy).not.toBeCalled();
  })
});

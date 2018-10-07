import makeIdiomsIndexesArray, { filterList, indexArrayMethods } from "../methods/makeIdiomsIndexesArray";
import { mockFetchIndexesArray, mockedPage0, mockedPage1 } from '../__mocks__/makeIdiomsIndexesArray';
import * as _ from 'underscore';

describe("testing filterList", () => {
  it("should return an object", () => {
    expect(typeof filterList()).toBe("object")
  });
  it("pagesIds key in an object returned by filterList should be an array", () => {
    expect(filterList().pagesIds).toBeInstanceOf(Array)
  });
  it("returned object should have a key cmcontinue", () => {
    expect(filterList().cmcontinue).toBeDefined();
  });
  it("returned object's cmcontinue value should be a string", () => {
    expect(typeof filterList().cmcontinue).toBe("string");
  });
  it("returned object's cmcontinue value shouldn't be an empty string", () => {
    expect(filterList(mockedPage0).cmcontinue).toBeTruthy();
  });
  it("returned object's cmcontinue value should be an empty string", () => {
    expect(filterList(mockedPage1).cmcontinue).toBeFalsy();
  })
});

describe("values in pagesIds should be present in passed data.query.categorymembers array", () => {
  filterList(mockedPage0).pagesIds.forEach((id, i) => {
    it(`page of an id ${id} should be present in an argument passed to filterList (mockedPage0)`, () => {
      const idExistsInPassedData = () => {
        const page = mockedPage0.query.categorymembers;
        for (let i in page) {
          if (page[i].pageid === id) {return true}
        }
        return false;
      }
      expect(idExistsInPassedData()).toBeTruthy();
    })
  })
});

describe("should return only records which namespace (ns key value) is 0", () => {
  let {pagesIds} = filterList(mockedPage0);
  let nonArticles = mockedPage0.query.categorymembers.filter(el => el.ns !== 0);
  nonArticles.forEach(page => {
    it(`page of an id ${page.pageid} should not be present in an array returned by filterList`, () => {
      const idExistsInPassedData = () => {
        for (let i in pagesIds) {
          if (pagesIds[i] === page.pageid) {return true}
        }
        return false;
      }
      expect(idExistsInPassedData()).toBeFalsy();
    })
  })
});

describe("makeIdiomsIndexesArray behaviour", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const indexes = filterList(mockedPage1, filterList(mockedPage0).pagesIds).pagesIds;
  it("array returned from makeIdiomsIndexesArray should be equal to amout of pages with ns of 0", () => {
    expect(makeIdiomsIndexesArray("en", mockFetchIndexesArray)).resolves.toBe(indexes)
  });
  it("makeIdiomsIndexesArray should be called with wrapSingleIndexesQuery", () => {
    const spy = jest.spyOn(indexArrayMethods, "wrapSingleIndexesQuery");
    localStorage.clear();
    makeIdiomsIndexesArray("en", mockFetchIndexesArray);
    expect(spy).toHaveBeenCalled();
  });
  it("makeIdiomsIndexesArray should not be called with wrapSingleIndexesQuery", () => {
    localStorage.setItem("enIdioms", JSON.stringify(indexes));
    const spy = jest.spyOn(indexArrayMethods, "wrapSingleIndexesQuery");
    makeIdiomsIndexesArray("en", mockFetchIndexesArray);
    expect(spy).not.toBeCalled();
  })
})

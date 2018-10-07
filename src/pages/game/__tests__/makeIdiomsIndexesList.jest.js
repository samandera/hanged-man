import makeIdiomsIndexesList, { filterList } from "../methods/makeIdiomsIndexesList";
import mockFetch, { mockedPage0, mockedPage1 } from '../__mocks__/makeIdiomsIndexesList';
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

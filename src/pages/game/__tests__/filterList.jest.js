import { filterList } from "../methods/makeIdiomsIndexesArray";
import { mockedPage0, mockedPage1 } from '../__mocks__/makeIdiomsIndexesArray';

describe("testing filterList", () => {
  it("should return an object", () => {
    expect(typeof filterList()).toBe("object")
  });
  it("pagesIds key in an object returned by filterList should be an array", () => {
    expect(filterList().pagesTitles).toBeInstanceOf(Array)
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

describe("values in pagesTitles should be present in passed data.query.categorymembers array", () => {
  filterList(mockedPage0).pagesTitles.forEach((title, i) => {
    it(`page of a title ${title} should be present in an argument passed to filterList (mockedPage0)`, () => {
      const titleExistsInPassedData = () => {
        const page = mockedPage0.query.categorymembers;
        for (let i in page) {
          if (page[i].title === title) {return true}
        }
        return false;
      }
      expect(titleExistsInPassedData()).toBeTruthy();
    })
  })
});

describe("should return only records which namespace (ns key value) is 0", () => {
  let {pagesTitles} = filterList(mockedPage0);
  let nonArticles = mockedPage0.query.categorymembers.filter(el => el.ns !== 0);
  nonArticles.forEach(page => {
    it(`page of a title ${page.title} should not be present in an array returned by filterList`, () => {
      const titleExistsInPassedData = () => {
        for (let i in pagesTitles) {
          if (pagesTitles[i] === page.title) {return true}
        }
        return false;
      }
      expect(titleExistsInPassedData()).toBeFalsy();
    })
  })
});

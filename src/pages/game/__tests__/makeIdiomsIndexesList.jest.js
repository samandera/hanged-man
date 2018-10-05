import { filterList } from "../methods/makeIdiomsIndexesList";
import { mockedPage0, mockedPage1 } from '../__mocks__/makeIdiomsIndexesList';
import * as _ from 'underscore';

describe("testing filterList", () => {
  it("should return an object", () => {
    expect(typeof filterList()).toBe("object")
  });
  it("pagesIds key in an object returned by filterList should be an array", () => {
    expect(filterList().pagesIds).toBeInstanceOf(Array)
  });
  /*it("should return only records which namespace (ns key value) is 0", () => {
    let {pagesIds} = filterList(mockedPage0);
  })*/
});

describe("values in pagesIds should be present in passed data.query.categorymembers array", () => {
  filterList(mockedPage0).pagesIds.forEach((id, i) => {
    it(`${id} should be present in mockedPage0 (passed argument)`, () => {
      const idExistInPassedData = () => {
        const page = mockedPage0.query.categorymembers;
        for (let i in page) {
          if (page[i].pageid === id) {return true}
        }
        return false;
      }
      expect(idExistInPassedData()).toBeTruthy();
    })
  })
})

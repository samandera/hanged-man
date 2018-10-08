import loadIdiom from "../methods/loadIdiom";
import store from "../../store";
import { indexArrayMethods } from "../methods/makeIdiomsIndexesArray";
import { mockFetchIndexesArray } from "../__mocks__/makeIdiomsIndexesArray";

describe("test loadIdiom behaviour", () => {
  it("should call dispatch from within itself", () => {
    const spy = jest.spyOn(store, "dispatch");
    loadIdiom(store.dispatch, "en", mockFetchIndexesArray);
    expect(spy).toHaveBeenCalled();
  });
  it("should call makeIdiomsIndexesArray from within itself", () => {
    const spy = jest.spyOn(indexArrayMethods, "makeIdiomsIndexesArray");
    loadIdiom(store.dispatch, "en", mockFetchIndexesArray);
    expect(spy).toHaveBeenCalled();
  });
  it("loadIdiom flag should be set to true", () => {
    loadIdiom(store.dispatch, "en", mockFetchIndexesArray);
    expect(store.getState().flags.loadIdiom).toBe(true);
  });
  it("after resolving, loadIdiom flag should be set to false", () => {
    loadIdiom(store.dispatch, "en", mockFetchIndexesArray).then( () => {
      expect(store.getState().flags.loadIdiom).toBe(false);
      done();
    })
  })
})

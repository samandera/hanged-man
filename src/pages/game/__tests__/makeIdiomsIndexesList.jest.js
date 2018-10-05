jest.mock("../methods/makeIdiomsIndexesList");
import makeIdiomsIndexesList, { categoriesInLanguages } from "../methods/makeIdiomsIndexesList";
import React from 'react';
import Game from "../Game";
import ShallowRenderer from 'react-test-renderer/shallow';

makeIdiomsIndexesList.mockImplementation(() => {
  return "makeIdiomsIndexesList"
})

describe("testing makeIdiomsIndexesList", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Game/>);
  it("should be called", () => {
    expect(makeIdiomsIndexesList).toBeCalled();
  });
  it("argument with which is makeIdiomsIndexesList should be also a key in categoriesInLanguages object", () => {
    const langArgument = makeIdiomsIndexesList.mock.calls[0][0];
    expect(langArgument in categoriesInLanguages).toBeTruthy();
  })
})

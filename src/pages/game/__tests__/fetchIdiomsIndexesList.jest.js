jest.mock("../methods/fetchIdiomsIndexesList");
import fetchIdiomsIndexesList from "../methods/fetchIdiomsIndexesList";
import React from 'react';
import Game from "../Game";
import ShallowRenderer from 'react-test-renderer/shallow';

fetchIdiomsIndexesList.mockImplementation(() => {
  return 'xyz'
})

describe("testing fetchIdiomsIndexesList", () => {
  it("should be called", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Game/>)
    expect(fetchIdiomsIndexesList).toBeCalled();
  })
})

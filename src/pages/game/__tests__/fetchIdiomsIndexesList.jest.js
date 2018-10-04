jest.mock("../methods/fetchIdiomsIndexesList");
import fetchIdiomsIndexesList from "../methods/fetchIdiomsIndexesList";
import React from 'react';
import Game from "../Game";
import ShallowRenderer from 'react-test-renderer/shallow';
import mockFetchIdiomsIndexesList from '../__mocks__/fetchIdiomsIndexesList';

fetchIdiomsIndexesList.mockImplementation(() => {
  return mockFetchIdiomsIndexesList
})

describe("testing fetchIdiomsIndexesList", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Game/>);
  it("should be called", () => {
    expect(fetchIdiomsIndexesList).toBeCalled();
  });
  it("should be Promise", () => {
    expect(fetchIdiomsIndexesList()).toBeInstanceOf(Promise);
  });
  it("should be called with proper URL", () => {
    expect(fetchIdiomsIndexesList).toBeCalledWith("https://en.wiktionary.org/w/api.php?action=query&format=json&list=categorymembers&cmtitle=Category%3AEnglish_idioms&cmlimit=500&cmcontinue=");
  })
})

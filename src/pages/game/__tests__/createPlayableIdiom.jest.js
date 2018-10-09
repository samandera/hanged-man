import { PlayableIdiom } from "../methods/createPlayableIdiom";
import mockFetchIdiom, { idiom, titles } from '../__mocks__/createPlayableIdiom';
import store from '../../store';

const mockedPlayableIdiom = new PlayableIdiom(mockFetchIdiom);
const mockedCreateIdiom = () => mockedPlayableIdiom.create(store.dispatch, "en", titles);

describe("testing calling function within createPlayableIdiom.create", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should be called with getRandomTitle", () => {
    const spy = jest.spyOn(mockedPlayableIdiom, "getRandomTitle");
    mockedCreateIdiom();
    expect(spy).toHaveBeenCalled();
  })
})

describe("test getRandomTitle", () => {
  const randomTitle = mockedPlayableIdiom.getRandomTitle(titles);
  it("should be string", () => {
    expect(typeof randomTitle).resolves.toBe("string");
  });
  it("should evalueate to true", () => {
    expect(randomTitle).resolves.toBeTruthy()
  });
  it("should be called with an array passed to create function", () => {
    const spy = jest.spyOn(mockedPlayableIdiom, "getRandomTitle");
    mockedCreateIdiom();
    expect(spy).toHaveBeenCalledWith(titles);
  })
})

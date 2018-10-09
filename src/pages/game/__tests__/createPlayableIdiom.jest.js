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

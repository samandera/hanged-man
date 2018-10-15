import { PlayableIdiom } from "../methods/createPlayableIdiom";
import mockFetchIdiom, {
  inputIdiom, outputIdiom, titles, initialDefinition, extractedDefinitions
} from '../__mocks__/createPlayableIdiom';
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
});

describe("test creating playable idiom", () => {
  it("should resolve to object of specified definition and title", () => {
    expect(mockedCreateIdiom()).resolves.toBe(outputIdiom)
  });
  it("should be an asynchronous function", () => {
    expect(mockedCreateIdiom() instanceof Promise).toBeTruthy();
  })
});

describe("test setting idiom data", () => {
  it("should resolve to object of specified definition and title", () => {
    expect(mockedPlayableIdiom.setIdiomData(store.dispatch, "en", inputIdiom))
    .resolves.toBe(outputIdiom)
  });
  it("should be an asynchronous function", () => {
    expect(mockedPlayableIdiom.setIdiomData(store.dispatch, "en", inputIdiom) instanceof Promise)
    .toBeTruthy();
  })
});

describe("test extracting definition from returned HTML tree", () => {
  let extracted = mockedPlayableIdiom.extractDefinitions(initialDefinition, "en")
  it("should return content inside <ol></ol> tags", () => {
    expect(extracted)
    .toEqual(extractedDefinitions)
  })
  it("should be an Array", () => {
    expect(extracted instanceof  Array)
    .toBeTruthy()
  })
})

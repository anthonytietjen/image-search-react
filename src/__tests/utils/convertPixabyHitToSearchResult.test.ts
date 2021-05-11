import { convertPixabyHitToSearchResult } from '../../utils/convertPixabyHitToSearchResult'
import { IPixabayHit } from '../../interfaces/IPixabay'
import { ISearchResult } from '../../interfaces/ISearchResult'

describe("convertPixabyHitToSearchResult", () => {
  it("Converts a Pixaby Hit to a Search Result", () => {
    const input: IPixabayHit = {
      id: 1234,
      pageURL: "foo",
      type: "foo",
      tags: "tag1, tag2, tag3",
      previewURL: "foo",
      previewWidth: 123,
      previewHeight: 123,
      webformatWidth: 123,
      webformatHeight: 123,
      largeImageURL: "foo",
      fullHDURL: "foo",
      imageURL: "foo",
      imageWidth: 123,
      imageHeight: 123,
      imageSize: 123,
      views: 123,
      downloads: 123,
      comments: 123,
      likes: 123,
      favorites: 123,
      user_id: 123,
      user: "foo",
      userImageURL: "foo"
    }
    const output: ISearchResult = {
      id: 1234,
      favorites: 123,
      likes: 123,
      pageUrl: "foo",
      imageThumbnailUrl: "foo",
      tags: ["tag1", "tag2", "tag3"]
    }
    expect(convertPixabyHitToSearchResult(input)).toEqual(output)
  })
})
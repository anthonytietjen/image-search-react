import { IPixabayHit } from '../interfaces/IPixabay'
import { ISearchResult } from '../interfaces/ISearchResult'

export const convertPixabyHitToSearchResult = (hit: IPixabayHit) => {
  /* Convert pixaby hit to a generic search result.
   * This way, if we switch from Pixaby to another image provider someday,
   * then the search results page won't need code changes */
  const searchResult: ISearchResult = {
    id: hit.id,
    favorites: hit.favorites,
    imageThumbnailUrl: hit.previewURL,
    pageUrl: hit.pageURL,
    likes: hit.likes,
    tags: hit.tags.split(",").map(tag => tag.trim())
  }
  return searchResult
}
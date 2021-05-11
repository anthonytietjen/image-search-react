import { httpGetJson } from './httpGetJson'
import { IPixabaySearchResponse } from '../interfaces/IPixabay'
import { convertPixabyHitToSearchResult } from '../utils/convertPixabyHitToSearchResult'

export const pixabayApi = {
  getImages: async (keywords: string, category: string) => {
    const keywordsCleaned = keywords.trim().toLowerCase()
    const url = `/api/?q=${keywordsCleaned}&category=${category}&page=1&per_page=10&safesearch=true`
    const response = await httpGetJson<IPixabaySearchResponse>(url)
    const results = response.hits.map(hit => {
      return convertPixabyHitToSearchResult(hit)
    })
    return results
  }
}
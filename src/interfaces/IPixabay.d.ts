// Refer to https://pixabay.com/api/docs/#api_search_images
export interface IPixabaySearchResponse {
  total: number,
  totalHits: number,
  hits: IPixabayHit[]
}

// Refer to https://pixabay.com/api/docs/#api_search_images
export interface IPixabayHit {
  id: number
  pageURL: string
  type: string
  tags: string
  previewURL: string
  previewWidth: number
  previewHeight: number
  webformatWidth: number
  webformatHeight: number
  largeImageURL: string
  fullHDURL: string
  imageURL: string
  imageWidth: number
  imageHeight: number
  imageSize: number
  views: number
  downloads: number
  comments: number
  likes: number
  favorites: number
  user_id: number
  user: string
  userImageURL: string
}
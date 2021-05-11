import { ISavedImage } from '../interfaces/ISavedImage'

const savedImagesKey = "savedImages"

export const savedImagesApi = {
  saveImage: (id: number, pageUrl: string) => {
    const savedImage: ISavedImage = { id, pageUrl }
    const savedImages = getSavedImages() || []
    const updated = [...savedImages, savedImage]
    setJsonItem(savedImagesKey, updated)
    return updated
  },
  unSaveImage: (id: number) => {
    const savedImages = getSavedImages() || []
    const updated = savedImages.filter(savedImage => savedImage.id !== id)
    if (updated.length === 0) {
      window.localStorage.removeItem(savedImagesKey)
    } else {
      setJsonItem(savedImagesKey, updated)
    }
    return updated
  },
  getSavedImages: () => {
    const savedImages = getSavedImages() || []
    return savedImages
  }
}

const getSavedImages = () => {
  return getItemAsJson<ISavedImage[]>(savedImagesKey)
}

const getItemAsJson = <T>(key: string) => {
  const theString = window.localStorage.getItem(key)
  if (theString) {
    const value: T = JSON.parse(theString)
    return value
  }

  return undefined
}

const setJsonItem = (key: string, value: Object) => {
  const stringified = JSON.stringify(value)
  window.localStorage.setItem(key, stringified)
}
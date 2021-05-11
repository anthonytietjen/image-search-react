import React, { useState } from 'react'
import { SearchView } from './SearchView'
import { pixabayApi } from '../../api/pixabayApi'
import { ISearchResult } from '../../interfaces/ISearchResult'
import { savedImagesApi } from '../../api/savedImagesApi'
import { SearchContext, ISearchContext } from './SearchContext'

export const SearchContainer = () => {
  const [keywords, setKeywords] = useState('')
  const [category, setCategory] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [searchResults, setSearchResults] = useState(undefined as ISearchResult[] | undefined)
  const [savedImages, setSavedImages] = useState(savedImagesApi.getSavedImages())

  const handleKeywordsChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.target.value)
  }
  const handleCategoryChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const results = await pixabayApi.getImages(keywords, category)
    setSearchResults(results)

    // Sometimes the search is so fast the spinner on the button
    // can flicker and look like a glitch, so give the user time
    // to see the spinner before hiding it
    setTimeout(() => {
      setIsLoading(false)
    }, 250)
  }

  const handleSaveSearchClick = async () => {
    await pixabayApi.getImages(keywords, category)
  }

  const handleSave = (id: number, pageUrl: string) => {
    const savedImages = savedImagesApi.saveImage(id, pageUrl)
    setSavedImages(savedImages)
  }

  const handleUnSave = (id: number) => {
    const savedImages = savedImagesApi.unSaveImage(id)
    setSavedImages(savedImages)
  }

  const context: ISearchContext = {
    category,
    isLoading,
    keywords,
    savedImages,
    searchResults,
    handleKeywordsChanged,
    handleCategoryChanged,
    handleSubmit,
    handleSaveSearchClick,
    handleSave,
    handleUnSave,
  }

  return (
    <SearchContext.Provider value={context}>
      <SearchView />
    </SearchContext.Provider>
  )
}
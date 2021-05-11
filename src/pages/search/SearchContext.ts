import React from 'react'
import { ISearchResult } from '../../interfaces/ISearchResult'
import { ISavedImage } from '../../interfaces/ISavedImage'

export interface ISearchContext {
  keywords: string
  category: string
  isLoading: boolean
  searchResults: ISearchResult[] | undefined
  savedImages: ISavedImage[]
  handleKeywordsChanged: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleCategoryChanged: (e: React.ChangeEvent<HTMLSelectElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  handleSaveSearchClick: () => void
  handleSave: (id: number, pageUrl: string) => void
  handleUnSave: (id: number) => void
}

export const defaultContext: ISearchContext = {
  keywords: '',
  category: '',
  isLoading: false,
  searchResults: undefined,
  savedImages: [],
  handleKeywordsChanged: (e: React.ChangeEvent<HTMLInputElement>) => { },
  handleCategoryChanged: (e: React.ChangeEvent<HTMLSelectElement>) => { },
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => { },
  handleSaveSearchClick: () => { },
  handleSave: (id: number, pageUrl: string) => { },
  handleUnSave: (id: number) => { },
}

export const SearchContext = React.createContext<ISearchContext>(defaultContext)
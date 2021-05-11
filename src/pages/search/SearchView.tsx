import React from 'react'
import './SearchView.scss'
import { SearchForm } from '../../components/SearchForm/SearchForm'
import { SearchResults } from '../../components/SearchResults/SearchResults'
import { SavedImages } from '../../components/SavedImages/SavedImages'

export const SearchView = () => (
  <div className="search-view">
    <div className="form-and-results-container">
      <SearchForm />
      <SearchResults />
    </div>

    <SavedImages />
  </div>
)
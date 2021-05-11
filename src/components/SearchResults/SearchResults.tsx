import React, { useContext } from 'react'
import { SearchResultRow } from '../SearchResultRow/SearchResultRow'
import { SearchContext } from '../../pages/search/SearchContext'

export const SearchResults = () => {
  const context = useContext(SearchContext)

  if (typeof context.searchResults === "undefined") {
    // User hasn't performed a search yet, so show nothing
    return <div data-testid="no_search"></div>
  }

  return (
    <div>
      {/* User performed a search, but there are no matches */}
      {context.searchResults.length === 0 &&
        <div data-testid="no_results">
          No results
        </div>
      }

      {/* User performed a search, and there are matches */}
      {context.searchResults.map(result => {
        const isSaved = context.savedImages.findIndex(savedImage => savedImage.id === result.id) > -1
        return (
          <SearchResultRow
            key={result.id}
            isSaved={isSaved}
            searchResult={result}
          />
        )
      })}
    </div>
  )
}
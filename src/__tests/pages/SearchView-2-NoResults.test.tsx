import React from 'react'
import { render } from '@testing-library/react'
import { SearchView } from '../../pages/search/SearchView'
import { SearchContext, defaultContext } from '../../pages/search/SearchContext'

test('Renders "no results" message if user has performed a search but there are no matches', () => {
  const { getByTestId } = render(
    <SearchContext.Provider value={{
      ...defaultContext,
      keywords: "zxcvoiuzxhovjzhxcvlkjzh",
      searchResults: [],
      savedImages: [{ id: 1, pageUrl: "foo" }]
    }}>
      <SearchView />
    </SearchContext.Provider>
  )

  // No Results div
  const noResultsElement = getByTestId(`no_results`)
  expect(noResultsElement).toBeInTheDocument()
})
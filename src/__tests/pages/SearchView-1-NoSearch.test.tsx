import React from 'react'
import { render } from '@testing-library/react'
import { SearchView } from '../../pages/search/SearchView'
import { SearchContext, defaultContext } from '../../pages/search/SearchContext'

test('Renders blank results area if user has not performed a search yet1', () => {
  const { getByTestId } = render(
    <SearchContext.Provider value={defaultContext}>
      <SearchView />
    </SearchContext.Provider >
  )

  // No search performed yet
  const noSearchElement = getByTestId(`no_search`)
  expect(noSearchElement).toBeInTheDocument()

  // No saved images
  const noSavedImagesElement = getByTestId(`no_saved_images`)
  expect(noSavedImagesElement).toBeInTheDocument()
})
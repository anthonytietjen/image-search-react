import React from 'react'
import { render } from '@testing-library/react'
import { SearchView } from '../../pages/search/SearchView'
import { ISearchResult } from '../../interfaces/ISearchResult'
import { SearchContext, defaultContext } from '../../pages/search/SearchContext'

test('Renders search results and saved image ids', () => {
  const searchResults: ISearchResult[] = [
    {
      id: 1,
      imageThumbnailUrl: "https://fake_url_for_testing.com/image_111.png",
      pageUrl: "foo",
      favorites: 11,
      likes: 12,
      tags: ["hello", "world"]
    },
    {
      id: 2,
      imageThumbnailUrl: "https://fake_url_for_testing.com/image_2.png",
      pageUrl: "bar",
      favorites: 13,
      likes: 14,
      tags: ["foo", "bar"]
    },
  ]

  const { getByTestId } = render(
    <SearchContext.Provider value={{
      ...defaultContext,
      keywords: "cat",
      searchResults,
      savedImages: [{ id: 1, pageUrl: "foo" }]
    }}>
      <SearchView />
    </SearchContext.Provider>
  )

  const result1 = searchResults[0]
  const result2 = searchResults[1]

  // First search result
  const img1Element = getByTestId(`image_${result1.id}`)
  expect(img1Element).toHaveAttribute("src", result1.imageThumbnailUrl)

  // First result should have UnSave button
  const buttonUnSave1Element = getByTestId(`button_unsave_${result1.id}`)
  expect(buttonUnSave1Element).toBeInTheDocument()

  // Second search result image should exist
  const img2Element = getByTestId(`image_${result2.id}`)
  expect(img2Element).toHaveAttribute("src", result2.imageThumbnailUrl)

  // Second result should have Save button
  const buttonSave2Element = getByTestId(`button_save_${result2.id}`)
  expect(buttonSave2Element).toBeInTheDocument()

  // Saved IDs
  const saved1Element = getByTestId(`saved_id_${result1.id}`)
  expect(saved1Element).toBeInTheDocument()

})
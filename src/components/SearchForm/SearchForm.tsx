import React, { useContext } from 'react'
import './SearchForm.scss'
import classNames from 'classnames'
import { upperCaseFirstLetter } from '../../utils/upperCaseFirstLetter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { SearchContext } from '../../pages/search/SearchContext'

const categoriesList = [
  "fashion", "nature", "backgrounds", "science", "education", "people",
  "feelings", "religion", "health", "places", "animals", "industry", "food", "computer",
  "sports", "transportation", "travel", "buildings", "business", "music"
].sort()

export const SearchForm = () => {
  const context = useContext(SearchContext)

  return (
    <div className="search-form">
      <form onSubmit={context.handleSubmit}>
        <input
          aria-label="Keywords"
          data-testid="keywords"
          className={classNames("input-keywords", { "populated": !!context.keywords.trim() })}
          type="text"
          autoFocus
          onChange={context.handleKeywordsChanged}
          value={context.keywords}
          placeholder={"Keyword..."}
        />
        <select
          aria-label="Category"
          placeholder="asdf"
          className={classNames("select-category", { "populated": !!context.category })}
          value={context.category}
          onChange={context.handleCategoryChanged}
        >
          <option value="">Category...</option>
          {categoriesList.map(category => (
            <option
              key={category}
              value={category}
            >
              {upperCaseFirstLetter(category)}
            </option>
          ))}
        </select>
        <button
          data-testid="search"
          className="button-search"
          type="submit"
        >
          {context.isLoading
            ? <FontAwesomeIcon icon={faSpinner} spin />
            : <>Search</>
          }
        </button>
      </form>
    </div>
  )
}
import React, { useContext } from 'react'
import './SearchResultRow.scss'
import { ISearchResult } from '../../interfaces/ISearchResult'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faStar } from '@fortawesome/free-solid-svg-icons'
import { Tag } from '../Tag/Tag'
import { SearchContext } from '../../pages/search/SearchContext'

interface IProps {
  searchResult: ISearchResult
  isSaved: boolean
}

export const SearchResultRow = (props: IProps) => {
  const context = useContext(SearchContext)
  const id = props.searchResult.id

  const handleSave = () => {
    context.handleSave!(id, props.searchResult.pageUrl)
  }

  const handleUnSave = () => {
    context.handleUnSave!(id)
  }

  return (
    <div className="search-result-row">
      <div className="container-image">
        <a
          href={props.searchResult.pageUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            data-testid={`image_${id}`}
            alt={id.toString()}
            src={props.searchResult.imageThumbnailUrl}
          />
        </a>

        {!props.isSaved &&
          <button
            data-testid={`button_save_${id}`}
            className="save-result"
            onClick={handleSave}
          >
            Save
          </button>
        }

        {props.isSaved &&
          <button
            data-testid={`button_unsave_${id}`}
            className="unsave-result"
            onClick={handleUnSave}
          >
            Saved
          </button>
        }
      </div>

      <div className="container-metadata">
        <div
          className="container-tags"
          data-testid={`tags_${id}`}
        >
          {props.searchResult.tags.map(tag => (
            <Tag
              key={`${id}_${tag}`}
              testId={`tags_${id}_${tag}`}
              text={tag}
            />
          ))}
        </div>

        <div className="container-stats">
          <span
            data-testid={`likes_${id}`}
          >
            {props.searchResult.likes}
            <FontAwesomeIcon icon={faThumbsUp} />
          </span>
          <span
            data-testid={`likes_${id}`}
          >
            {props.searchResult.favorites}
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
      </div>
    </div>
  )
}
import React, { useContext } from 'react'
import './SavedImages.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { SearchContext } from '../../pages/search/SearchContext'

export const SavedImages = () => {
  const context = useContext(SearchContext)

  return (
    <div className="saved-images">
      <h2>Saved</h2>

      {context.savedImages.length === 0 &&
        <div
          data-testid="no_saved_images"
          className="no-saved-images"
        >
          No saved images
        </div>
      }

      {context.savedImages.length > 0 &&
        <ul>
          {context.savedImages.map(savedImage => (
            <li key={savedImage.id}>
              <a
                data-testid={`saved_id_${savedImage.id}`}
                href={savedImage.pageUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>#{savedImage.id}</span>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

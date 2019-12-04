import React, { useContext } from 'react'
import CardsContext from '../../context/cards-context'

const SearchResult = ({ repository }) => {
  const { dispatch } = useContext(CardsContext)

  // Adding repository card to CardList component
  const addCard = (node) => {
    dispatch({
      type: 'ADD_CARD',
      card: node
    })
  }
  return (
    <div className="list-item">
      <div>
        <h3 className="list-item__title">
          <a href={repository.node.url}>{repository.node.name} </a> 
          <span className="list-item__sub-title">
           by {repository.node.owner.login}
          </span> 
        </h3>
        <span className="list-item__sub-title">
        ★{repository.node.stargazers.totalCount}
        </span>
      </div>
      <button 
        className="button button--secondary" 
        onClick={() => addCard(repository.node)}
      >+</button>
    </div>
  )
}

export { SearchResult as default }

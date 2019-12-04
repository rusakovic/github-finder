import React, { useContext } from 'react'
import CardsContext from '../../context/cards-context'

const CardItem = ({ repository }) => {
  const { dispatch } = useContext(CardsContext)
  
  // Removing repository card from CardList component
  const removeCard = (id) => {
    dispatch({
      type: 'REMOVE_CARD',
      id: id
    })
  }
  return (
    <div className="card-item">
      <button className="button button--remove" onClick={() => removeCard(repository.id)}>X</button>
      <a href={repository.owner.url}>
        <div className='card-item__user'>
          <img src={repository.owner.avatarUrl} alt={repository.owner.login} />
          <h5 className="list-item__title">{repository.owner.login}</h5>
        </div>
      </a>
      <div className="card-item__repository">
        <a href={repository.url}>
          <h3>{repository.name}</h3>
        </a>
        <h5>Forks: {repository.forkCount}</h5>
        <h5>Stargazers: {repository.stargazers.totalCount}</h5>
        <h5>Watchers: {repository.watchers.totalCount}</h5>
      </div>
    </div>
  )
}

export default CardItem

import React, { useContext } from 'react'
import CardItem from './CardItem.component'
import CardsContext from '../../context/cards-context'

const CardList = () => {
  const { cards } = useContext(CardsContext)

  return (cards.length > 0) && (
    <div className="content-container">
      <div className="card-list-container">
        <h2>favorite repositories</h2>
        <div className="card-list">
        {
          cards.map((repository,idx) => (
            <CardItem 
            key={repository.id}
            repository={repository}
            />
            ))
          }
          </div>
      </div>
    </div>
  )
}

export { CardList as default }

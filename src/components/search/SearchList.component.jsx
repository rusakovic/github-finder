import React, { useContext } from 'react'
import SearchResult from './SearchResult.component.jsx'
import CardsContext from '../../context/cards-context'

const SearchList = () => {
  const { data } = useContext(CardsContext)

  return (
      <div className="content-container">
        <div className="list-body">
          {data && data.search.edges.map((repository) => (
            <SearchResult 
              key={repository.node.id} 
              repository={repository} 
            />  
          )
        )
          }
        </div>
      </div>
  ) 
}

export default SearchList

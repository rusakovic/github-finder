import React, { useState, useEffect, useReducer } from 'react';
import { useQuery } from '@apollo/react-hooks';
import cardsReducer from '../../reducers/cards.reducer'

import REPOSITORIES_SEARCH from '../../graphql/search-query'
import CardsContext from '../../context/cards-context'

import CardList from '../cards/CardList.component'
import SearchList from '../search/SearchList.component'
import SearchInput from '../search/SearchInput.component'
import LoadingPage from '../search/LoadingPage.component'

import '../../styles/styles.scss'

const  GitHubFinderApp = () => {
  // Cards state
  const [cards, dispatch] = useReducer(cardsReducer, [])

  // Request value we send to query
  const [ searchRequest, setSearchRequest ] = useState("")

  // Fetching data from github via apollo-client
  const searchQuery = REPOSITORIES_SEARCH(searchRequest)

  // we should skip the first Query request, after reloading the page
  const { loading, error, data } = useQuery(searchQuery, { skip: !searchRequest})

  // read cards from localstorage
  useEffect(() => {
    const cardsData = JSON.parse(localStorage.getItem('cards'))
    
    if (cardsData) {
      dispatch({ type: 'POPULATE_CARDS', cards: cardsData})
    }
  }, [])

  // save cards to localstorage
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])

  return (
    <CardsContext.Provider value={{ cards, dispatch, setSearchRequest, data }}>
      <div>
          <SearchInput />
            {loading ? ( <LoadingPage />) : (
                <SearchList />
              )}
            {error && (<p>Error :(</p>)}
          <CardList />
      </div>
    </CardsContext.Provider>
  );
}

export default GitHubFinderApp;

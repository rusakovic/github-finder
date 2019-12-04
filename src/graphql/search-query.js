import { gql } from 'apollo-boost';


const REPOSITORIES_SEARCH = (search) => {
  return (
    gql`{
      search(query: "${search}", type: REPOSITORY, first: 5) {
        repositoryCount
        edges {
          node {
            ... on Repository {
              id
              name
              forkCount
              owner {
                login
                avatarUrl
                url
              }
              stargazers {
                totalCount
              }
              url
              watchers {
                totalCount
              }
            }
          }
        }
      }
    }
  `
  )
} 

export { REPOSITORIES_SEARCH as default }
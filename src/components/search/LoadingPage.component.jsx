import React from 'react'

const LoadingPage = () => {
  return (
    <div className="loader">
     <img 
      className="loader__image" 
      alt="loading-spinner" 
      src="%PUBLIC_URL%/images/loader.gif" 
    />
    </div>
  )
}

export default LoadingPage

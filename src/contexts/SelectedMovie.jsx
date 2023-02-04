import React, { useState } from 'react'

export const SelectedMovieContext  = React.createContext();

export default function SelectedMovie(props) {

    const [selectedMovie,setSelectedMovie] = useState([]);


    const values = {
        selectedMovie,
        setSelectedMovie
    }


  return (
    <SelectedMovieContext.Provider value={values}>
        {props.children}
    </SelectedMovieContext.Provider>
  )
}

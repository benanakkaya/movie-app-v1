import React, { useContext} from 'react'
import { MoviesContext } from "../contexts/Movies"

import { UsersContext } from "../contexts/Users"


export default function ListByCategorie() {

    
  const {movieArray,deleteMovie,onEditMovie,selectedCategory} = useContext(MoviesContext);
  const { adminMode, login } = useContext(UsersContext);


  return (
    <div className="container mt-3">
      <div className="row movie-list without-big">
        {movieArray.filter((mov) => (mov.category).toLowerCase() === selectedCategory).map((movie) => (

          <div className="col-md-4 col-xs-6 movie" key={movie.id}>
            <div className="poster">
              <span className="rating">
                <span className="rate">{movie.rating}</span>
              </span>
              <img style={{ width: "150px", height: "222px" }} src={movie.image} alt="film afiş" />
              <div className="detail">
                <p><span className="original-name">{movie.orginalName}</span></p>
                <p><span className="turkish-name">{movie.title}</span></p>
              </div>
              <div className="hover-box">
                {adminMode === true && login === true ?
                  <span className='adminTools'>
                    <img src="https://cdn-icons-png.flaticon.com/512/6711/6711573.png" onClick={() => deleteMovie(movie)} className="adminIcons " style={{ zIndex: "2", width: "2rem", height: "2rem" }} alt="delete-pic" />
                    <p>&nbsp;</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/1057/1057097.png" onClick={() => onEditMovie(movie)} className="adminIcons  " style={{ zIndex: "2", width: "2rem", height: "2rem" }} alt="edit-pic" />
                  </span> : null}

                <p className="top">{movie.year}</p>
                <p className='description'>{movie.description} </p>
                <p className="bottom">{movie.category}</p>
                
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

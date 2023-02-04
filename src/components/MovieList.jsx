import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import MoviePagination from './MoviePagination';
import { ActiveContext } from '../contexts/ModalActive';
import { MoviesContext } from "../contexts/Movies"
import { SelectedMovieContext } from '../contexts/SelectedMovie';

import { UsersContext } from "../contexts/Users"


export default function MovieList() {


  const { movieArray, deleteMovie, onEditMovie } = useContext(MoviesContext);
  const { adminMode, login } = useContext(UsersContext);
  const { setAddModalState } = useContext(ActiveContext);
  const { setSelectedMovie } = useContext(SelectedMovieContext);

  const [currentPage, setCurrentPage] = useState(1);
  const movieNum = 9;
  const pageNum = Math.ceil(movieArray.length / movieNum);
  const willListedLast = movieNum * currentPage;
  const willListedFirst = willListedLast - 9;




  return (
    <div className="container mt-3">
      {adminMode === true ? <button type="button" className="btn btn-success ms-3" style={{ float: "right" }} onClick={() => setAddModalState(true)}>Film Ekle</button> : null}
      <div className="row movie-list without-big">
        {movieArray.sort((a, b) => { return a.addDate < b.addDate ? 1 : -1 }).slice(willListedFirst, willListedLast).map((movie) => (

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
                    <img src="https://cdn-icons-png.flaticon.com/512/6711/6711573.png" onClick={() => deleteMovie(movie)} className="adminIcons " style={{ zIndex: "5", width: "2rem", height: "2rem" }} alt="delete-pic" />
                    <p>&nbsp;</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/1057/1057097.png" onClick={() => onEditMovie(movie)} className="adminIcons  " style={{ zIndex: "5", width: "2rem", height: "2rem" }} alt="edit-pic" />
                  </span> : null}

                <p className="top">{movie.year}</p>
                <p className='description'>{movie.description.slice(0, 150) + "..."} </p>
                <p className="bottom">{movie.category}</p>
                <p className="bottom">
                  <Link
                    name={`${movie.title.toLowerCase().replace(/ğ/g, "g").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ç/g, "c").replace(/ı/g, "i").replace(/ş/g, "s").replace(/'|"|!/g, "").replace(/ |:|&/g, "-")}`}
                    to={`/${movie.title.toLowerCase().replace(/ğ/g, "g").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ç/g, "c").replace(/ı/g, "i").replace(/ş/g, "s").replace(/'|"|!/g, "").replace(/ |:|&/g, "-")}`}
                    onClick={(event) => setSelectedMovie([event.target.name, movie.id])}
                  >
                    mERHABA
                  </Link>
                </p>




              </div>
            </div>

          </div>

        ))}
      </div>

      <MoviePagination
        currentPage={currentPage}
        pageNum={pageNum}
        setCurrentPage={setCurrentPage}
      />

    </div>
  )
}

import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MoviesContext } from '../contexts/Movies';
import { SelectedMovieContext } from '../contexts/SelectedMovie';




function BestMovies() {

    const { movieArray } = useContext(MoviesContext);
    const { setSelectedMovie } = useContext(SelectedMovieContext);
    const [choosenCategory, setChoosenCategory] = useState("all");





    return (


        <div className='container text-light' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div className='row col-sm-9 mt-3 d-flex justify-content-center'>
                <label className='col-sm-5' htmlFor='categories'>Kategoriye göre sıralama yapabilirsiniz:</label>
                <select className='col-sm-4' id="categories" name="categories" onChange={(event) => { setChoosenCategory(event.target.value) }}>
                    <option value="all">Hepsi</option>
                    <option value="macera">Macera</option>
                    <option value="dram">Dram</option>
                    <option value="korku">Korku</option>
                    <option value="komedi">Komedi</option>
                </select>
            </div>
            {choosenCategory == "all" ?
                movieArray.sort((a, b) => {
                    return a.rating <= b.rating ? 1 : -1;
                }).map((movie, index) => (
                    <div className='row col-md-11 p-3 mt-4' key={movie.id} style={{ backgroundColor: "rgba(0,0,0,0.4)", display: "flex" }}>
                        <div className='rank-bestmovies col-md-1'>
                            <h2 style={{ color: "goldenrod" }}>{index + 1 + "."}</h2>
                        </div>
                        <div className='pic-bestmovies col-md-3'>
                            <img src={movie.image} alt="picforbestmovies" />
                        </div>
                        <div className='info-bestmovies ms-3 col-md-7'>
                            <span style={{ float: "right", color: "goldenrod", fontSize: "1.4rem", textAlign: "center", width: "2.5rem", height: "2.5rem", border: "0.15rem solid goldenrod", borderRadius: "50%" }}>{movie.rating}</span>
                            <Link style={{ width: "50px", height: "50px", textDecoration: "none", color: "goldenrod", fontSize: "1.7rem" }} name={`${movie.title.toLowerCase().replace(/ğ/g, "g").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ç/g, "c").replace(/ı/g, "i").replace(/ş/g, "s").replace(/'|"|!/g, "").replace(/ |:|&/g, "-")}`}
                                to={`/${movie.title.toLowerCase().replace(/ğ/g, "g").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ç/g, "c").replace(/ı/g, "i").replace(/ş/g, "s").replace(/'|"|!/g, "").replace(/ |:|&/g, "-")}`}
                                onClick={(event) => setSelectedMovie([event.target.name, movie.id])}> {movie.title} </Link>
                            <h5>{movie.description.slice(0, 200) + "..."}</h5>
                        </div>

                    </div>
                ))
                : movieArray.sort((a, b) => {
                    return a.rating <= b.rating ? 1 : -1;
                }).filter((mov) => (mov.category).toLowerCase() == choosenCategory).map((movie, index) => (
                    <div className='row col-md-11 p-3 mt-4' key={movie.id} style={{ backgroundColor: "rgba(0,0,0,0.4)", display: "flex" }}>
                        <div className='rank-bestmovies col-md-1'>
                            <h2 style={{ color: "goldenrod" }}>{index + 1 + "."}</h2>
                        </div>
                        <div className='pic-bestmovies col-md-3'>
                            <img src={movie.image} alt="picforbestmovies" />
                        </div>
                        <div className='info-bestmovies ms-3 col-md-7'>
                            <span style={{ float: "right", color: "goldenrod", fontSize: "1.4rem", textAlign: "center", width: "2.5rem", height: "2.5rem", border: "0.15rem solid goldenrod", borderRadius: "50%" }}>{movie.rating}</span>
                            <Link style={{ width: "50px", height: "50px", textDecoration: "none", color: "goldenrod", fontSize: "1.7rem" }} name={`${movie.title.toLowerCase().replace(/ğ/g, "g").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ç/g, "c").replace(/ı/g, "i").replace(/ş/g, "s").replace(/'|"|!/g, "").replace(/ |:|&/g, "-")}`}
                                to={`/${movie.title.toLowerCase().replace(/ğ/g, "g").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ç/g, "c").replace(/ı/g, "i").replace(/ş/g, "s").replace(/'|"|!/g, "").replace(/ |:|&/g, "-")}`}
                                onClick={(event) => setSelectedMovie([event.target.name, movie.id])}> {movie.title} </Link>
                            <h5>{movie.description.slice(0, 200) + "..."}</h5>
                        </div>

                    </div>
                    
                ))
                }

        </div>

    )
}


export default BestMovies;
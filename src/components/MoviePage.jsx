import React, { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../contexts/Movies';
import { SelectedMovieContext } from '../contexts/SelectedMovie';
import CommentSection from './CommentSection';

function MoviePage() {

    const { movieArray } = useContext(MoviesContext);
    const { selectedMovie } = useContext(SelectedMovieContext);
    const [watchIt, setWatchIt] = useState(false);


    return (
        <div className='container'>
            {watchIt == false ?
                movieArray.filter((mov) => mov.id === selectedMovie[1]).map((targetMovie) => (
                    <div className='row mt-3 col-md-10 p-3' key={targetMovie.id} style={{ backgroundColor: "rgba(0,0,0,0.4)", display: "flex", justifyContent: "center", alignItems: "center", margin: "auto" }}>

                        <div className='col-md-3 ms-1'>
                            <img src={targetMovie.image} />
                        </div>
                        <div className='col-md-7'>
                            <h3 style={{ color: "goldenrod", textDecoration: "underline " }}>{targetMovie.title}</h3>
                            <h4 style={{ color: "goldenrod" }}>Orjinal İsmi: <span style={{ color: "azure" }}>{targetMovie.orginalName}</span></h4>
                            <h4 style={{ color: "goldenrod" }}>Yapım Yılı: <span style={{ color: "azure" }}>{targetMovie.year}</span></h4>
                            <h4 style={{ color: "goldenrod" }}>Türü: <span style={{ color: "azure" }}>{targetMovie.category}</span></h4>
                            <h4 style={{ color: "goldenrod" }}>Puanı : <span style={{ color: "azure" }}>{targetMovie.rating}</span></h4>
                            {targetMovie.link !== "" ?
                                <span style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "7rem" }} className='btn btn-primary' onClick={() => setWatchIt(true)}><img style={{ width: "2rem", marginRight: "1rem" }} src='https://cdn-icons-png.flaticon.com/512/187/187210.png' />İZLE</span>

                                : null}
                        </div>
                        <div className='col-md-10 mt-3' >
                            <h3 style={{ color: "goldenrod" }} >Konusu</h3>
                            <p style={{ fontSize: "1.2rem", color: "azure" }}>{targetMovie.description}</p>
                        </div>
                    </div>

                )) : <div className='row mt-3 col-md-10 p-3' style={{ backgroundColor: "rgba(0,0,0,0.4)", display: "flex", justifyContent: "right", alignItems: "center", margin: "auto" }}>
                    <span  className='btn btn-primary col-md-2 mb-3 me-3' onClick={() => setWatchIt(false)}> Geri Dön </span>
                    {movieArray.filter((mov) => mov.id === selectedMovie[1]).map((targetMovie,ind) => (
                        <iframe key={ind} width="640" height="360" src={targetMovie.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                    ))}
                </div>
            }



            <CommentSection movieID={selectedMovie[1]}></CommentSection>
        </div >
    )
}


export default MoviePage;
import React, {   useContext, useEffect, useState } from 'react';
import axios from "axios"
import { ActiveContext } from './ModalActive';
import { SelectedMovieContext } from './SelectedMovie';



export const MoviesContext = React.createContext();

function Movies(props) {

  const {selectedMovie,setSelectedMovie} = useContext(SelectedMovieContext)
  const {setEditModalState,setAddModalState} = useContext(ActiveContext);
  const [selectedCategory,setSelectedCategory] = useState("macera");
  const [movieArray, setMovieArray] = useState([]);
  const [oldArray, setOldArray] = useState([]);
  const [editingMovie,setEditingMovie] = useState({});
  const [addingMovie,setAddingMovie] = useState({id:"",title:"",category:"",orginalName:"",year:"",image:"",description:"",rating:""});
  const [searchMode,setSearchMode] = useState(false);
  
   

  useEffect ( () => {

    const fetchData = async () => {

      const res = await axios.get("http://localhost:3002/movies");
      setMovieArray(res.data)
      setOldArray(res.data)

    }

    fetchData();

    


  },[])

  const filtMovies = (value) => {

    const filterList = oldArray.filter((movie) => (
      movie.title.toLowerCase().indexOf(value.toLowerCase()) > -1
      ))  

      setMovieArray(filterList)
  }

  const deleteMovie = async (movie) => {
    await axios.delete(`http://localhost:3002/movies/${movie.id}`);
  
    const newMovieList = movieArray.filter((e) => 
      e.id !== movie.id
    )

    setMovieArray(newMovieList);
    setOldArray(newMovieList);
    
  }

  const onEditMovie = (value) => {
    setEditModalState(true);
    setEditingMovie(value);
    console.log(editingMovie)
  }

  const editMovie = async () => {
    await axios.patch(`http://localhost:3002/movies/${editingMovie.id}`,editingMovie)
    setTimeout(async () => {
      setEditModalState(false);
      const res = await axios.get("http://localhost:3002/movies");
      setMovieArray(res.data)
      setOldArray(res.data)
  }, 1000)
  }

  const addComment = async (updated) => {

    await axios.patch(`http://localhost:3002/movies/${selectedMovie[1]}`,{comments:updated[0].comments})
    setTimeout(async () => {
      const res = await axios.get("http://localhost:3002/movies");
      setMovieArray(res.data)
      setOldArray(res.data)
  }, 200)
  }

  const deleteComment = async () => {
    await axios.delete("")
  }

  const AddMovie = async (newMovie) => {
    console.log(newMovie.id)
    await axios.post("http://localhost:3002/movies/",newMovie);
    setTimeout(async () => {
      setAddModalState(false);
      const res = await axios.get("http://localhost:3002/movies");
      setMovieArray(res.data)
      setOldArray(res.data)
  }, 1000)

  }


  const values = {
    movieArray,
    setMovieArray,
    filtMovies,
    searchMode,
    setSearchMode,
    deleteMovie,
    onEditMovie,
    editingMovie,
    setEditingMovie,
    editMovie,
    selectedCategory,
    setSelectedCategory,
    addingMovie,
    setAddingMovie,
    AddMovie,
    addComment

  }








  return (
    <MoviesContext.Provider value={values}>
      {props.children}
    </MoviesContext.Provider>
  )
}


export default Movies;

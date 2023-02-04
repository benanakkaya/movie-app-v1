import React, { useContext } from "react";
import Movies, { MoviesContext } from "./contexts/Movies"
import MovieList from "./components/MovieList"
import NavBar from "./components/NavBar"
import LoginModal from "./components/LoginModal";
import EditModal from "./components/EditModal";
import RegisterModal from "./components/RegisterModal";
import ModalActive from "./contexts/ModalActive";
import Users from "./contexts/Users";
import BestMovies from "./components/BestMovies";
import MoviePage from "./components/MoviePage"
import ListByCategorie from "./components/ListByCategorie";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import AddModal from "./components/AddModal";
import  { SelectedMovieContext } from "./contexts/SelectedMovie";
import { SearchContext } from "./contexts/SearchBar";




function App() {


  const { selectedMovie } = useContext(SelectedMovieContext);
  const { searchIndex } = useContext(SearchContext);


  return (
    <div className="App">
      <Router>
        <ModalActive>
          <Users>
            <Movies>
              <LoginModal />
              <RegisterModal />
              <AddModal />
              <EditModal />
              <NavBar />
              <Routes>
                <Route path="/best-movies" element={<BestMovies />} />
                <Route path="/category-adventure" element={<ListByCategorie />} />
                <Route path="/category-scary" element={<ListByCategorie />} />
                <Route path="/category-comedy" element={<ListByCategorie />} />
                <Route path="/category-drama" element={<ListByCategorie />} />
                <Route path={`/${selectedMovie[0]}`} element={<MoviePage />} />
                {searchIndex == "" ? <Route path="/" element={<MovieList />} /> :
                  <Route path={`/${searchIndex}`} element={<MovieList />} />
                }
                <Route path="/" element={<MovieList />} />
              </Routes>
            </Movies>
          </Users>
        </ModalActive>

      </Router>

    </div>
  );
}

export default App;

import React, { useContext } from 'react'
import { FormattedMessage, IntlProvider } from 'react-intl';
import {
    BrowserRouter as Router,
    Link,

} from "react-router-dom";
import App from '../App';
import { ActiveContext } from '../contexts/ModalActive'
import { MoviesContext } from '../contexts/Movies';
import { SearchContext } from '../contexts/SearchBar';
import { UsersContext } from '../contexts/Users';
import BestMovies from './BestMovies';



export default function NavBar() {

    const { setLoginModalState, setRegisterModalState } = useContext(ActiveContext);
    const { searchIndex, setSearchIndex } = useContext(SearchContext);

    const { filtMovies, setSelectedCategory, selectedCategory } = useContext(MoviesContext);
    const { login, setLogin, setAdminMode, loginUsername, setLoginUsername } = useContext(UsersContext);

    const logout = () => {
        setTimeout(() => {
            setLogin(false);
            setAdminMode(false);
            setLoginUsername("");
            localStorage.setItem("isLogin", "false");
            localStorage.setItem("isAdmin", "false");
            localStorage.setItem("username", null);
        }, 1500)
    }

    var lang = "tr-TR"

    const langValues = {
        "tr-TR": {
            homePage: "Ana Sayfa",
            bestMovies: "En İyi Filmler",
            categories: "Kategoriler",
            adventure: "Macera",
            scary: "Korku",
            comedy: "Komedi",
            drama: "Dram",
            welcome: "Hoşgeldin",
            search: "Ara",
            logIn: "Giriş Yap",
            register: "Kayıt Ol",
            logOut: "Çıkış Yap"
        },
        "en-US": {
            homePage: "Home Page",
            bestMovies: "Best Movies",
            categories: "Categories",
            adventure: "Adventure",
            scary: "Scary",
            comedy: "Comedy",
            drama: "Drama",
            welcome: "Welcome",
            search: "Search",
            logIn: "Login",
            register: "Register",
            logOut: "Logout"
        }

    }





    return (

        <nav className="navbar navbar-expand-lg bg-primary " >
            <IntlProvider messages={langValues[lang]}>
                <div className="container-fluid ps-5 pe-5 pt-2 pb-2">
                    <h4>Movie App</h4>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" onClick={(event) => { setSearchIndex(""); filtMovies(searchIndex) }} aria-current="page" to="/"><FormattedMessage id='homePage'/></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/best-movies"><FormattedMessage id="bestMovies"/></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                <FormattedMessage id="categories"/>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" name="macera" onClick={(event) => setSelectedCategory(event.target.name)} to="/category-adventure"><FormattedMessage id="adventure"/></Link></li>
                                    <li><Link className="dropdown-item" name="korku" onClick={(event) => setSelectedCategory(event.target.name)} to="/category-scary"><FormattedMessage id="scary"/></Link></li>
                                    <li><Link className="dropdown-item" name="komedi" onClick={(event) => setSelectedCategory(event.target.name)} to="/category-comedy"><FormattedMessage id="comedy"/></Link></li>
                                    <li><Link className="dropdown-item" name="dram" onClick={(event) => setSelectedCategory(event.target.name)} to="/category-drama"><FormattedMessage id="drama"/></Link></li>
                                </ul>
                            </li>
                        </ul>
                        {login === true ?
                            <span className='me-5 p-1 text-center' style={{ color: "goldenrod", fontWeight: "bolder" }}>
                                <FormattedMessage id="welcome"/> <br /> {loginUsername}
                            </span> : null}
                        <form className="d-flex" onSubmit={(event) => event.preventDefault()} role="search">
                            <input className="form-control me-2" type="search" onChange={(event) => setSearchIndex(event.target.value)} placeholder="Arama yap..." aria-label="Search" />
                            <Link to={`/${searchIndex}`} > <button className="btn btn-danger" onClick={() => { filtMovies(searchIndex) }} type="submit"><FormattedMessage id="search"/></button> </Link>
                        </form>
                        {login === false ?
                            <div className='ms-4'>
                                <button className='btn btn-secondary' onClick={() => setLoginModalState(true)}><FormattedMessage id="logIn"/></button>
                                <button className='btn btn-success ms-3' onClick={() => setRegisterModalState(true)}><FormattedMessage id="register"/></button>
                            </div> :
                            <div className='ms-4'>
                                <button className='btn btn-warning' onClick={() => logout()}><FormattedMessage id="logOut"/></button>
                            </div>}
                    </div>

                </div>
            </IntlProvider>
        </nav>





    )
}

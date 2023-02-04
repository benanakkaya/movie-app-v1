
import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'reactstrap';
import { MoviesContext } from '../contexts/Movies';
import { UsersContext } from '../contexts/Users';
import CommentPagination from './CommentPagination';



function CommentSection({ movieID }) {


    const { login, loginUsername, adminMode } = useContext(UsersContext);
    const { movieArray, addComment } = useContext(MoviesContext);
    const [commentState, setCommentState] = useState("");
    const postComment = { author: loginUsername, comment: commentState }
    var myMovie;
    var myComment = [];


    //For pagination

    const commentPerPage = 3 ; //Listelenecek yorum sayısı sayfa başına...
    const [currentPage,setCurrentPage] = useState(1);
    const pagesNumber = Math.ceil((movieArray.filter((mov) => mov.id === movieID)[0].comments.length) / commentPerPage) ; // Kaç sayfa olacağı
    const pageEndComment = commentPerPage*currentPage;
    const pageStartComment = pageEndComment - 3; 
    




    useEffect(() => {
        setCommentState("");

    }, [])


    const commentAdd = () => {
        setCommentState("")
        commentState === "" ? alert("Yorum alanı boş olamaz.") :
            myMovie = movieArray.filter((mov) => mov.id === movieID);
        myComment = myMovie[0].comments;
        myComment.push(postComment);
        addComment(myMovie);
    }

    const commentRemove = (ind) => {
        myMovie = movieArray.filter((mov) => mov.id === movieID);
        myComment = myMovie[0].comments;
        myComment.splice(ind, 1);
        addComment(myMovie);
    }





    return (
        
        <div className='row mt-3 col-md-10 p-3' style={{ backgroundColor: "rgba(0,0,0,0.4)", display: "flex", justifyContent: "center", alignItems: "center", margin: "auto" }}>
           {console.log("mal bunlar"+pageStartComment)}
            {login === true ?
                <>
                    <h3 style={{ color: "goldenrod", marginBottom: "1.6rem" }}>Yorum Ekle:</h3>
                    <textarea id="movie-comment" className='p-2' value={commentState} onChange={(event) => setCommentState(event.target.value)} name="movie-comment" rows="3" cols="40">

                    </textarea>

                    <Button color="success" className='mt-3' onClick={() => commentAdd()}> Yorum Ekle</Button>
                </> : null}
            <div className='comment-area mt-5'>
                <h3 style={{ color: "goldenrod", marginBottom: "1.6rem" }}>Yorumlar</h3>
                <ul style={{ padding: "0rem" }}>
                    {movieArray.filter((mov) => mov.id === movieID).map((com) => (com.comments.slice(pageStartComment,pageEndComment).map((e, ind) => (
                        <li key={ind} className='comment'>
                            {((adminMode === true && login === true) || (loginUsername === e.author)) ?
                                <div style={{ fontSize: "1rem", textAlign: "right", marginBottom: "0.05rem" }}>
                                    <small onClick={() => commentRemove(ind)}>
                                        <span style={{ color: "red", cursor: "pointer" }}>X</span>
                                    </small>
                                </div>
                                : null}
                            <div style={{ fontSize: "0.8rem", textAlign: "right", marginBottom: "0.2rem" }}>
                                <small>
                                    <span style={{ color: "azure" }}>Yorum Yapan:</span> {e.author}
                                </small>
                            </div>
                            {e.comment}
                        </li>
                    ))))}
                </ul>
            </div>
            {(movieArray.filter((mov) => mov.id === movieID)[0].comments.length > 3) ? 
            <CommentPagination
            currentPage = {currentPage}
            pagesNumber = {pagesNumber}
            setCurrentPage = {setCurrentPage}
            /> : null}

        </div>


    )
}



export default CommentSection;
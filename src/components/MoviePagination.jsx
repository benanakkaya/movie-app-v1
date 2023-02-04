import React from 'react'


function MoviePagination({ pageNum, currentPage, setCurrentPage }) {

    const pages = [];

    for (var i = 1; i <= pageNum; i++) {
        pages.push(i);
    }


    return (

            <nav aria-label="..." className='col-md-12 d-flex justify-content-center' style={{ background: "rgb(71, 71, 71)" }}>
                <ul className="pagination">
                {console.log(pageNum)}
                <li className={currentPage === 1 ? "page-item disabled" : "page item"}
                    onClick={() => setCurrentPage((val) => val === 1 ? val : val - 1)}>
                    <a className="page-link" href="/#" tabIndex="-1">Previous</a>
                </li>
                <>
                    {pages.map((page,index) => (
                        <li key={index} className={currentPage=== page ? "page-item active" : "page-item" } onClick={() => setCurrentPage(page)}><a className="page-link" href="/#">{page}</a></li>
                    ))}


                </>
                <li className={currentPage === pageNum ? "page-item disabled" : "page-item"}
                    onClick={() => setCurrentPage((val) => val === pageNum ? pageNum : val + 1)} >
                    <a className="page-link" href="/#">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default MoviePagination;

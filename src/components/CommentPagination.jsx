import React from 'react'

function CommentPagination({ currentPage, pagesNumber, setCurrentPage }) {

    const pages = [];

    for (var i = 1; i <= pagesNumber; i++) {
        pages.push(i);
    }


    return (
        <nav aria-label="..." className='col-md-10 d-flex justify-content-center'>
            <ul className="pagination" style={{ cursor: "pointer" }}>
                <li className={currentPage === 1 ? "page-item disabled" : "page-item"}
                    onClick={() => setCurrentPage((value) => value === 1 ? value : value - 1)}>
                    Geri
                </li>
                {pages.map((page, index) => (
                    <li key={index} className={currentPage === page ? "page-item active" : "page-item"}><a className="page-link"
                        onClick={() => setCurrentPage(page)}>{page}</a></li>
                ))}
                <li className={currentPage === pagesNumber ? "page-item disabled" : "page-item"}
                    onClick={() => setCurrentPage((value) => value === pagesNumber ? value : value + 1)}>
                    İleri
                </li>
            </ul>
        </nav>
    )
}

export default CommentPagination;

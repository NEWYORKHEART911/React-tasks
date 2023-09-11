import React, {useState} from 'react';
import styles from './Pagination.css';

function Pagination() {

    const allItems = Array(100).fill().map((_,i) => ({id: i+1, value: `Item ${i+1}`}));
    //Math.ceil is used to round up
    const pageCount = Math.ceil(allItems.length / 5);

    const [page, setPage] = useState(1);

    const startIndex = (page - 1) * 5;
    const paginatedItems = allItems.slice(startIndex, startIndex+5)

    return(
        <div>
            <div class="pageContainer">
            <p id="itemT4">Item</p>
            {paginatedItems.map((item, index) => 
                <div key={item.id}>
                    <div>{item.value}</div>
                    {index !== paginatedItems.length-1 && <hr />}
                </div>)}
                </div>

            <div class="pageCounter">
            <button class="pbtn" disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
            <div id="pageDisplay">Page {page} of {pageCount}</div>
            <button class="pbtn" disabled={page === pageCount} onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    )

}

export default Pagination;
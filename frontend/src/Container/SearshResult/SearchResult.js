import React from 'react';
import './SearchResult.css';
import {Link} from "react-router-dom"

function SearchResult({
    img,
    location,
    title,
    description,
    price
}) {
    return (
        <div className='searchResult'>
            <img src={img} alt="" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                   
                    <div className='searchResults__price'>
                        <h3>{price}</h3>
                        <button className="btn btn-primary "> <Link to = "/searsh/resultDetailes" className="text-light detailBtn"> Show Detailes</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult

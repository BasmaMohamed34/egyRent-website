import React from 'react';
import './SearchResult.css';
import StarIcon from "@material-ui/icons/Star";
import {Link} from "react-router-dom"

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
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
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>{price}</h2>
                        <button className="button"> <Link to = "/searsh/resultDetailes"> Show Detailes</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult

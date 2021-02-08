import React from 'react'
import './Banner.css'
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();
   
    // 1 pt-2
    // 2 m-5
    return (
        <div className='banner '>
            <div className='banner__info'>
                <h3>Get out and stretch your imagination</h3>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <button className="btn btn-primary" onClick={() => history.push('/search-result')} variant='outlined'>Explore Nearby</button>
            </div>
        </div>
    )
}
export default Banner
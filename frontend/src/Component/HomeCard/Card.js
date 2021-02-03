import React from 'react';
import './Card.css'


export  function Card({ src, title, description, price }) {
    return (
        <div className="col col-md-4 col-lg-3">
            <div className='card'>
                <img src={src} alt="" />
                <div className="card__info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <h5>{price}</h5>
                </div>
            </div>
        </div>
    )
}

export  function Ecard({ src, title, description, price }) {
    return (
        <div className="col col-md-4">
            <div className='card Ecard'>
                <img src={src} alt="" />
                <div className="card__info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <h5>{price}</h5>
                </div>
            </div>
        </div>
    )
}



import { useState } from 'react';


function Card(props) {

    return (

        <div className='col-md-2'>
            <div>
                <img src={props.image} width="90%" />
            </div>

            <div className='p-3'>
                <h6>{props.title}</h6>
                <h6 className='text-muted'>{props.category}</h6>
                <p className='text-muted'>{props.description}</p>
                <p>{props.price}</p>
                <h6>{props.rating}</h6>
                <h6>{props.count}</h6>
            </div>
        </div>

    )
}

export default Card;
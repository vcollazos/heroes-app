import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    // asignamos a la variable imagePaht la imagen
    const imagePath = `/assets/${id}.jpg`;

  return (

    <div className='col animate_animated animate_fadeIn'>
        <div className='card'>
            <div className='row no-gutters'>
                <div className='col-4'>
                    <img src={ imagePath } className="card-img" alt={superhero} />
                </div>

                <div className='col-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{superhero}</h5>
                        <p className='card-text'>{alter_ego}</p>
                        <p className='card-text'>{first_appearance}</p>
                        
                        <Link to={`/hero/${id}`}>
                            Más información...
                        </Link>
                        

                    </div>



                </div>


            </div>
        </div>

    </div>
    
  )
}



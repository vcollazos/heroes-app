import { useMemo } from 'react';
import { useParams, Navigate, useNavigate, usem } from 'react-router-dom';
import { getHeroById} from '../../selectors/getHeroById';



export const HeroScreen = () => {

    const { heroeId } = useParams();
    
    // se utiliza useMemo para memorizar valores y no dispara el evento continuamente
    const hero = useMemo( () => getHeroById(heroeId), [ heroeId]);

    // retrocedemos a la página anterior con useNavigate
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1);
    }
    
    // si no existe el heroe sacamos al usuario de la screen
    if(!hero) {
        return <Navigate to='/' />
    }

    // desestructuramos las propiedades de hero
    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters    
    } = hero;




    const imagePath = `/assets/${id}.jpg`;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ imagePath }
                    alt={ superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8">
                <h3>{ superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b> { alter_ego }</li>
                    <li className="list-group-item"> <b>publisher:</b> { publisher }</li>
                    <li className="list-group-item"> <b>First Appearance:</b> { first_appearance }</li>
                </ul>

                <h5 className="mt-4">Characters</h5>
                <p>{ characters }</p>

                <button
                    className='btn btn-outline-info'
                    onClick= {handleReturn}
                >
                    Regresar
                </button>
            </div>
            
        </div>
    )
}
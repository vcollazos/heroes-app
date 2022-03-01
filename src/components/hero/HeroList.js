// mostrará la lista de los héroes
import { useMemo } from 'react';
import { HeroCard } from "./HeroCard";
import { getHeroByPubliser } from "../../selectors/getHeroByPublisher";


export const HeroList = ({ publisher }) => {

    // se utiliza useMemo para memorizar valores y no dispara el evento continuamente
    const heroes = useMemo( () =>  getHeroByPubliser(publisher), [publisher]);
 

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">       
            {
                    heroes.map( hero => (
                        <HeroCard 
                            key={ hero.id }
                            { ...hero }
                        />                        

                    ))
            }
   
        </div>

    );
}
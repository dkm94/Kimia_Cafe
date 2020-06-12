import React from 'react';
import { Link } from 'react-router-dom';
import SliderEvents from './SliderEvents';
import './evenement.css'
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";


class Evenments extends React.Component{
 /* TEST*/


    render() {
        return(

            <section className="component center center-evenement">
                <div className="component-conteneur center component-event center-evenement">

                <div className="col-text-section">
                     <h1>Évènements</h1>
                </div>

                <SliderEvents />

                <div className="col-text-onglet-10"  >
                    <p><Link to="/Association">Découvrir l'association</Link></p>
                </div>

                </div>
            </section>
        )
    }


}

export default Evenments

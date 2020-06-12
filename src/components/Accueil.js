import React from 'react';
import { withRouter} from 'react-router-dom';
import Header from './Header';
import Actualite from './Actualite';
import '../index';


class Accueil extends React.Component {



    render() {
        return (

            <section className="section-accueil">
                <div className="intro">
                    <Header />
                </div>
                <div className="contenu-accueil">
                    <Actualite />
                </div>
            </section>               

        )
    }

}



export default withRouter(Accueil);
import React from 'react';
import { Link } from 'react-router-dom';
import categoriesProduits from '../epicerie';
import categoriesProduitsBis from '../epicerieBis';
import Vignettes from './Vignettes';
import VignettesBis from './VignettesBis';

class Epicerie extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            categoriesProduits:[],
            categoriesProduitsBis:[]
        }
    }

    componentDidMount() {
        this.setState({
            categoriesProduits,
            categoriesProduitsBis
        })

    }

    render() {
        return(

            <section className="component center center-epicerie">
                <div className="component-conteneur cols-space center component-epicerie">

                {/* Colonne 1 */}
                    <article className="col-img-ep">
                        <img src="img/Silos_epicerie.jpg" alt="epicerie" className="deux-cols-space-img"/>
                    </article>

                {/* Colonnes 2 */}
                    <article className="col-text-ep" id="dims-col-ep" >

                        <div className="col-text-section" id="dims-bloc-titre">
                            <h1>Épicerie</h1>
                        </div>

                        <div className="col-text-pavtext col-text dims-bloc-texte">
                            <h2>des bons produits locaux pour le quotidien</h2>
                                <p>lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Pellentesque euismod ipsum non mi volutpat euismod.lorem ipsum Ut aliquet porta egestas. Pellentesque euismod ipsum non mi volutpat euismod.lorem ipsum Ut aliquet porta egestas.</p>
                        </div>


                        <div className="wrapper col-text dims-wrapper">

                            <div className="cart-content">
                                {
                                    this.state.categoriesProduits

                                        .map((vignette) => (

                                            <Vignettes

                                                key={vignette.id}
                                                vignetteId={vignette.id}
                                                vignetteImg={vignette.img}
                                                vignetteLegend={vignette.legend}

                                            />
                                        ))
                                }

                            </div>


                            <div className="cart-content">

                            {
                                    this.state.categoriesProduitsBis

                                        .map((vignette) => (

                                            <VignettesBis

                                                key={vignette.id}
                                                vignetteBisId={vignette.id}
                                                vignetteBisImg={vignette.img}
                                                vignetteBisLegend={vignette.legend}

                                            />
                                        ))
                                }

                            </div>

                        </div>

                        <div className="col-text-onglet" id="col-text-onglet" >
                            <p><Link to="/Enfants">Découvrir l'épicerie</Link></p>
                        </div>
                    </article>

                </div>
            </section>
        )
    }
}

export default Epicerie

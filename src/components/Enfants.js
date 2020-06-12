import React from 'react';
import { Link } from 'react-router-dom';


class Enfants extends React.Component{
    render() {
        return(
            <section className="component center">
                    
                <article className="component-conteneur cols-space center component-enfants ">  

                <div className="deux-cols-space col-text">

                    <div className="col-text-section" >
                        <h1 id="margin-h2">Les Enfants</h1>
                    </div>

                    <div className="col-text-pavtext col-text">
                        <h2 className="no-margin">Ils méritent le meilleur, nous leur offrons le meilleur</h2>
                            <p className="justify">lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Pellentesque euismod ipsum non mi volutpat euismod.Pellentesque euismod ipsum non mi volutpat euismod. Curabitur mollis, velit eu venenatis semper, mi dolor scelerisque nisi, id interdum risus nulla quis ligula. Phasellus tortor sem, tincidunt id tortor fermentum, tincidunt sagittis turpis. </p>
                    </div>

                    <div className="cols col-text-tableau">
                        <div className="trois-cols">
                            <h2 id="no-mg-top">Aire de jeux</h2>
                                <p className="padding">lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Pellentesque euismod ipsum non mi volutpat euismod.lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Aliquam erat volutpat.</p>
                        </div>
                        <div className="trois-cols">
                            <h2 id="no-mg-top">Ateliers et stages</h2>
                                <p className="add-border-lr padding">lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Pellentesque euismod ipsum non mi volutpat euismod lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Aliquam erat volutpat.</p>
                        </div>
                        <div className="trois-cols">
                            <h2 id="no-mg-top">Anniversaires</h2>
                                <p className="padding">lorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Pellentesque euismod ipsum non mi volutpat euismodlorem ipsum Ut aliquet porta egestas. Aliquam erat volutpat. Aliquam erat volutpat.</p>
                        </div>
                        
                    </div>
                    <div className="col-text-onglet" id="col-text-onglet"><p><Link to="/Evénements">Découvrir les événements</Link></p></div>

                    </div>

                    <div className="deux-cols-space center">
                        <img src="img/enfant.jpg" alt="enfant" className="deux-cols-space-img" />
                    </div>  

                </article>

            </section>
        )
    }
}

export default Enfants
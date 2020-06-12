import React from 'react';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';

class Cantine extends React.Component {



    render() {
        return (

          
            <div className="component center" >
                <div className="component-conteneur cols-space center component-cantine" id="cc-mq"> 

                    <section className="col-1 deux-cols-space col-text height90">
                        
                        <div className="col-text-section" >
                            <h1 className="no-margin">La cantine</h1>
                        </div>

                        <div className="col-text-pavtext col-text col-text-pavtext-cantine" >
                            <h2>Une cuisine saine et responsable</h2>
                                <p> en magasin sont tous formés aux spécificités des produits biologiques afin de  en magasin sont tous formés aux spécificités des produits biologiques afin de  en magasin sont tous formés aux spécificités des produits biologiques afin de  en magasin sont tous formés aux spécificités des produits biologiques afin de  en magasin sont tous formés aux spécificités des produits biologiques afin de </p>
                        </div>

                        <div className="cols col-text-tableau cantine-tableau-mq" id="col-text-tableau" >

                            <article className="deux-cols center col-text cantine-tableau-1" >
                                <p className="no-margin">Produits locaux</p>
                                <p className="no-margin">Produits revalorisés</p>
                                <p className="no-margin">Cuisine faite maison</p>
                            </article>
                
                            <article className="deux-cols center" >
                                <p>Envie de bien manger dans un cadre design ? Au sein du très branché concept-store Merci, La Cantine sert tous les jours un déjeuner sain et équilibré. La carte qui varie au fil des saisons propose des salades et des produits frais  .</p>
                            </article>

                        </div>

                        <div className="col-text-onglet col-text-onglet-10" >
                            <p><Link to="/Epicerie">Découvrir l'épicerie</Link></p>
                        </div>


                    </section>

                    <section className="col-2 deux-cols-space center">
                        <img alt="solidarité" className="deux-cols-space-img" src="img/kimia-cantine.jpg" />              
                    </section>

                </div>
            </div>
        
            
        )
    }
}

export default withRouter(Cantine);
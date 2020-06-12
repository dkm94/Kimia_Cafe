import React from 'react';
import { Link } from 'react-router-dom';

class Association extends React.Component{
    render() {
        return(
            

            <div className="component center" >
                <div className="component-conteneur cols-space center component-associations"> 
          
                    <section className="deux-cols-space center">
                        <img alt="solidarité" className="deux-cols-space-img" src="img/journée-internationale-personnes-âgées.jpg" />              
                    </section>

                    <section className="deux-cols-space col-text height90 col-asso">
                        
                        <article className="col-text-section" >
                            <h1 className="no-margin">L'association</h1>
                        </article>
                        <article className="col-text-pavtext col-text" id="col-text-pavtext-cantine">
                            <h2>Remettre l'humain et la nature au centre de nos intérêts</h2>
                                <p> en magasin sont tous formés aux spécificités des produits biologiques afin de  en magasin sont tous formés aux spécificités des produits biologiques afin de  en magasin sont tous formés aux spécificités des produits biologiques afin de  en magasin sont tous formés aux spécificités des produits biologiques afin de  en magasin sont tous formés aux spécificités des produits biologiques afin de </p>
                        </article>
                        <article className="cols col-text-tableau" id="col-text-tableau" >
                            <div className="deux-cols center col-text" >
                                <p className="no-margin">Produits locaux</p>
                                <p className="no-margin">Produits revalorisés</p>
                                <p className="no-margin">Cuisine faite maison</p>
                            </div>
                            <article className="deux-cols center" >
                                <p>Envie de bien manger dans un cadre design ? Au sein du très branché concept-store Merci, La Cantine sert tous les jours un déjeuner sain et équilibré. La carte qui varie au fil des saisons propose des salades et des produits frais  .</p>
                            </article>
                        </article>
                        <article className="col-text-onglet-10 col-text-onglet">
                            <p><Link to="/Contact">Découvrir l'équipe</Link></p>
                        </article>


                    </section>
                </div>
            </div>
            
        )
    }
}

export default (Association)
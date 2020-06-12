import React from 'react';
import articleNews from '../article';
import Article from './Article';


class Actualite extends React.Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             articleNews:[]
        }
    }
    
    componentDidMount() {
        this.setState({
            articleNews 
        }) 
        
    }

    render() {
        return (
            <section className="section-actu component-full-height center">
                <div className="component-conteneur cols-space col-text center">

                    <div className="col-text-section center">

                        <h1 className="title">Actualités</h1>

                    </div>

                    <div className="colonnes-actu cols col-text-content">
                        {
                            this.state.articleNews
                                
                                .map((article) => (

                            
                                    <Article 

                                        key={article.id}
                                        articleId={article.id}
                                        articleImg={article.img}
                                        articleTitle={article.title}
                                        articleContent={article.content}

                                    />
                                ))
                        }
                    </div>
                </div>
            </section>
                
            
        )
    }
}

export default Actualite



                        /* <article className="newsArticles">
                            <img src={Actualité1} alt="actualité" />
                            <h2 className="newsTitle"> Lancement du Kimia café</h2>
                            <p className="newsContent"> 
                                Après 2 mois de travaux, le Kimia ouvrira officiellement ses portes après une grande soirée de lancement en mars 2020. 
                                Nous avons hâte de vous y rencontrer à cette occasion!
                            </p>
                        </article>
                        <article className="newsArticles">
                            <img src={Actualité2} alt="actualité"/>
                            <h2 className="newsTitle"> Remise des contreparties ulule </h2>
                            <p className="newsContent"> 
                                Venez retirer vos contreparties ou bénéficier gratuitement de vos prestation sélectionnées 
                                lors du financement participatif à tous moment au Kimia café !
                            </p>
                        </article>
                            
                        <article className="newsArticles">
                            <img src={Actualité3} alt="actualité" />
                            <h2 className="newsTitle"> Fabrication de produits ménagers </h2>
                            <p className="newsContent"> 
                                Et  si pour consommer plus sainement en faisant des économies et en gagnant du temps, 
                                vous faisiez vous même vos produits ménagers? Nous vous proposons des astuces simples, rapides et efficaces à tous les coups!
                            </p>
                        </article> */












import React from 'react';
import { Link } from 'react-router-dom';

class Equipe extends React.Component{
    render() {
        return(

            <section className="component center">
                
                <div className="component-conteneur cols-space col-text center component-equipe">

                    <div className="col-text-section center">

                        <h1 className="title margin-top">L'équipe</h1>

                    </div>

                    <div className="cols col-text-content col-equipe center">

                            <div className="trois-cols-space" id="col-team-kimia-2">

                                <img src="img/kimiaTeam1.jpeg" alt=""/> 

                                <div className="">
                                        {/* teamDescription */}
                                    <p>-2
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe magni dolorem perspiciatis necessitatibus dicta alias illum obcaecati ipsum, dolorum deleniti, repudiandae officiis ipsa amet omnis nulla? Explicabo nam quam consequuntur natus quae illum deserunt nulla fugit id libero, tempora excepturi praesentium! Laborum, ea dolorem deserunt neque eligendi voluptatem necessitatibus laudantium.
                                    </p>
                                </div>

                            </div>

                            <div id="col-team-kimia">

                                <img src="img/kimiaTeam1.jpeg" alt=""/> 

                                <div className="" >

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe magni dolorem perspiciatis necessitatibus dicta alias illum obcaecati ipsum, dolorum deleniti, repudiandae officiis ipsa amet omnis nulla? Explicabo nam quam consequuntur natus quae illum deserunt nulla fugit id libero, tempora excepturi praesentium!
                                    </p>
                                </div>

                            </div>

                            <div className="trois-cols-space" id="col-team-kimia-3">

                                <img src="img/kimiaTeam3.jpg" alt=""/> 

                                <div className="">
                                    {/* teamDescription */}
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe magni dolorem perspiciatis necessitatibus dicta alias illum obcaecati ipsum, dolorum deleniti, repudiandae officiis ipsa amet omnis nulla? Explicabo nam quam consequuntur natus quae illum deserunt nulla fugit id libero, tempora excepturi praesentium! Laborum, ea dolorem deserunt neque eligendi voluptatem necessitatibus laudantium.
                                    </p>
                                </div>
                                
                            </div>

                           
                    </div>

                    <div className="col-text-onglet">
                        {/* teamFooter */}

                        <p className="no-margin"><Link to="/Contact">Nous contacter</Link></p>

                    </div>

                </div>

            </section>
        )
    }
}

export default Equipe
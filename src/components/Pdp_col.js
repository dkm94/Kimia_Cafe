import React from 'react';
import { withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Pdpcol extends React.Component {

    render() {

        return(

            <div className="component-pdp">

                    <article className="newsletter trois-cols center col-text" >
                            
                            <div className="width80">
                                <p>Restez informés de notre actualité</p>
        
                                <div className="divinput center">
                                    <div className="divinputun">
                                        <input className="inputmail" type="text" name="email" placeholder="email"></input>
                                    </div>
                                    <div className="divinputdeux">
                                        <button type="submit" name="submit">OK</button>
                                    </div>
                                </div>
                            </div>
                      
                    </article>

                    <article className="devise trois-cols add-border-lr center">
                    <   div className="width80">
                            <p>Cultivons le vivre et le faire ensemble dans le respect de l'autre et de l'environnement.</p>
                        </div>
                    </article>

                    <article className="div-icons trois-cols center col-text">
                        <div className="width80 col-text center">
                            <p>Ne manquez rien de l'envers du décor</p>
                            <div className="icons">
                                <div><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Kimia-caf%C3%A9-592622287462513/"><FontAwesomeIcon icon={faFacebook} /></a></div>
                                <div><a target="_blank" rel="noopener noreferrer" href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a></div>
                                <div><a target="_blank" rel="noopener noreferrer" href="mailto:teamkimiacafe@kimiacafe.fr "><FontAwesomeIcon icon={faEnvelope} /></a></div>
                            </div>
                        </div>
                    </article>

            </div>

        )
    }
}

export default withRouter(Pdpcol);
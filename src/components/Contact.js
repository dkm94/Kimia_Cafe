import React from 'react';

class Contact extends React.Component{

    constructor(props) {
        super(props)
    
        this.state = {
             value: " "
        }

        this.handleChange = this.handleChange.bind(this);
    }

        handleChange(event) {
            this.setState({value: event.target.value});
        }

    
    render() {
        return(
           
        <section className="component-full-height center section-contact">
            
        <section className="component-conteneur col-text center component-contact" >

            <section className="cols cols-kimia-contact">

                <article className="trois-cols col-formulaire"> {/* className="trois-cols" */}

                    <div className="title-contact-kimia">

                        <h1>Contact</h1>

                    </div>

                    <div className="contact-form-kimia"> 
                    
                        <form action="mailto:bonjour@kimiacafe.fr" method="post" encType="text/plain" >

                            <label>Nom :</label>
                            <input type="text" name="Nom" className="nameInput" /> 

                            <label>Prénom :</label>
                            <input type="text" name="Prenom"  className="prenomInput"/> 
                            
                    

                            <label>Email :</label>
                            <input type="email" name="Email"  required  className="emailInput"/> 
                            
                            
                            <label>Téléphone :</label>
                            <input type="text" name="Telephone"  />

                            <label >Votre message </label>

                            <textarea className="messageInput" type="text" name="Message" rows="10" cols="80"
                            value={this.state.value } 
                            onChange={this.handleChange}>

            

                            </textarea>

                            <span className="submit-contact">
                                
                                <span className="submit-border">
                                    <input type="submit" value="C'est parti" className="submit-button"></input>
                                </span>

                            </span>

                        </form>
                    </div>

                </article>

                <article className="trois-cols add-border-lr col-adresse"> {/* className="trois-cols" */}
                    
                    <div className="contact-adresse-title">

                        <h2>Kimia Cafe</h2>

                    </div>

                    <div className="contact-adresse"> 

                        <p id="adresse-1">
                            17, rue  Julien Lacroix
                        </p>

                        <p id="adresse-2">
                            75020 PARIS 
                            <br />
                            Tel : 06.63.43.36.04 
                            <br />
                            bonjour@kimiacafe.fr
                        
                        </p>

                        <p id="adresse-3"> 
                            Accès 
                            <br />
                            Métro ligne 2 (Ménilmontant) 
                            <br />
                            Bus ligne
                        </p> 
                        <div className="adresse-map">
                            <img src="img/kimia-contact.jpg" alt="kimia contact"/>
                        </div>

                    </div>

                </article>

                <article className="trois-cols col-horraires"> {/* className="trois-cols" */}

                    <div className="contact-horaire">
                        <h2>HORAIRES </h2>

                        <p>De 8h à 20h tous les jours </p>

                        <span className="horaire-content-1">Brunch </span>
                        <p> Samedi et dimanche de 11h à 15h </p>

                        <span className="horaire-content-2">Pause déjeuner </span>
                        <p>Tous les jours de 12h à 14h30</p>
                    </div>

                    <div className="contact-recrutement">

                        <h2>RECRUTEMENT </h2>

                        <p className="recrutement-content">
                            Rejoindre l'équipe, faire un stage
                            ou proposer une collaboration :
                        </p>

                        <p className="recrutement-content-2">
                            teamkimiacafe@kimiacafe.fr 
                        </p>


                    </div>

                </article>
            </section>

            

        </section>
    </section>
        )
    }
}

export default Contact
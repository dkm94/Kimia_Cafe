import React from 'react';
import { withRouter} from 'react-router-dom';

class Header extends React.Component {



    render() {
        return (
            <section className="header">

                    <div className="headertrois slide-down">

                        <div className="blocun">
                            <img src="img/headerimg.jpg" alt="image_kimia" />
                        </div>
                        <div className="blocdeux">
                            <p>BIENVENUE CHEZ VOUS</p>
                        </div>
                    
                    </div>

                    <img className="taillelogo" src="img/logo.jpg" alt="logo" />

            </section>
        )
    }

}



export default withRouter(Header);
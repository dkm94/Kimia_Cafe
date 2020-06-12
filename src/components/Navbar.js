import React from 'react';
import classnames from "classnames";
import { Link, withRouter } from 'react-router-dom'; 

class Navabar extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.showMenu = this.showMenu.bind(this)
    
        this.state = {
          
           prevScrollpos: window.pageYOffset,
            visible: true, 
            display: "flex", 
            change : false
        };
      

    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);

    }
    
    handleScroll = () => {
        const { prevScrollpos } = this.state;
      
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        if (currentScrollPos < 550) {

            this.setState({
                prevScrollpos: currentScrollPos,
                visible
              });
            
        } else {

            this.setState({
                prevScrollpos,
                visible : false
              });

        }
    };

    showMenu = () => {

        this.setState({
            display : !this.state.display
        })
        
    }

    handleClick = () => {
        this.props.history.push('/')
    }

    

  
    
    render () {
        
        return(
        
            <section className={classnames("Navbar", {
                "Navbar--hidden": !this.state.visible
            })}>

                <div onClick={this.showMenu } className="burgerMenu">
                    <div className="barMenu">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>

                    <ul style={{display : this.state.display ? "initial": "none" }}>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/Cantine">Cantine</Link></li>
                        <li><Link to="/Epicerie">Epicerie</Link></li>
                        <li><Link to="/Enfants">Enfants</Link></li>
                        <li><Link to="/Association">Association</Link></li>
                        <li><Link to="/Evénements">Evénements</Link></li>
                        <li><Link to="/Equipe">Equipe</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="logomobile">
                    <img src="img/logocoupe.jpg" alt="logo nav" className="logoimg" onClick={this.handleClick} />
                </div>

                <nav className="header-nav">
                    <div className="navbar-brand"><img src="img/logocoupe.jpg" alt="logo nav" onClick={this.handleClick}/> </div>
                        <ul>
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/Cantine">Cantine</Link></li>
                            <li><Link to="/Epicerie">Epicerie</Link></li>
                            <li><Link to="/Enfants">Enfants</Link></li>
                            <li><Link to="/Association">Association</Link></li>
                            <li><Link to="/Evénements">Evénements</Link></li>
                            <li><Link to="/Equipe">Equipe</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                </nav>
            
            </section>
     

        )
    }
}

export default withRouter(Navabar) 




//      // const debounce = (func, wait = 10, immediate = true) => {
        //     let timeOut
        //     return () => {
        //       let context = this,
        //         args = arguments
        //       const later = () => {
        //         timeOut = null
        //         if (!immediate) func.apply(context, args)
        //       }
        //       const callNow = immediate && !timeOut
        //       clearTimeout(timeOut)
        //       timeOut = setTimeout(later, wait)
        //       if (callNow) func.apply(context, args)
        //     }
        //   }
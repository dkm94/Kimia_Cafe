import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Accueil from './components/Accueil';
import Navabar from './components/Navbar';
import Cantine from './components/Cantine';
import Epicerie from './components/Epicerie';
import Enfants from './components/Enfants';
import Association from './components/Association';
import Evenements from './components/Evenements';
import Equipe from './components/Equipe';
import Contact from './components/Contact';
import Footer from './components/Footer'
// import Pdp_col from './components/Pdp_col'


class App extends React.Component {
  render() {
      return (
          <BrowserRouter>
                <div>
                    <Navabar />
                        <Switch>
                            <Route exact path="/" component={Accueil}/>
                            <Route path="/Cantine" component={Cantine}  />
                            <Route path="/Epicerie" component={Epicerie}/>
                            <Route path="/Enfants" component={Enfants}/>
                            <Route path="/Association" component={Association}/>
                            <Route path="/Evénements" component={Evenements}/>
                            <Route path="/Equipe" component={Equipe}/>
                            <Route path="/Contact" component={Contact}/>
                        </Switch>
                    <Footer />
                </div>
          </BrowserRouter>
      );
  }
}

export default App;

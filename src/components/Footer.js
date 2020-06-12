import React, { Component } from 'react';
import Quote from './Quote';
import Instagram from './Instagram';
import Pdpcol from './Pdp_col';

export default class Footer extends Component {

    render() {
        return (
            
            <section className="footer component-full-height center">

                <article className="component-conteneur center col-text" id="dims-footer">
            
                    <Quote />
                    <Instagram />
                    <Pdpcol />

                    <div className="footer-kimia">
                        <p> 2020 © Kimia</p>
                    </div>

                </article>

            </section>
  
        )
    }
}














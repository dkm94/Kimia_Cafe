import React from 'react';

class Vignettes extends React.Component {

    render() {

        const {vignetteId, vignetteImg, vignetteLegend} = this.props

        return (
            <figure id={vignetteId} className="item">

                <img src={`img/${vignetteImg}`} alt="epicerie" className="pic-img-dims"/> 

                    <figcaption className="glocery vignette-row-un">{vignetteLegend}</figcaption>

            </figure>
            
        )
    }
}

export default (Vignettes)
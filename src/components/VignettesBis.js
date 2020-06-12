import React from 'react';

class VignettesBis extends React.Component {

    render() {

        const {vignetteBisId, vignetteBisImg, vignetteBisLegend} = this.props

        return (
            <figure id={vignetteBisId} className="item">

                <img src={`img/${vignetteBisImg}`} alt="epicerie" className="pic-img-dims"/> 

                    <figcaption className="glocery vignette-row-deux">{vignetteBisLegend}</figcaption>

            </figure>
            
        )
    }
}

export default (VignettesBis)
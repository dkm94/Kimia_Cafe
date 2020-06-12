import React from 'react';
import events from '../events'
import Events from './Events'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey" }}
        onClick={onClick}
      />
    );
  }



class SliderEvents extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
             events: []
        }
    }

    componentDidMount() {
        this.setState({
            events
        })

    }





    render() {
        const settings = {

            dots: true,
            infinite: false,
            // centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            cssEase: "linear",
            pauseOnHover: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,

            responsive: [
                   {
                     breakpoint: 768,
                     settings: {
                       // dots: true,
                       arrows: true,
                       infinite: false,
                       slidesToShow: 2,
                       slidesToScroll: 1,
                       swipeToSlide: true,
                     }
                   },
                  {
                     breakpoint: 425,
                     settings: {
                       dots: false,
                       arrows: true,
                       infinite: true,
                       slidesToShow: 1,
                       slidesToScroll: 1,
                       swipeToSlide: true,
                         cssEase: 'linear'
                     }
                   },
                   {
                     breakpoint: 319,
                     settings: 'unslick',
                   }
                 ]
               };

          return (
            <div className="component-conteneur cols-space center conteneur-slider">
            {/*<h1>EVENEMENTS</h1>}
                {/*<article className="container-events">*/}

                            <Slider {...settings} >

                            {  events.map (event =>

                              <Events
                              key={event.id}
                              eventsId ={event.id}
                              eventsTitle={event.title}
                              eventsImg={event.img}
                              eventsContent={event.content}

                              />

                            )}
                            </Slider>

                {/*</article>*/}
                {/*<h1 className="discover-link">Découvrir l'association</h1>*/}
            </div>
          );
        }

    }


export default (SliderEvents)

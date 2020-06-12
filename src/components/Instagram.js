import React from 'react';
// import ArtyParty from '../img/ArtemintArtyParty-4.jpg';
// import ArtyParty2 from '../img/ArtemintArtyParty-2.jpg';
// import ArtyParty3 from '../img/ArtemintArtyParty-2.jpg';
// import Moment from '../img/Moment.jpg';



class Instagram extends React.Component {

            
    render() {

        return (

        <div className="instagram center">

            <article className="instagramContainer">

                <div className="instagramFeed">

                <iframe title="Kimia feed instagram"
                src="//lightwidget.com/widgets/14f45d2f9acf5052b2ae9a9ab7dbdcc4.html" 
                scrolling="no" allowtransparency="true" className="lightwidget-widget" >
                
                </iframe>

                </div>
            </article>

        </div>

        );
    }


}

export default (Instagram);





// constructor(props) {
//     super(props)

//     this.state = {
//         postPicture :[]
         
//     }
// }

// componentWillMount() {
//     let token = "access-token"; 
//     let listPictures = 6;


//     axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + listPictures)
//     .then(res => {
//         console.log(res.data.data[0].postPicture);
//             this.setState({postPicture: res.data.data})
//     })
//     .catch(err => {
//         console.log(err)
//     })


// }


        
// render() {

//     return (

//     <section className="instagram">
//         <div className="instagramContainer">

//             <div className="instagramFeed">

//                 {  this.state.postPicture.map((post) => {
//                     return (
//                         <div className="postInstagram"> 

//                             <img src={post.postPicture.piai8.url} alt="Arty party" />

//                         </div>
//                     )
//                 })

//                 }


//             </div>

//         </div>

//     </section>

//     );
// }


// }


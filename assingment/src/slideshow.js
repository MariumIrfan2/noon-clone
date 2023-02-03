// function Slideshow() {
//     return (
//         <div id="carouselExampleIndicators" className="carousel slide">
//             <div className="carousel-indicators">
//                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//             </div>
//             <div className="carousel-inner">

//                 <div className="carousel-item active">

//                     <img src="https://f.nooncdn.com/mpcms/EN0001/assets/dfcb447a-e41d-485a-9d28-d8fdfd210d54.png" className="d-block w-100" alt="..." />

//                 </div>
//                 <div className="carousel-item">

//                     <img src="..." className="d-block w-100" alt="..." />

//                 </div>
//                 <div className="carousel-item">

//                     <img src="https://f.nooncdn.com/mpcms/EN0001/assets/47d5d396-239a-4ab8-b5e3-ae6765d93a49.png" className="d-block w-100" alt="..." />

//                 </div>
//             </div>
//             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">

//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>

//                 <span className="visually-hidden">Previous</span>

//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//             </button>
//         </div>
//     )
// }
// export default Slideshow;


import Carousel from 'react-bootstrap/Carousel';

function Slideshow(props) {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.src1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.src2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.src3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Slideshow;
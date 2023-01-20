import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResponsiveAppBar from './navbar';
import Nav from './navbar1';
import Slideshow from './slideshow';
import Navigation from './navigation';
import Login from './login';

function App() {
  const [product, setProduct] = useState([
    {
      product: "Iphone 13",
      description: "Product description",
      price: "123AED",
      imgSrc: "https://www.pakmobizone.pk/wp-content/uploads/2021/10/Apple-iphone-13-Midnight-2.png"
    },
    {
      product: "Iphone 13",
      description: "Product description",
      price: "123AED",
      imgSrc: "https://www.pakmobizone.pk/wp-content/uploads/2021/10/Apple-iphone-13-Midnight-2.png"
    },
    {
      product: "Iphone 13",
      description: "Product description",
      price: "123AED",
      imgSrc: "https://www.pakmobizone.pk/wp-content/uploads/2021/10/Apple-iphone-13-Midnight-2.png"
    },
    {
      product: "Iphone 13",
      description: "Product description",
      price: "123AED",
      imgSrc: "https://www.pakmobizone.pk/wp-content/uploads/2021/10/Apple-iphone-13-Midnight-2.png"
    },
    {
      product: "Iphone 13",
      description: "Product description",
      price: "123AED",
      imgSrc: "https://www.pakmobizone.pk/wp-content/uploads/2021/10/Apple-iphone-13-Midnight-2.png"
    },
  ])
  const [categories, setCategories] = useState(["Men", "Women", "Home", "Lifestyle", "Sports", "Beauty"])
  return (
    <div className="App">
      {/* <ResponsiveAppBar sx={{backgroungColor: "white"}} /> */}
      <Nav />

      <div className="row border">
        <div className="col-md-3">
          <h3>{categories.map((x) => {
            return <a style={{paddingLeft:"25px" , paddingRight:"25px"}}>{x}</a>
          })}</h3>
        </div>
      </div>

      <div className='row'>
        <div className='col-md'>
          <img width="100%" src="https://f.nooncdn.com/mpcms/EN0001/assets/35ed38ac-b1f1-4d24-a7c3-a21aafc803c0.png" />
        </div>
      </div>

      <div className='row'>
        <div className='col-md-8'>
          <Slideshow />
        </div>
        <div className='col-md-1'>
          <img style={{paddingLeft:"100px", margin:"none", objectFit:"cover", paddingRight:"0px"}}height="70%" src="https://f.nooncdn.com/mpcms/EN0001/assets/4b795127-3b55-499d-831b-a361e0eae5b0.png" />
        </div>
      </div>

      <div className='row'>
        {product.map((x, i) => {
          return <div className='col-md-3'>
            <img src={x.imgSrc} width="100" />
            <div className='p-3'>
              <h3>{x.product}</h3>
              <p className='text-muted'>{x.description}</p>
              <h4>{x.price}</h4>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;

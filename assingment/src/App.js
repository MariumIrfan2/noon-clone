import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './navbar1';
import Slideshow from './slideshow';
import Card from './card.js'
import NavigationImgs from './components/navigationImgs';
import { Typography, Container, Grid, } from '@mui/material';
import Footer from './components/footer';

function App() {
  const [product, setProduct] = useState([
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGOffu2mlAMkhcMHeY8QLJHJ7iDdMQf_3kGk570is&s',
      title: 'Product title',
      price: '10234 AED'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGOffu2mlAMkhcMHeY8QLJHJ7iDdMQf_3kGk570is&s',
      title: 'Product title',
      price: '10234 AED'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGOffu2mlAMkhcMHeY8QLJHJ7iDdMQf_3kGk570is&s',
      title: 'Product title',
      price: '10234 AED'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGOffu2mlAMkhcMHeY8QLJHJ7iDdMQf_3kGk570is&s',
      title: 'Product title',
      price: '10234 AED'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGOffu2mlAMkhcMHeY8QLJHJ7iDdMQf_3kGk570is&s',
      title: 'Product title',
      price: '10234 AED'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGOffu2mlAMkhcMHeY8QLJHJ7iDdMQf_3kGk570is&s',
      title: 'Product title',
      price: '10234 AED'
    },
  ])
  const [navImgs, setNavImgs] = useState([
    { imgSrc: 'https://f.nooncdn.com/mpcms/EN0001/assets/ad2462d6-46a1-4a41-8e48-1db893c060a8.png' },
    { imgSrc: 'https://f.nooncdn.com/mpcms/EN0002/assets/d1c0647e-fcbf-4f1f-8179-3d8af7248770.png' },
    { imgSrc: 'https://f.nooncdn.com/mpcms/EN0001/assets/7bf21f4b-44b1-45f8-8a4d-48cd282e1c8b.png' },
    { imgSrc: 'https://f.nooncdn.com/mpcms/EN0001/assets/ad2462d6-46a1-4a41-8e48-1db893c060a8.png' },
    { imgSrc: 'https://f.nooncdn.com/mpcms/EN0002/assets/d1c0647e-fcbf-4f1f-8179-3d8af7248770.png' },
    { imgSrc: 'https://f.nooncdn.com/mpcms/EN0001/assets/7bf21f4b-44b1-45f8-8a4d-48cd282e1c8b.png' },
    { imgSrc: 'https://f.nooncdn.com/mpcms/EN0001/assets/ad2462d6-46a1-4a41-8e48-1db893c060a8.png' },
    { imgSrc: 'https://f.nooncdn.com/mpcms/EN0002/assets/d1c0647e-fcbf-4f1f-8179-3d8af7248770.png' },
    { imgSrc: 'https://f.nooncdn.com/mpcms/EN0001/assets/7bf21f4b-44b1-45f8-8a4d-48cd282e1c8b.png' },
    { imgSrc: 'https://f.nooncdn.com/mpcms/EN0001/assets/ad2462d6-46a1-4a41-8e48-1db893c060a8.png' },
  ])
  const [categories, setCategories] = useState(["ELECTRONICS", "MEN", "WOMEN", "HOME", "LIFESTYLE", "BABY AND TOYS", "SPORTS", "SELL ON NOON", "BESTSELLERS",])
  const [discount, setDiscount] = useState([
    { imgSrc: 'https://f.nooncdn.com/mpcms/EN0001/assets/26f2807b-d8a8-4494-869c-2eb4e559287f.png' },
    { imgSrc: 'https://f.nooncdn.com/mpcms/EN0001/assets/4a37271a-8874-4f00-ad4f-c7024963078a.png' },
    { imgSrc: 'https://f.nooncdn.com/mpcms/EN0001/assets/26f2807b-d8a8-4494-869c-2eb4e559287f.png' },
    { imgSrc: 'https://f.nooncdn.com/mpcms/EN0001/assets/4a37271a-8874-4f00-ad4f-c7024963078a.png' },
    { imgSrc: 'https://f.nooncdn.com/mpcms/EN0001/assets/26f2807b-d8a8-4494-869c-2eb4e559287f.png' },
    { imgSrc: 'https://f.nooncdn.com/mpcms/EN0001/assets/4a37271a-8874-4f00-ad4f-c7024963078a.png' }
  ])

  return (
    <div>
      <div style={{ overflowX: 'hidden' }}>
        <header>
          <div className='row'>
            <Nav />
          </div>
          <div className='row'>
            <div className='col-md'>
              {categories.map((x) => {
                return <h5 style={{
                  paddingLeft: "25px",
                  paddingRight: "25px",
                  display: 'inline-block'
                }}>{x}</h5>
              })}
            </div>
          </div>

          <div className='row'>
            <div className='col-md'>
              <img width="100%" src="https://f.nooncdn.com/mpcms/EN0001/assets/35ed38ac-b1f1-4d24-a7c3-a21aafc803c0.png" />
            </div>
          </div>
        </header>

        <main style={{ backgroundColor: 'white' }}>
          <Container maxWidth='xl' disableGutters={false} >
            <div>
              {/* <Grid container>
                <Grid item xs={12}>
                  <img width='100%' src='https://f.nooncdn.com/mpcms/EN0001/assets/8112895c-72ee-4ca0-a12c-fcec64656796.gif' />
                </Grid>
                <Grid item xs={12}>
                  <img width='100%' src='https://f.nooncdn.com/mpcms/EN0002/assets/269cbf8a-04c6-43ef-a00f-78da0b65c8ef.png' />
                </Grid>
              </Grid> */}



              <div className='row'>
                <div className='col-md-8'>
                  <Slideshow
                    src1='https://f.nooncdn.com/mpcms/EN0001/assets/48c051cc-142e-48f6-aae0-5a380b7179c8.png'
                    src2='https://f.nooncdn.com/mpcms/EN0001/assets/79565f5f-03d1-4deb-8130-87d89e79894c.png'
                    src3='https://f.nooncdn.com/mpcms/EN0001/assets/0dfabc82-efb6-4f59-a390-e489b986da0c.jpg' />
                </div>
                <div className='col-md-1'>
                  <img height="70%"
                    src="https://f.nooncdn.com/mpcms/EN0001/assets/c6f2bd47-5eca-4908-b3a5-d377e231622a.png" />
                </div>
                <div className='col-md-1'>
                  <img style={{ paddingLeft: "100px", margin: "none", objectFit: "cover", paddingRight: "0px" }} height="70%"
                    src="https://f.nooncdn.com/mpcms/EN0001/assets/4b795127-3b55-499d-831b-a361e0eae5b0.png" />
                </div>
              </div>

              <div style={{ backgroundColor: 'rgb(255, 241, 219)', margin: '0px', padding: '0px' }}>
                <Grid container>
                  {navImgs.map((x, i) => {
                    return <NavigationImgs key={i} imgSrc={x.imgSrc} width='70%' />
                  })}
                </Grid>
              </div>
            </div>

            {/* more reasons to shop */}
            <div>
              <Grid container spacing={2} p={2}>
                <Grid item justify='left' sm={4}>
                  <img src='https://f.nooncdn.com/mpcms/EN0001/assets/66a5450d-bfd2-4ff3-ba71-434aee94d695.png' />
                  <img width='40%' src='https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png' />
                  <img width='40%' src='https://f.nooncdn.com/mpcms/EN0001/assets/2f75ee19-4d9a-4bc7-9599-f10b30f05469.png' />
                  <img width='40%' src='https://f.nooncdn.com/mpcms/EN0001/assets/2f75ee19-4d9a-4bc7-9599-f10b30f05469.png' />
                  <img width='40%' src='https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png' />
                </Grid>
                <Grid item justify='left' sm={4}>
                  <img src='https://f.nooncdn.com/mpcms/EN0001/assets/66a5450d-bfd2-4ff3-ba71-434aee94d695.png' />
                  <img width='40%' src='https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png' />
                  <img width='40%' src='https://f.nooncdn.com/mpcms/EN0001/assets/2f75ee19-4d9a-4bc7-9599-f10b30f05469.png' />
                  <img width='40%' src='https://f.nooncdn.com/mpcms/EN0001/assets/2f75ee19-4d9a-4bc7-9599-f10b30f05469.png' />
                  <img width='40%' src='https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png' />
                </Grid>
                <Grid item justify='left' sm={4}>
                  <img src='https://f.nooncdn.com/mpcms/EN0001/assets/af1cf1f1-8ce8-415d-87b7-061000aa21a7.png' />
                  <img src='https://f.nooncdn.com/mpcms/EN0001/assets/75222376-70d9-44aa-8f66-e5af9722f0fa.png' />
                  <img src='https://f.nooncdn.com/mpcms/EN0001/assets/d0f2ffc1-4c5f-4253-ab12-b6bbb80662f2.png' />
                </Grid>
              </Grid>
            </div>


            {/* ----------CARDS----- */}
            <div className='row' style={{ backgroundColor: 'rgb(241, 244, 253)' }}>
              <h3>Recomended For You</h3>
              {product.map((x, i) => {
                return <Card image={x.image} title={x.title} price={x.price} />
              })}
            </div>

            {/* DEALS SECTIONS */}
            <div style={{ backgroundColor: 'rgb(255, 241, 219)', marginTop: '3px', padding: '2px' }}>
              <h3><b>DEALS ONLY ON NOON</b></h3>
              <br />
              <Grid container spacing={2}>
                <Grid item p={2} xs={3}>
                  <img width='95%' src='https://f.nooncdn.com/mpcms/EN0001/assets/80726706-0b9d-427a-8131-04ffab6fa7a3.png' />
                </Grid>
                <Grid item p={2} xs={3}>
                  <img width='95%' src='https://f.nooncdn.com/mpcms/EN0001/assets/18e6dbd1-8920-40c3-a1ea-a1c206d2847e.png' />
                </Grid>
                <Grid item p={2} xs={3}>
                  <img width='95%' src='https://f.nooncdn.com/mpcms/EN0001/assets/80726706-0b9d-427a-8131-04ffab6fa7a3.png' />
                </Grid>
                <Grid item p={2} xs={3}>
                  <img width='95%' src='https://f.nooncdn.com/mpcms/EN0001/assets/18e6dbd1-8920-40c3-a1ea-a1c206d2847e.png' />
                </Grid>
              </Grid>
            </div>

            <Grid container spacing={1}>
              <Grid item p={2}>
                <Slideshow src1='https://f.nooncdn.com/mpcms/EN0001/assets/8429c515-26fc-4661-a8a8-7453682483b9.png'
                  src2='https://f.nooncdn.com/mpcms/EN0001/assets/ac73d559-9560-4d40-9e0a-61670d1814a3.png'
                  src3='https://f.nooncdn.com/mpcms/EN0001/assets/8429c515-26fc-4661-a8a8-7453682483b9.png' />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item p={2}>
                <img src='https://f.nooncdn.com/mpcms/EN0001/assets/ec03d76e-eabb-4623-a6cc-0e455abf491f.gif' />
              </Grid>
            </Grid>
            {/* <Grid container spacing={2} >
              <Grid item p={2}>
                <img src='https://f.nooncdn.com/mpcms/EN0001/assets/7f9ef85c-e278-440f-9dda-a2873a872a5e.jpg' />
              </Grid>
            </Grid> */}

            {/* ----------CARDS----- */}
            <div className='row' style={{ backgroundColor: 'rgb(241, 244, 253)' }}>
              <h3>Trending deals in electronics</h3>
              {product.map((x, i) => {
                return <Card image={x.image} title={x.title} price={x.price} />
              })}
            </div>
            <br />

            <Grid container spacing={2}>
              <Grid item p={2}>
                <img src='https://f.nooncdn.com/mpcms/EN0001/assets/ec03d76e-eabb-4623-a6cc-0e455abf491f.gif' />
              </Grid>
            </Grid>
            {/* DIScount SEction */}

            <div style={{ backgroundColor: ' rgb(221, 221, 221)', padding: '20px' }}>
              <Grid container>
                <img width='100%' src='https://f.nooncdn.com/mpcms/EN0001/assets/95237a25-2aba-4c00-9ed2-ae17c06b6d95.png' />
                {discount.map((x, i) => {
                  return <NavigationImgs key={i} imgSrc={x.imgSrc} width='95%' />
                })}
              </Grid>
            </div>

            <div className='row'>
              <h2>MOBILE AND ACCESSORIES</h2>
              <Grid container spacing={2}>
                <Grid item p={2} xs={2}>
                  <img src='https://f.nooncdn.com/mpcms/EN0001/assets/dc317c7b-7401-485a-aefc-0509ebfbebab.png' />
                </Grid>
                <Grid item p={2} xs={2}>
                  <img src='https://f.nooncdn.com/mpcms/EN0001/assets/676517dc-6c08-4f8d-be8c-12d4b5af3384.png' />
                </Grid>
                <Grid item p={2} xs={2}>
                  <img src='https://f.nooncdn.com/mpcms/EN0001/assets/dc317c7b-7401-485a-aefc-0509ebfbebab.png' />
                </Grid>
                <Grid item p={2} xs={2}>
                  <img src='https://f.nooncdn.com/mpcms/EN0001/assets/676517dc-6c08-4f8d-be8c-12d4b5af3384.png' />
                </Grid>
                <Grid item p={2} xs={2}>
                  <img src='https://f.nooncdn.com/mpcms/EN0001/assets/dc317c7b-7401-485a-aefc-0509ebfbebab.png' />
                </Grid>
                <Grid item p={2} xs={2}>
                  <img src='https://f.nooncdn.com/mpcms/EN0001/assets/676517dc-6c08-4f8d-be8c-12d4b5af3384.png' />
                </Grid>
              </Grid>
            </div>
            <div className='row'>
              <h2>ELECTRONICS</h2>
              <Grid container spacing={2}>
                <Grid item p={2} xs={2}>
                  <img src='https://f.nooncdn.com/mpcms/EN0001/assets/dc317c7b-7401-485a-aefc-0509ebfbebab.png' />
                </Grid>
                <Grid item p={2} xs={2}>
                  <img src='https://f.nooncdn.com/mpcms/EN0001/assets/676517dc-6c08-4f8d-be8c-12d4b5af3384.png' />
                </Grid>
                <Grid item p={2} xs={2}>
                  <img src='https://f.nooncdn.com/mpcms/EN0001/assets/dc317c7b-7401-485a-aefc-0509ebfbebab.png' />
                </Grid>
                <Grid item p={2} xs={2}>
                  <img src='https://f.nooncdn.com/mpcms/EN0001/assets/676517dc-6c08-4f8d-be8c-12d4b5af3384.png' />
                </Grid>
                <Grid item p={2} xs={2}>
                  <img src='https://f.nooncdn.com/mpcms/EN0001/assets/dc317c7b-7401-485a-aefc-0509ebfbebab.png' />
                </Grid>
                <Grid item p={2} xs={2}>
                  <img src='https://f.nooncdn.com/mpcms/EN0001/assets/676517dc-6c08-4f8d-be8c-12d4b5af3384.png' />
                </Grid>
              </Grid>
            </div>

          </Container>
        </main>

        <Footer />

      </div>

    </div>
  );
}

export default App;

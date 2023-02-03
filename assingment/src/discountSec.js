import NavigationImgs from "./navigationImgs"

function Discount(props){
    return (<>
    <div style={{ backgroundColor: ' rgb(221, 221, 221)' }}>
            <Grid container>
              <img width='100%' src='https://f.nooncdn.com/mpcms/EN0001/assets/95237a25-2aba-4c00-9ed2-ae17c06b6d95.png' />
              {discount.map((x, i) => {
                return <NavigationImgs key={i} imgSrc={x.imgSrc} width='70%' />
              })}
            </Grid>
          </div>
    </>)
}

export default Discount;
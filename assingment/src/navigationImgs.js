import { Grid } from '@mui/material';

function NavigationImgs(props) {
    return (
                // <Grid item pb={props.paddingBottom} p={props.padding}>
                //     <img width={props.width} src={props.imgSrc} />
                // </Grid>
                <div className='col-xs-2 p-0 m-0' >
                    <img width={props.width} src={props.imgSrc} />
                </div>
    )
}
export default NavigationImgs;
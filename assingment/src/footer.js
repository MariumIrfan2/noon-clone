import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography, Container, Grid, } from '@mui/material';

function Footer() {
    return (
        <footer>
            <div style={{ padding: '20px', marginTop: '3px' }}>
                <Grid container spacing={4}>
                    <Grid item xs={2}>
                        <Typography variant='h6'>ELECTRONICS</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>ELECTRONICS</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>BABY & TOYS</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Watches</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>TOP BRANDS</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Beauty</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>BABY & TOYS</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>ELECTRONICS</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Mobile</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                        <Typography variant='subtitle2'>Laptops</Typography>
                    </Grid>
                </Grid>
                <Grid container justify='rigth'>
                    <Grid item>
                        <InstagramIcon color='secondary' />
                        <FacebookIcon />
                        <TwitterIcon />
                        <LinkedInIcon />
                    </Grid>
                </Grid>
            </div>


        </footer>
    )
}

export default Footer;
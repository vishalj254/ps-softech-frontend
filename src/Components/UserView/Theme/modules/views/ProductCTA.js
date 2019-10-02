import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {getData} from '../../../../FetchServices'
import {MenuItem} from '@material-ui/core';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: 0,
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.warning.main,
    padding: theme.spacing(8, 3),
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
  },
  imagesWrapper: {
    position: 'relative',
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
    background: 'url(/static/onepirate/productCTAImageDots.png)',
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
  },

menu: {
width: 200,
},
});

function ProductCTA(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  const [getlist,setlist]=React.useState([])
  const[technologyId,setTechnologyId]=React.useState('')


	const readAllRecords=async()=>{
		var list=await getData('technology/displayall')
		setlist(list)
	}

	useEffect(()=>{
		readAllRecords()
    },[])

    const handleChange=(event)=>{
        setTechnologyId(event.target.value)
    }

  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form onSubmit={handleSubmit} className={classes.cardContent}>
              <Typography variant="h3" component="h3" gutterBottom>
                Receive Batch <br/>Notification
              </Typography>
              <Typography variant="h5">
                Please Fill Out
              </Typography>

              <TextField
  							id="outlined-select-currency"
  							select
  							 //label="Technology"
  							className={(classes.textField)}
  							value={technologyId}
  							onChange={(event)=>handleChange(event)}
  							SelectProps={{
  							MenuProps: {
  								className: classes.menu,
  							},
  							}}
  							margin="normal"
  							variant="outlined"
  							fullWidth
                required
                noBorder
                placeholder="Course"
  						>
                <MenuItem key="" value="" fullWidth>
  								Select
  							</MenuItem>

  							{getlist.map(item => (
  							<MenuItem key={item.technologyid} value={item.technologyid} required fullWidth>
  								{item.technologyname}
  							</MenuItem>
  							))}
  						</TextField>




              <TextField noBorder className={classes.textField} placeholder="Your Contact No." onChange={(e)=>console.log(e.target.value)} required/>
              <Button type="submit" color="primary" variant="contained" onClick={()=>technologyId?null:alert('Please Select Course')} className={classes.button}>
                Keep me updated
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <div className={classes.imageDots} />
            <img
              src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750&q=80"
              alt="call to action"
              className={classes.image}
            />
            {/* <Map
            className={classes.image}
          google={props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        /> */}
          </Hidden>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        onClose={handleClose}
        message="We will send you our best offers, once a week."
      />
    </Container>
  );
}

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA);

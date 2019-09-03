import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import {getData} from '../../../../FetchServices'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

// const LANGUAGES = [
//   {
//     code: 'en-US',
//     name: 'English',
//   },
//   {
//     code: 'fr-FR',
//     name: 'Français',
//   },
// ];

export default function AppFooter(props) {
  const classes = useStyles();
  const [LANGUAGES,setLANGUAGES]=React.useState([])

  const readAllTechnology=async()=>{
    let list = await getData('technology/displayall')
    setLANGUAGES(list)
  }

  React.useEffect(()=>{
    readAllTechnology()
  },[])

  const handleClick=(technologyid)=>{
    props.setViews(technologyid,'0')
  }

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a href="https://facebook.com/" className={classes.icon}>
                  <img src="https://material-ui.com/static/themes/onepirate/appFooterFacebook.png" alt="Facebook" />
                </a>
                <a href="https://twitter.com/NumericInfoSystem" className={classes.icon}>
                  <img src="https://material-ui.com/static/themes/onepirate/appFooterTwitter.png" alt="Twitter" />
                </a>
              </Grid>
              <Grid item>© PS Softech</Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link onClick={()=>handleClick('TERMS')}>Terms</Link>
              </li>
              <li className={classes.listItem}>
                <Link onClick={()=>handleClick('PRIVACY')}>Privacy</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Technology
            </Typography>
            {/* <TextField
              select
              SelectProps={{
                native: true,
              }}
              className={classes.language}
            >
              {LANGUAGES.map(language => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField> */}
            <Typography>
            {LANGUAGES.map(language => (
                // <option value={language.technologyid} key={language.technologyid}>
                  <div><Link onClick={()=>handleClick(language.technologyname)} rel="nofollow" title={language.technologyname}>{language.technologyname}</Link></div>
                // {/* </option> */}
              ))}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {'Icons made by '}
              <Link href="https://www.freepik.com" rel="nofollow" title="Freepik">
                Freepik
              </Link>
              {' from '}
              <Link href="https://www.flaticon.com" rel="nofollow" title="Flaticon">
                www.flaticon.com
              </Link>
              {' is licensed by '}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
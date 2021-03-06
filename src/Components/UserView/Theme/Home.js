import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';
import AppAppBar from './modules/views/AppAppBar';
import Placements from './modules/views/Placements';
import Testimonials from './modules/views/Testimonials'
import DisplayProgram from './DisplayPrograms';
import SignIn from './SignIn'
import SignUp from './SignUp'
import Java from './modules/views/Java';
import Python from './modules/views/Python';
import Node from './modules/views/Node'
import C from './modules/views/C'
import Cpp from './modules/views/Cpp'
import CRT from './modules/views/CRT'
import Terms from './Terms'
import Privacy from './Privacy'
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Header from '../../AdminView/Header'

const useStyles = makeStyles(theme => ({
  mainroot:{
    overflow: 'hidden',
        flexGrow: 1,
  }
}));
const drawerWidth = 256;

function Index() {

  const classes = useStyles();

  const setViews=(Views,id)=>{
    if(Views=='PROGRAM'){
    setView(<DisplayProgram technologyid={id}/>)
    }
    else if(Views=='APPBAR'){
      setView(<div><ProductHero /><ProductValues /><ProductCategories setViews={setViews}/><Placements/><ProductHowItWorks /><ProductCTA /><ProductSmokingHero /></div>)
    }
    else if(Views=='SIGNIN'){
      setView(<SignIn setViews={setViews}/>)
    }
    else if(Views=='SIGNUP'){
      setView(<SignUp setViews={setViews}/>)
    }
    else if(Views=='Java'){
      setView(<Java/>)
    }
    else if(Views=='Python'){
      setView(<Python/>)
    }
    else if(Views=='React & Node Js'){
      setView(<Node/>)
    }
    else if(Views=='C'){
      setView(<C/>)
    }
    else if(Views=='C++'){
      setView(<Cpp/>)
    }
    else if(Views=='Blockchain'){
      setView(<CRT/>)
    }
    else if(Views=='TERMS'){
      setView(<Terms/>)
    }
    else if(Views=='PRIVACY'){
      setView(<Privacy/>)
    }
  }
  const [view,setView]=React.useState(<div><ProductHero /><ProductValues /><ProductCategories setViews={setViews}/><Placements/><ProductCTA /><ProductSmokingHero /></div>)
  // <Testimonials/>
  const [state,setState] = React.useState({
    mobileOpen: false,
  });
  const handleDrawerToggle = () => {
    setState({ mobileOpen: !state.mobileOpen });
  };
  return (<div className={classes.mainroot}>
    <React.Fragment>
      <AppAppBar setViews={setViews}/>
    {/*<nav className={classes.drawer}>
      <Hidden smUp implementation="js">
        <AppAppBar
          // PaperProps={{ style: { width: drawerWidth } }}
          variant="temporary"
          open={state.mobileOpen}
          onClose={handleDrawerToggle}
          setViews={setViews}
        />
      </Hidden>
      <Hidden xsDown implementation="css">
        <AppAppBar PaperProps={{ style: { width: drawerWidth } }}  setViews={setViews}/>/>
        {/*PaperProps={{ style: { width: drawerWidth } }} */}
      {/*</Hidden>
    </nav>
    <Header onDrawerToggle={handleDrawerToggle} /> */}
      {view}
      <AppFooter setViews={setViews}/>
    </React.Fragment>
    </div>
  );
}

export default withRoot(Index);

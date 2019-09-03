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
import Terms from './Terms'
import Privacy from './Privacy'

function Index() {
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
    else if(Views=='Java Core'){
      setView(<Java/>)
    }
    else if(Views=='Python'){
      setView(<Python/>)
    }
    else if(Views=='React & Node Js'){
      setView(<Node/>)
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
  return (
    <React.Fragment>
      <AppAppBar setViews={setViews}/>
      {view}
      <AppFooter setViews={setViews}/>
    </React.Fragment>
  );
}

export default withRoot(Index);
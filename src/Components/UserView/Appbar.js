// import React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
// import Slide from '@material-ui/core/Slide';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { makeStyles } from '@material-ui/core/styles';
// // import {purple} from '@material-ui/core/colors/purple'
// import clsx from 'clsx'


// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   app: {
//     position: 'relative',
//     marginRight: 'auto',
//     marginLeft: 'auto',
//     maxWidth: '100%',
//     width: '1000px',
//     padding: '10px 60px',
//     lineHeight: '1.4',
//   },
//   app1: {
//     width: '1144px',
//     fontSize: '15px',
//   }
// }));

// // function HideOnScroll(props) {
// //   const { children, window } = props;
// //   // Note that you normally won't need to set the window ref as useScrollTrigger
// //   // will default to window.
// //   // This is only being set here because the demo is in an iframe.
// //   const trigger = useScrollTrigger({ target: window ? window() : undefined });

// //   return (
// //     <Slide appear={false} direction="down" in={!trigger}>
// //       {children}
// //     </Slide>
// //   );
// // }

// // HideOnScroll.propTypes = {
// //   children: PropTypes.element.isRequired,
// //   /**
// //    * Injected by the documentation to work in an iframe.
// //    * You won't need it on your project.
// //    */
// //   window: PropTypes.func,
// // };
// function ElevationScroll(props) {
//     const { children, window } = props;
//     // Note that you normally won't need to set the window ref as useScrollTrigger
//     // will default to window.
//     // This is only being set here because the demo is in an iframe.
//     const trigger = useScrollTrigger({
//       disableHysteresis: true,
//       threshold: 0,
//       target: window ? window() : undefined,
//     });
  
//     return React.cloneElement(children, {
//       elevation: trigger ? 4 : 0,
//     });
//   }
  
//   ElevationScroll.propTypes = {
//     children: PropTypes.element.isRequired,
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
//   };

// export default function HideAppBar(props) {
//     const classes = useStyles();

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <ElevationScroll {...props} >
//         <AppBar className={clsx(classes.app,classes.app1)}>
//           <Toolbar>
//             {/* <Typography variant="h6">Scroll to Elevate App Bar</Typography> */}
//             <marquee><img src="https://www.seedinfotech.com/wp-content/uploads/completed_25th.png" width="600 "/></marquee>
//           </Toolbar>
//         </AppBar>
//       </ElevationScroll>
      
//       <Toolbar />
//       <AppBar position="static" color='purple'>
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            
//           </IconButton>
//           <Typography variant="h6" color='textPrimary'>
//             Photos
//           </Typography>
          
//         </Toolbar>
//         <MenuIcon/>
//       </AppBar>
//       <Container>
//         <Box my={2}>
//           {[...new Array(120)]
//             .map(
//               () => `Cras mattis consectetur purus sit amet fermentum.
// Cras justo odio, dapibus ac facilisis in, egestas eget quam.
// Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
// Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
//             )
//             .join('\n')}
//         </Box>
//       </Container>
//     </React.Fragment>
//   );
// }


import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    app: {
      position: 'relative',
      marginRight: 'auto',
      marginLeft: 'auto',
      maxWidth: '100%',
      width: '100%',
      padding: '1% 10%',
      lineHeight: '0.5%',
    },
    app1: {
      width: '1144px',
      fontSize: '15px',
    }
  }));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      
        <AppBar className={classes.app}>
          <Toolbar>
            {/* <Typography variant="h6">Scroll to Hide App Bar</Typography> */}
            <marquee><img src="https://www.seedinfotech.com/wp-content/uploads/completed_25th.png" width="600 "/></marquee>
          </Toolbar>
        </AppBar>
      
      <HideOnScroll {...props}>
      <AppBar position="static">
         <Toolbar>
           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            
           </IconButton>
           <Typography variant="h6" color='textPrimary'>
             Photos
           </Typography>
          
         </Toolbar>
         <MenuIcon/>
       </AppBar>
       </HideOnScroll>
      <Toolbar />
      <Container>
        <Box my={2}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
    </React.Fragment>
  );
}

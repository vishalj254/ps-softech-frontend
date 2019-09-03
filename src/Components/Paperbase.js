import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Navigator from './Navigator';
// import Content from './Content';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';

let theme = createMuiTheme({
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    ...theme.mixins,
    toolbar: {
      minHeight: 48,
    },
  },
};

const drawerWidth = 256;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  mainContent: {
    flex: 1,
    padding: '48px 36px 0',
    background: '#eaeff1',
  },
}))

// class Paperbase extends React.Component {
//   state = {
//     mobileOpen: false,
//   };

//   handleDrawerToggle = () => {
//     this.setState(state => ({ mobileOpen: !state.mobileOpen }));
//   };

//   render() {
//     const { classes } = this.props;

//     return (
//       <ThemeProvider theme={theme}>
//         <div className={classes.root}>
//           <CssBaseline />
//           <nav className={classes.drawer}>
//             <Hidden smUp implementation="js">
//               <Navigator
//                 PaperProps={{ style: { width: drawerWidth } }}
//                 variant="temporary"
//                 open={this.state.mobileOpen}
//                 onClose={this.handleDrawerToggle}
//               />
//             </Hidden>
//             <Hidden xsDown implementation="css">
//               <Navigator PaperProps={{ style: { width: drawerWidth } }} />
//             </Hidden>
//           </nav>
//           <div className={classes.appContent}>
//             <Header onDrawerToggle={this.handleDrawerToggle} />
//             <main className={classes.mainContent}>
//               {/* <Content /> */}
//             </main>
//           </div>
//         </div>
//       </ThemeProvider>
//     );
//   }
// }

// Paperbase.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Paperbase);



function Paperbase (props) {
  const classes = useStyles();
  const[view,setView]=React.useState('')
  const [state,setState] = React.useState({
    mobileOpen: false,
  });

  React.useEffect(()=>{
    if(!localStorage.getItem('ADMIN')){
      props.history.replace({pathname:'/AdminLogin'})
    }
  },[])

  const changeView=(View)=>{
    if(View=='Logout'){
      localStorage.removeItem('ADMIN');
      props.history.replace({pathname:'/AdminLogin'})
    }
    setView(View)
    handleDrawerToggle()
  }

  const handleDrawerToggle = () => {
    setState({ mobileOpen: !state.mobileOpen });
  };

 
    return (
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <nav className={classes.drawer}>
            <Hidden smUp implementation="js">
              <Navigator
                // PaperProps={{ style: { width: drawerWidth } }}
                variant="temporary"
                open={state.mobileOpen}
                onClose={handleDrawerToggle}
                changeView={changeView}
              />
            </Hidden>
            <Hidden xsDown implementation="css">
              <Navigator PaperProps={{ style: { width: drawerWidth } }} changeView={changeView}  />
              {/*PaperProps={{ style: { width: drawerWidth } }} */}
            </Hidden>
          </nav>
          <div className={classes.appContent}>
            <Header onDrawerToggle={handleDrawerToggle} />
            <main className={classes.mainContent}>
              {/* <Content /> */}
              {view}
            </main>
          </div>
        </div>
      </ThemeProvider>
    );
  }

Paperbase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Paperbase);
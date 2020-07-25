import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router,HashRouter, Route, Redirect } from "react-router-dom";

import MainCategory from "./AddNewRecord";
import DisplayAllMainCategory from "./DisplayAll";
import EditDelete from "./EditDelete";
import Disp from "./DisplayPageWise"
import AddNewRecord from './AddNewRecord';
import DisplayPageWise from './DisplayPageWise';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class HomeMainStyle extends React.Component {
  state = {
    value: 0,
    view:<AddNewRecord/>
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
        <HashRouter>
        <NoSsr>
        <div className={classes.root}>
         
          <AppBar position="static">
            <Tabs fullWidth value={value} onChange={this.handleChange}>
              <LinkTab label="Add Main Category" onClick={()=>this.setState({view:<AddNewRecord/>})} />
              <LinkTab label="Display All" onClick={()=>this.setState({view:<DisplayPageWise/>})} />
              <LinkTab label="Search" href="page3" />
            </Tabs>
          </AppBar>
          {this.state.view}
          {/* {value === 0 && <TabContainer><Redirect to='/AddRecordMain'/></TabContainer>}
          {value === 1 && <TabContainer><Redirect to='/DisplayAllMain' /></TabContainer>}
          {value === 2 && <TabContainer></TabContainer>}
      
          <Route path="/AddRecordMain" component={MainCategory}/>
    <Route path="/DisplayAllMain" component={Disp} history={this.props.history}/>*/}
          <Route path="/EditDeleteMain" component={EditDelete} history={this.props.history}/>
  
 

 </div>
      </NoSsr>
      </HashRouter>
    );
  }
}

HomeMainStyle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeMainStyle);
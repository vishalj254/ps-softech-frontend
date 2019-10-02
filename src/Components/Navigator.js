import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
// import PermMediaOutlinedIcon yyfrom '@material-ui/icons/PhotoSizeSelectActual';
// import PublicIcon from '@material-ui/icons/Public';
// import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
// import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
// import TimerIcon from '@material-ui/icons/Timer';
// import SettingsIcon from '@material-ui/icons/Settings';
// import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import UploadProgram from './UploadProgram2'
// import Content from './Content'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Technology from './Technology'
import DisplayTechnology from './DisplayTechnology'
import MajorMinor from './MajorMinor'
import DisplayMajorMinor from './DisplayMajorMinor'
import EmployeeProfile from './EmployeeProfile'
// import ReactQuill from './ReactQuill';
import DisplayEmployeeProfile from './DisplayEmployeeProfile'
import DisplayUploadProgram from './DisplayUploadProgram';
import PlacedStudent from './PlacedStudent';
// import AdminRouter from './AdminRouter'
import DisplayPlacedStudent from './DisplayPlacedStudent';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    margin: -5,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    fontSize: 'inherit',
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function Navigator(props) {
  const { classes, ...other } = props;

  const handleClick=(View)=>{
      props.changeView(View)
  }


  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          PS Softech
        </ListItem>
        {/* <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            Project Overview
          </ListItemText>
        </ListItem> */}

          <React.Fragment className={clsx(classes.item && classes.itemActiveItem)}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                Dashboard
              </ListItemText>
            </ListItem>


        <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Expansion Panel 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{display:'flex',flexWrap:'wrap'}}>

            <ListItem
                button
                className={clsx(classes.item && classes.itemActiveItem)}
                onClick={(event)=>handleClick(<Technology/>)}
              >
                <ListItemIcon className={classes.itemIcon}><CloudUploadIcon/></ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  Technology
                </ListItemText>
              </ListItem>

              <ListItem
                button
                className={clsx(classes.item && classes.itemActiveItem)}
                onClick={(event)=>handleClick(<DisplayTechnology/>)}
              >
                <ListItemIcon className={classes.itemIcon}><PeopleIcon/></ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  Display Technology
                </ListItemText>
              </ListItem>



              <ListItem
                button
                className={clsx(classes.item && classes.itemActiveItem)}
                onClick={(event)=>handleClick(<UploadProgram/>)}
              >
                <ListItemIcon className={classes.itemIcon}><CloudUploadIcon/></ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  Upload Program
                </ListItemText>
              </ListItem>

              <ListItem
                button
                className={clsx(classes.item && classes.itemActiveItem)}
                onClick={(event)=>handleClick(<DisplayUploadProgram/>)}
              >
                <ListItemIcon className={classes.itemIcon}><PeopleIcon/></ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  Display Program
                </ListItemText>
              </ListItem>


              <ListItem
                button
                className={clsx(classes.item && classes.itemActiveItem)}
                onClick={(event)=>handleClick(<MajorMinor/>)}
              >
                <ListItemIcon className={classes.itemIcon}><CloudUploadIcon/></ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  Major Minor
                </ListItemText>
              </ListItem>

              <ListItem
                button
                className={clsx(classes.item && classes.itemActiveItem)}
                onClick={(event)=>handleClick(<DisplayMajorMinor/>)}
              >
                <ListItemIcon className={classes.itemIcon}><PeopleIcon/></ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  Display Major Minor
                </ListItemText>
              </ListItem>

              <ListItem
                button
                className={clsx(classes.item && classes.itemActiveItem)}
                onClick={(event)=>handleClick(<PlacedStudent/>)}
              >
                <ListItemIcon className={classes.itemIcon}><CloudUploadIcon/></ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  Add Placed Student
                </ListItemText>
              </ListItem>

              <ListItem
                button
                className={clsx(classes.item && classes.itemActiveItem)}
                onClick={(event)=>handleClick(<DisplayPlacedStudent/>)}
              >
                <ListItemIcon className={classes.itemIcon}><PeopleIcon/></ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  Display Placed Student
                </ListItemText>
              </ListItem>


              <ListItem
                button
                className={clsx(classes.item && classes.itemActiveItem)}
                onClick={(event)=>handleClick(<EmployeeProfile/>)}
              >
                <ListItemIcon className={classes.itemIcon}><CloudUploadIcon/></ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  Employee Profile
                </ListItemText>
              </ListItem>

              <ListItem
                button
                className={clsx(classes.item && classes.itemActiveItem)}
                onClick={(event)=>handleClick(<DisplayEmployeeProfile/>)}
              >
                <ListItemIcon className={classes.itemIcon}><PeopleIcon/></ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  Display Employee Profile
                </ListItemText>
              </ListItem>


              </ExpansionPanelDetails>
            </ExpansionPanel>

              <ListItem
                button
                className={clsx(classes.item && classes.itemActiveItem)}
                onClick={(event)=>handleClick('Logout')}
              >
                <ListItemIcon className={classes.itemIcon}><ExitToAppIcon/></ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  Logout
                </ListItemText>
              </ListItem>

            <Divider className={classes.divider} />
          </React.Fragment>

      </List>
    </Drawer>
  );


}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);

import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Container, Grid, Typography, Avatar } from '@material-ui/core';
import clsx from 'clsx'
import {makeStyles} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {postDataAndImage} from './FetchServices'
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
// import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';


const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
  };

const useStyles = makeStyles(theme => ({
    paper:{padding:'30px',marginTop:'10px'},
    textfield:{
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
    rightIcon: {
        marginLeft: 'theme.spacing(1)',
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
}));

const useStyles1 = makeStyles(theme => ({
    success: {
      backgroundColor: green[600],
    },
    error: {
      backgroundColor: theme.palette.error.dark,
    },
    info: {
      backgroundColor: theme.palette.primary.main,
    },
    warning: {
      backgroundColor: amber[700],
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1),
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    },
  }));

function Category(props) {
    const classes=useStyles();
    const[technologyName,setTechnologyName]=React.useState('')
    const[technologyDescription,setTechnologyDescription]=React.useState('')
    const[Logo,setLogo]=React.useState({icon:'',file:''})
    const[message,setMessage]=React.useState('')

    const addNewRecord=async()=>{
        let formData=new FormData();
        formData.append('technologyName',technologyName)
        formData.append('technologyDescription',technologyDescription)
        formData.append('Logo',Logo.file)
        const config={headers:{'content-type':'multipart/form-data'}}
        const result=await postDataAndImage('technology/addnewrecord',formData,config)

        function MySnackbarContentWrapper(props) {
            const classes = useStyles1();
            const { className, message, onClose, variant, ...other } = props;
            const Icon = variantIcon[variant];

            return (<div>
              <SnackbarContent
                className={clsx(classes[variant], className)}
                aria-describedby="client-snackbar"
                message={
                  <span id="client-snackbar" className={classes.message}>
                    <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
                  </span>
                }
                action={[
                  <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <CloseIcon className={classes.icon} />
                  </IconButton>,
                ]}
                {...other}
              /></div>
            );
          }

        if(result)
        {

         setTechnologyName('')
         setTechnologyDescription('')
         setLogo({icon:''})
        //  setMessage('Record sUBMITTED')
        setMessage(
        <div>
        <MySnackbarContentWrapper
        variant="success"
        className={classes.margin}
        message="This is a success message!"
        />
        </div>)
        }
        else{
            setMessage(<div>
            <MySnackbarContentWrapper
                variant="error"
                className={classes.margin}
                message="This is an error message!"
            />
            </div>)
        }
    }

    const Clear=()=>{
        setTechnologyName('')
         setTechnologyDescription('')
         setLogo({icon:''})
    }
    return(
        <Container maxWidth="xs">
            <Paper className={classes.paper}>
            <Typography>
              Technology
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                 <TextField
                    id="outlined-dense"
                    label="Technology Name"
                    className={clsx(classes.textfield,classes.dense)}
                    margin="dense"
                    value={technologyName}
                    variant="outlined"
                    onChange={(event)=>setTechnologyName(event.target.value)}
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                 <TextField
                    id="outlined-dense"
                    label="Technology Description"
                    className={clsx(classes.textfield,classes.dense)}
                    margin="dense"
                    value={technologyDescription}
                    variant="outlined"
                    onChange={(event)=>setTechnologyDescription(event.target.value)}
                    fullWidth
                    />

                </Grid>

                <Grid item xs={12} sm={6}>
                 <input
                 accept="image/*"
                 className={classes.input}
                 id="contained-button-file"
                 multiple
                      type="file"
                    onChange={(event)=>setLogo({icon:URL.createObjectURL(event.target.files[0]),file:event.target.files[0]})}
                    fullWidth
                    />

                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span" className={classes.button} fullWidth>
                        Upload
                        <CloudUploadIcon className={classes.rightIcon}/>
                    </Button>
                </label>
                </Grid>
                <Grid item xs={12} sm={6}>
               <Avatar alt="Image" src={Logo.icon} className={classes.bigAvatar} />
                </Grid>
                <Grid item xs={12} sm={6}>
                <Button variant="contained" color="primary" onClick={addNewRecord} className={classes.button} fullWidth>
                    Submit
                </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Button variant="contained" color="primary"  onClick={Clear} className={classes.button} fullWidth>
                    Clear
                </Button>
                </Grid>
            </Grid>

            </Paper>
            <Typography>
               {message}
               </Typography>
        </Container>


    )
}
export default Category;

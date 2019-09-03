import React from  'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper' ;
import {postDataAndImage} from './FetchServices';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
    paper:{padding:'30px',marginTop:'40px'},
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    grid: {
      // width: '60%',
      margin: theme.spacing(1),
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
        marginLeft: theme.spacing(1),
      },
      bigAvatar: {
        margin: 0,
        width: 60,
        height: 60,
      },
    
    
  }));
function  EmployeeProfile(props){
    const classes = useStyles();
    const [Name,setName]=React.useState('')
    const [Mobile,setMobile]=React.useState('')
    const [Address,setAddress]=React.useState('')
    //const [Birthday,setBirthday]=React.useState('')
    const [Email,setEmail]=React.useState('')
    const [Website,setWebsite]=React.useState('')
    const [Personal,setPersonal]=React.useState('')
    const [Designation,setDesignation]=React.useState('')
    const [Detail,setDetail]=React.useState('')
    const [JoiningYear,setJoiningYear]=React.useState('')
    const [Education,setEducation]=React.useState('')
    const [EducationDetail,setEducartionDetail]=React.useState('')
    const [EducationDuration,setEducationDuration]=React.useState('')
    const [Skills,setSkills]=React.useState('')
    const [Fblink,setFblink]=React.useState('')
    const [Twitter,setTwitter]=React.useState('')
    const [Google,setGoogle]=React.useState('')
    const [Linkedin,setLinkedin]=React.useState('')
    const [Photo,setPhoto]=React.useState({icon:'',file:''})
    const [type,setType]=React.useState('')
    const [status,setStatus]=React.useState('')
    const [message,setMessage]=React.useState('');
    // var date=new Date()
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    function handleDateChange(date) {
      alert(date)
      var d=new Date(date)
      var dd=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()
      alert(dd)
      setSelectedDate(dd);
    }

    const addNewRecord=async()=>{
      let formData=new FormData()
      formData.append('Name',Name)
      formData.append('Mobile',Mobile)
      formData.append('Address',Address)
      formData.append('Birthday',selectedDate)
      formData.append('Email',Email)
      formData.append('website',Website)
      formData.append('Personal',Personal)
      formData.append('Designation',Designation)
      formData.append('Detail',Detail)
      formData.append('JoiningYear',JoiningYear)
      formData.append('Education',Education)
      formData.append('EducationDetail',EducationDetail)
      formData.append('EducationDuration',EducationDuration)
      formData.append('Skills',Skills)
      formData.append('Fblink',Fblink)
      formData.append('Twitter',Twitter)
      formData.append('Google',Google)
      formData.append('Linkedin',Linkedin)
      formData.append('Photo',Photo.file)
      formData.append('type',type)
      formData.append('status',status)
      const config={headers:{'content-type':'multipart/form-data'}}
       var result =await postDataAndImage('EmployeeProfile/addNewRecord',formData,config)
       if(result)
        {
          alert("Record Submitted....")
          setName('')
          setMobile('')
          setAddress('')
          setSelectedDate(new Date())
          // setBirthday(new Date())
          setDesignation('')
          setDetail('')
      
          setEducartionDetail('')
          setEducation('')
          setEducationDuration('')
          setEmail('')
          setFblink('')
          setGoogle('')
          setJoiningYear('')
          setLinkedin('')
          setWebsite('')
          setPersonal('')
          setSkills('')
          setTwitter('')
          setGoogle('')
          setLinkedin('')
          setType('')
          setStatus('')
          setPhoto('')
          setMessage("Record sumitted....")
      //     
      }
       else
        { 
            alert("record not submitted")
            setMessage("Failed to sumitted....")
        }
    }

    const clear=()=>{
      setName('')
          setMobile('')
          setAddress('')
          //setBirthday('')
          setDesignation('')
          setDetail('')
      
          setEducartionDetail('')
          setEducation('')
          setEducationDuration('')
          setEmail('')
          setFblink('')
          setGoogle('')
          setJoiningYear('')
          setLinkedin('')
          setWebsite('')
          setPersonal('')
          setSkills('')
          setTwitter('')
          setGoogle('')
          setLinkedin('')
          setType('')
          setStatus('')
    }

return(<Container maxWidth='xl'>
   <Paper className={classes.paper}>
      <center><Typography>
      EMPLOYEE PROFILE
      </Typography></center>  
<Grid container spacing={2}>
 <Grid item xs={12} sm={6}>
 <TextField
        id="outlined-dense"
        label="Name"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={Name}
        variant="outlined"
        onChange={(event)=>setName(event.target.value)}
        fullWidth
      />
 </Grid>
 <Grid item xs={12} sm={6}>
 <TextField
        id="outlined-dense"
        label="Description"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={Mobile}
        variant="outlined"
        onChange={(event)=>setMobile(event.target.value)}
        fullWidth
      />
 </Grid>
 <Grid item xs={12}>
 <TextField
        id="outlined-dense-multiline"
        label="Address"
        value={Address}
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        onChange={(event)=>setAddress(event.target.value)}
        multiline
        fullWidth
        rowsMax="4"
      />
      </Grid>
      <Grid item xs={12} sm={6}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} fullWidth>
      <Grid container className={classes.grid} justify="space-around">
        <KeyboardDatePicker
          margin="dense"
          id="moutlined-dense"
          label="Birthday"
          value={selectedDate}
          //onChange={(event)=>setBirthday(event.target.value)}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          variant="outlined"
          fullWidth
        />
      </Grid>
    </MuiPickersUtilsProvider>
 </Grid>  
 <Grid item xs={12} sm={6}>
 <TextField
        id="outlined-email-input"
        label="Email"
        className={clsx(classes.textField, classes.dense)}
        type="email"
        name="email"
        value={Email}
        autoComplete="email"
        margin="dense"
        fullWidth
        onChange={(event)=>setEmail(event.target.value)}
        variant="outlined"
      /> 
      </Grid>  
      <Grid item xs={12} sm={6}>
      <TextField
        id="outlined-dense"
        label="Website"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={Website}
        variant="outlined"
        onChange={(event)=>setWebsite(event.target.value)}
        fullWidth
      />
        
      </Grid> 
      <Grid item xs={12} sm={6}>
      <TextField
        id="outlined-dense"
        label="Personal"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={Personal}
        variant="outlined"
        onChange={(event)=>setPersonal(event.target.value)}
        fullWidth
      />
        
      </Grid>
      <Grid item xs={12} sm={4}>
      <TextField
        id="outlined-dense"
        label="Designation"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={Designation}
        variant="outlined"
        onChange={(event)=>setDesignation(event.target.value)}
        fullWidth
      />
        
      </Grid> 
      <Grid item xs={12} sm={4}>
      <TextField
        id="outlined-dense"
        label="Detail"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={Detail}
        variant="outlined"
        onChange={(event)=>setDetail(event.target.value)}
        fullWidth
      />
        
      </Grid>    
      <Grid item xs={12} sm={4}>
      <TextField
        id="outlined-dense"
        label="Joinig Year"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={JoiningYear}
        variant="outlined"
        onChange={(event)=>setJoiningYear(event.target.value)}
        fullWidth
      />
        
      </Grid> 
      <Grid item xs={12} sm={6}>
      <TextField
        id="outlined-dense"
        label="Education"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={Education}
        variant="outlined"
        onChange={(event)=>setEducation(event.target.value)}
        fullWidth
      />
        
      </Grid> 
      <Grid item xs={12} sm={6}>
      <TextField
        id="outlined-dense"
        label="Education Details"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={EducationDetail}
        variant="outlined"
        onChange={(event)=>setEducartionDetail(event.target.value)}
        fullWidth
      />
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField
        id="outlined-dense"
        label="Education Description"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={EducationDuration}
        variant="outlined"
        onChange={(event)=>setEducationDuration(event.target.value)}
        fullWidth
      />
      </Grid> 
      <Grid item xs={12} sm={6}>
      <TextField
        id="outlined-dense"
        label="Skills"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={Skills}
        variant="outlined"
        onChange={(event)=>setSkills(event.target.value)}
        fullWidth
      />
      </Grid> 
      <Grid item xs={12} sm={6}>
      <TextField
        id="outlined-dense"
        label="Facebook Links"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={Fblink}
        variant="outlined"
        onChange={(event)=>setFblink(event.target.value)}
        fullWidth
      />
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField
        id="outlined-dense"
        label="Twitter"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={Twitter}
        variant="outlined"
        onChange={(event)=>setTwitter(event.target.value)}
        fullWidth
      />
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField
        id="outlined-dense"
        label="Google"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={Google}
        variant="outlined"
        onChange={(event)=>setGoogle(event.target.value)}
        fullWidth
      />
      </Grid> 
      <Grid item xs={12} sm={6}>
      <TextField
        id="outlined-dense"
        label="Linkedin"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={Linkedin}
        variant="outlined"
        onChange={(event)=>setLinkedin(event.target.value)}
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
        onChange={(event)=>setPhoto({icon:URL.createObjectURL(event.target.files[0]),file:event.target.files[0]})}
        fullWidth
/>
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button} fullWidth>
          Upload
          <CloudUploadIcon className={classes.rightIcon} />
        </Button>
      </label>
 </Grid> 
 <Grid item xs={12} sm={6}>
 <Avatar alt="Image" src={Photo.icon} className={classes.bigAvatar} />
 </Grid>   

 <Grid item xs={12} sm={6}>
      <TextField
        id="outlined-dense"
        label="Type"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={type}
        variant="outlined"
        onChange={(event)=>setType(event.target.value)}
        fullWidth
      />
      </Grid> 
      <Grid item xs={12} sm={6}>
      <TextField
        id="outlined-dense"
        label="Status"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={status}
        variant="outlined"
        onChange={(event)=>setStatus(event.target.value)}
        fullWidth
      />
      </Grid> 

 <Grid item xs={12} sm={6}>
 <Button variant="contained" onClick={addNewRecord} color="primary" className={classes.button} fullWidth>
        Submit
  </Button>
 </Grid>    
 <Grid item xs={12} sm={6}>
 <Button variant="contained" onClick={clear} color="primary" className={classes.button} fullWidth>
        Clear
  </Button>
 </Grid> 
</Grid>
</Paper>
<Typography>
  {message}
</Typography>
</Container>)
}
export default EmployeeProfile;
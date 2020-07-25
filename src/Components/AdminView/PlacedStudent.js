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
import {postDataAndImage} from '../FetchServices';
import YearPicker from "react-year-picker";

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
function  Placement(props){
    const classes = useStyles();
    const [name,setName]=React.useState({firstname:'',lastname:''})
    const [college,setCollege]=React.useState('')
    const [branch,setBranch]=React.useState('')
    const [company,setCompany]=React.useState('')
    const [spackage,setPackage]=React.useState('')
    const [comment,setComment]=React.useState('')
    const [year,setYear]=React.useState('')
    const [photo,setPhoto]=React.useState({icon:'',file:''})
    const [message,setMessage]=React.useState('');


    const addNewRecord=async()=>{
      let formData=new FormData()
      alert(name.firstname)
      formData.append('Name',name.firstname+" "+name.lastname)
      formData.append('College',college)
      formData.append('Branch',branch)
      formData.append('Company',company)
      formData.append('Package',spackage)
      formData.append('Comment',comment)
      formData.append('Year',year)
      formData.append('Photo',photo.file)
      const config={headers:{'content-type':'multipart/form-data'}}
       var result =await postDataAndImage('placedstudent/addNewRecord',formData,config)
       if(result)
        {
          alert("Record Submitted....")
          setName({firstname:'',lastname:''})
          setCollege('')
          setBranch('')
          setPackage('')
          setCompany('')
          setComment('')
          setYear('')
          setPhoto('') 
      }
       else
        { 
            alert("record not submitted")
        }
    }

    const clear=()=>{
        setName({firstname:'',lastname:''})
          setCollege('')
          setBranch('')
          setPackage('')
          setCompany('')
          setComment('')
          setYear('')
          setPhoto('')
    }

    const handleChange=(Year)=> {
    setYear(Year)
  }

return(<Container maxWidth='xl'>
   <Paper className={classes.paper}>
      <center><Typography>
      Placed Student
      </Typography></center>  
<Grid container spacing={2}>
 <Grid item xs={12} sm={6}>
 <TextField
        id="outlined-dense"
        label="First Name"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={name.firstname}
        variant="outlined"
        onChange={(event)=>setName({firstname:event.target.value})}
        fullWidth
      />
 </Grid>
 <Grid item xs={12} sm={6}>
 <TextField
        id="outlined-dense"
        label="Last Name"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={name.lastname}
        variant="outlined"
        onChange={(event)=>setName({firstname:name.firstname,lastname:event.target.value})}
        fullWidth
      />
 </Grid>
 <Grid item xs={12}>
 <TextField
        id="outlined-dense-multiline"
        label="College"
        value={college}
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        onChange={(event)=>setCollege(event.target.value)}
        fullWidth
        rowsMax="4"
      />
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField
        id="outlined-dense-multiline"
        label="Branch"
        value={branch}
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        onChange={(event)=>setBranch(event.target.value)}
        fullWidth
        rowsMax="4"
      />
    </Grid>  

    <Grid item xs={12} sm={6}>
      <TextField
        id="outlined-dense"
        label="Package"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={spackage}
        variant="outlined"
        onChange={(event)=>setPackage(event.target.value)}
        fullWidth
      />
      </Grid>
 <Grid item xs={12}>
 <TextField
        id="outlined-dense-multiline"
        label="Company"
        value={company}
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        onChange={(event)=>setCompany(event.target.value)}
        fullWidth
        rowsMax="4"
      />
      </Grid>  
      
        
      <Grid item xs={12} sm={6}>
      <TextField
        id="outlined-dense"
        label="Comment"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={comment}
        variant="outlined"
        onChange={(event)=>setComment(event.target.value)}
        multiline
        fullWidth
      />
        
      </Grid> 
      <Grid item xs={12} sm={6}>
      <YearPicker
        id="outlined-dense"
        label="Year"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        onChange={handleChange} 
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
 <Avatar alt="Image" src={photo.icon} className={classes.bigAvatar} />
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
export default Placement;
import React, { useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Container, Grid, Typography,MenuItem } from '@material-ui/core';
import clsx from 'clsx'
import {makeStyles} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {postDataAndImage,getData} from './FetchServices'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';



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
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
}));
function AddProgram(props) {
    const classes=useStyles();
    const[technologyId,setTechnologyId]=React.useState('')
    const[content,setContent]=React.useState('')
    const[remark,setRemark]=React.useState('')
    const[fileName,setFileName]=React.useState('')
    const[projectType,setProjectType]=React.useState('')
    
    
    const[message,setMessage]=React.useState('')
    const addNewRecord=async()=>{
        
        let formData=new FormData();
        formData.append('technologyId',technologyId)
        formData.append('content',content)
        formData.append('remark',remark)
        formData.append('fileName',fileName)
        formData.append('projectType',projectType)
       
        const config={headers:{'content-type':'multipart/form-data'}}
        const result=await postDataAndImage('program/addnewrecord',formData,config)
        if(result)
        {
            setTechnologyId('')
            setContent('')
            setRemark('')
            setFileName('')
          setProjectType('')

         setMessage('Record sUBMITTED')
        }
        else{
            setMessage("Record not Submitted")

        }
    }
    const Clear=()=>{
        setTechnologyId('')
            setContent('')
            setRemark('')
            setFileName('')
          setProjectType('')
    }
    const [getlist,setlist]=React.useState([])
   const readAllRecords=async()=>{
       var list=await getData('technology/displayall')

      setlist(list)
      
    }
   

    useEffect(()=>{
        readAllRecords()
    },[])
    return(
        <Container maxWidth="xs">
            <Paper className={classes.paper}>
<Typography>
Program
    
</Typography>

            <Grid container spacing={2}>
            <Grid item xs={12}>
                 <TextField
                        id="outlined-dense"
                        select
                        label="Technology"
                        className={clsx(classes.textfield)}
                        value={technologyId}
                        margin="dense"
                        onChange={(event)=>setTechnologyId(event.target.value)}
                        SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        }, 
                        }}
                        variant="outlined"
                        fullWidth
                        >
                            <MenuItem key="" value="" fullWidth>
								Select
							</MenuItem>
                        {  getlist.map(option => (
                        <MenuItem key={option.technologyid} value={option.technologyid}  fullWidth>
                            {option.technologyname}
                        </MenuItem>
                        ))}
                   </TextField> 
                   
                 </Grid> 
            
                
                <Grid item xs={12}>
                 <TextField
                    id="outlined-dense"
                    label="Content"
                    className={clsx(classes.textfield,classes.dense)}
                    margin="dense"
                    value={content}
                    variant="outlined"
                    onChange={(event)=>setContent(event.target.value)}
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                 <TextField
                    id="outlined-dense"
                    label="Remark"
                    className={clsx(classes.textfield)}
                    margin="dense"
                    value={remark}
                    variant="outlined"
                    onChange={(event)=>setRemark(event.target.value)}
                    fullWidth
                    />
                </Grid>
               
                <Grid item xs={12}>
          
                
      <FormControl variant="filled" className={classes.formControl} fullWidth>
        <InputLabel htmlFor="filled-age-simple">Project Type</InputLabel>
        <Select
          value={projectType}
          onChange={(event)=>setProjectType(event.target.value)}
          input={<FilledInput name="age" id="filled-age-simple" />}
          fullWidth
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value='Major'>Major Project</MenuItem>
          <MenuItem value='Minor'>Minor Project</MenuItem>
        </Select>
      </FormControl>
                </Grid>
               
               
              
                
                <Grid item xs={12} >
                 <input 
                 accept="file/*"
                 className={classes.input}
                 id="contained-button-file"
                 multiple
                  type="file"
                    onChange={(event)=>setFileName(event.target.files[0])}
                    fullWidth
                    />
                
                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span" className={classes.button} fullwidth>
                        Upload
                        <CloudUploadIcon className={classes.rightIcon}/>
                    </Button>
                </label>
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
export default AddProgram;
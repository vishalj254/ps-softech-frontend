import React,{useEffect} from  'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper, Button, TextField, Grid } from '@material-ui/core'; 
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {Avatar} from '@material-ui/core';
import {postDataAndImage,getData} from '../FetchServices'
import {MenuItem} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    paper:{padding:'30px',marginTop:'10px'},
    textField: {
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
        marginLeft: theme.spacing(1),
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
	},     
	menu: {
		width: 200,
	}, 
  }));

export default function UploadProgram1(props){
    const classes = useStyles();
    const[technologyId,setTechnologyId]=React.useState('')
	const[programName,setProgramName]=React.useState('')
	const[programDescription,setProgramDescription]=React.useState('')
	const[programIcon,setProgramIcon]=React.useState({icon:'',file:''})
	const[message,setMessage]=React.useState('')

	const addNewRecord=async()=>{
        await alert('hello')
		// let formData=new FormData();
		// formData.append('categoryId',categoryId)
		// formData.append('subCategoryName',subCategoryName)
		// formData.append('subCategoryDescription',subCategoryDescription)
		// formData.append('subCategoryIcon',subCategoryIcon.file)
		// const config={headers:{'content-type':'multipart/form-data'}};
		// const result=await postDataAndImage('subcategory/addNewRecord',formData,config);
		// if(result){
		// 	setMessage('Record Submitted...')
		// }
		// else{
		// 	setMessage('Fail to Submit Record...')
		// }
    }
    
    const clear=()=>{
        setTechnologyId('')
        setProgramName('')
        setProgramDescription('')
    }

	const [getlist,setlist]=React.useState([])


	const readAllRecords=async()=>{
		var list=await getData('technology/displayall')
		setlist(list)
	}

	useEffect(()=>{
		readAllRecords()
    },[])

    const handleChange=(event)=>{
        setTechnologyId(event.target.value)
        Change(event.target.value)
    }
    
    const Change=(event)=>{
        if(technologyId!=''){
        return(
            <Grid container>
                <Grid item xs={12}>
						<TextField
							id="outlined-dense"
							label="Program Name"
							className={clsx(classes.textField, classes.dense)}
							margin="dense"
                            variant="outlined"
                            value={programName}
							onChange={(event)=>setProgramName(event.target.value)}
							fullWidth
						/>
					</Grid>   
					<Grid item xs={12}>
						<TextField
							id="outlined-dense"
							label="Program Description"
							className={clsx(classes.textField, classes.dense)}
							margin="dense"
                            variant="outlined"
                            value={programDescription}
							onChange={(event)=>setProgramDescription(event.target.value)}
							fullWidth
						/>
					</Grid>   

                    {/* <Grid item xs={12} sm={6}> */}
                    <Grid item xs={12}>
						<input
							accept="image/*"
							className={classes.input}
							id="contained-button-file"
							multiple
							type="file"
							onChange={(event)=>setProgramIcon({icon:URL.createObjectURL(event.target.files[0]),file:event.target.files[0]})}
						/>
						<label htmlFor="contained-button-file">
							<Button variant="contained" component="span" className={classes.button} fullWidth>
							Upload
							<CloudUploadIcon className={classes.rightIcon} />
							</Button>
						</label>
					</Grid>   
					{/* <Grid item xs={12} sm={6}>
						<Avatar alt="Image" src={subCategoryIcon.icon} className={classes.bigAvatar} />
					</Grid>					 */}
					<Grid item xs={12} sm={6}>
                        <Button variant="contained" onClick={addNewRecord} color="primary" className={classes.button} fullWidth>
                        {/* <Button variant="contained" color="primary" className={classes.button} fullWidth> */}
							Submit
						</Button>
					</Grid>
                    <Grid item xs={12} sm={6}>
                        <Button variant="contained" onClick={clear} color="primary" className={classes.button} fullWidth>
                        {/* <Button variant="contained" color="primary" className={classes.button} fullWidth> */}
							Clear
						</Button>
					</Grid>
            </Grid>
        )}
        else{
            return(
                <div>

                </div>
            )
        }
    }



    return(
        <Container maxWidth='xs'>
            <Paper className={classes.paper}>
				<Typography>
				Sub-Category Registration
				</Typography>
				<Grid container>  
					 <Grid item xs={12}>
						<TextField
							id="outlined-select-currency"
							select
							label="Technology"
							className={(classes.textField)}
							value={technologyId}
							onChange={(event)=>handleChange(event)}
							SelectProps={{
							MenuProps: {
								className: classes.menu,
							},
							}}
							margin="normal"
							variant="outlined"
							fullWidth
						>
                            <MenuItem key="" value="" fullWidth>
								Select
							</MenuItem>
                            {/* <MenuItem key={1} value={1} fullWidth>
								React and Node Js
							</MenuItem>
                            <MenuItem key={2} value={2} fullWidth>
								Python
							</MenuItem> */}

							{getlist.map(item => (
							<MenuItem key={item.technologyid} value={item.technologyid} fullWidth>
								{item.technologyname}
							</MenuItem>
							))}
						</TextField>

					</Grid>
					    <Grid>
                            {Change()}
                        </Grid>
				</Grid>
			</Paper>
			<Typography>
				{message}
			</Typography>
        </Container>)
} 
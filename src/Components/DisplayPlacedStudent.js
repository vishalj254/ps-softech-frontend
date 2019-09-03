import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { BaseUrl, getData, postData ,postDataAndImage} from './FetchServices';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
 
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

export default function TechDisplay() {
  const classes=useStyles();
  // var d=new Date()
  const [stateCol, setStateCol] = React.useState({
    columns: [
      { title: 'Student Id', field: 'placedstudentid' ,editable:'never' },
      { title: 'Student Name', field: 'name' },
      { title: 'College', field: 'college' },
      { title: 'Branch', field: 'branch' },
      { title: 'Company Name', field: 'companyname' },
      { title: 'Package', field: 'package' },
      { title: 'Comment', field: 'comment' },
      { title: 'Year', field: 'year' },
      { 
        title: 'Picture',
        field: 'photo',
        render:rowData=> <img src={`${BaseUrl}/images/${rowData.photo}`} style={{width: 30, borderRadius: '50%'}}/>,
        editComponent:props=>(
        <Grid>
          <input 
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={(event)=>setFile(event.target.files[0])}
          fullWidth
        /> 
         <label htmlFor="contained-button-file">
             <Button variant="contained" component="span" className={classes.button}>
                 Upload
                 <CloudUploadIcon className={classes.rightIcon}/>
             </Button>
         </label></Grid>)
      },
    ]
})
      const [state,setState]=React.useState({
          data: []});
     const [getFile,setFile]=React.useState('')
          const handleAdd=async(newData)=>{
            let formData=new FormData();
         
          formData.append('Name',newData.name)
      	  formData.append('College',newData.college)
      	  formData.append('Branch',newData.branch)
          formData.append('Company',newData.companyname)
          formData.append('Package',newData.package)
          formData.append('Comment',newData.comment)
          formData.append('Year',newData.year)
          formData.append('Photo',getFile)
      const config={headers:{'content-type':'multipart/form-data'}}
       var result =await postDataAndImage('placedstudent/addNewRecord',formData,config)
            if(result){
              alert("true")
            }
            else{
              alert("false")
            }
            readAllRecords()
          }
  
      const readAllRecords=async() =>{
       var list=await getData('placedstudent/displayall')
       setState({data:list})
      }
      useEffect(()=>{
          readAllRecords()
      },[])
      const handleEdit=async(newData)=>{
      if(getFile==='')
      {let body={'PlacedStudentId':newData.placedstudentid,
        'Name':newData.name,
        'College':newData.college,
        'Branch':newData.branch,
        'Company':newData.companyname,
        'Package':newData.package,
        'Comment':newData.comment,
        'Year':newData.year
      	
        }
        let result=await postData('placedstudent/edit',body)
      
        if(result.RESULT){
        alert("true")
        }
        else{
          alert("false")
        }

      }
      else{
        let formData=new FormData();
        formData.append('PlacedStudentId',newData.placedstudentid)
       
        formData.append('Photo',getFile)
        const config={headers:{'content-type':'multipart/form-data'}}
        const result=await postDataAndImage('placedstudent/editIcon',formData,config)
        if(result)
        {
          alert('record updted')
          setFile('')
        }
        else{
          alert('record not updated')
        }
        
      }
      readAllRecords()
    }
    
      const handleDelete=async(oldData)=>{
let body={'employeeId':oldData.placedstudentid}
       let result= await postData('placedstudent/deleteRecord',body)
        if(result){
          alert("true")
        }
        else{
          alert("false")
        }
        readAllRecords()
      }

      const View=()=>{
  return (
    <MaterialTable
      title="Placed Student"
      columns={stateCol.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
              handleAdd(newData)
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
              handleEdit(newData)
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
              handleDelete(oldData)
            }, 600);
          }),
      }}
    />
  )
}
return(
    <div>{View()}</div>
);
      }
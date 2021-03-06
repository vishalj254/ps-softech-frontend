import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { BaseUrl, getData, postData ,postDataAndImage} from '../FetchServices';
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
  var d=new Date()
  const [stateCol, setStateCol] = React.useState({
    columns: [
      { title: 'Technology Id', field: 'technologyid' ,editable:'never' },
      { title: 'Technology Name', field: 'technologyname' },
      { title: 'AddedOn', field: 'addedon' },
      { title: 'AddedBy', field: 'addedby' },
      { title: 'Description', field: 'technologydescription' },
      
      { 
        title: 'logo',
        field: 'logo',
        render:rowData=> <img src={`${BaseUrl}/images/${rowData.logo}`} style={{width: 30, borderRadius: '50%'}}/>,
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
         
          formData.append('technologyName',newData.technologyname)
          formData.append('technologyDescription',newData.technologydescription)
               formData.append('Logo',getFile)
           const config={headers:{'content-type':'multipart/form-data'}}
           const result=await postDataAndImage('technology/addnewRecord',formData,config)
            if(result){
              alert("true")
            }
            else{
              alert("false")
            }
            readAllRecords()
          }
  
      const readAllRecords=async() =>{
       var list=await getData('technology/displayall')
       setState({data:list})
      }
      useEffect(()=>{
          readAllRecords()
      },[])
      const handleEdit=async(newData)=>{
      if(getFile==='')
      {let body={'technologyId':newData.technologyid,
       'technologyName':newData.technologyname,
      'technologyDescription':newData.technologydescription
        
        }
        let result=await postData('technology/edit',body)
      
        if(result.RESULT){
        alert("true")
        }
        else{
          alert("false")
        }

      }
      else{
        let formData=new FormData();
        formData.append('technologyId',newData.technologyid)
       
        formData.append('logo',getFile)
        const config={headers:{'content-type':'multipart/form-data'}}
        const result=await postDataAndImage('technology/editIcon',formData,config)
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
let body={'technologyId':oldData.technologyid}
       let result= await postData('technology/delete',body)
        //var result =await postData('category/delete',oldData)
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
      title="Technology"
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
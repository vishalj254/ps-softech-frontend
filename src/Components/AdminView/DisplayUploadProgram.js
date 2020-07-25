import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { BaseUrl, getData, postData ,postDataAndImage} from '../FetchServices';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core'
import renderHTML from 'react-render-html';


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


export default function DisplayUploadProgram(){
    const classes=useStyles();
    // var d=new Date()
    const [stateCol, setStateCol] = React.useState({
      columns: [
        { title: 'Program ID', field: 'uploadprogramid' ,editable:'never' },
        { title: 'Technology ID', field: 'technologyid', editable:'never' },
        { title: 'AddedOn', field: 'addedon' , editable:'never'
        },
        { title: 'AddedBy', field: 'addedby' , editable:'never'},
        { title: 'Program Name', field: 'programname',
          render:rowData=>renderHTML(`${rowData.programname}`)
        },
        {
            title: 'Program Description', field: 'programdescription',
            render:rowData=>renderHTML(`${rowData.programdescription}`)
        },
        { 
          title: 'Picture',
          field: 'filenames',
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
            // const handleAdd=async(newData)=>{
            //   let formData=new FormData();
           
            // formData.append('technologyName',newData.technologyname)
            // formData.append('technologyDescription',newData.technologydescription)
            //      formData.append('Logo',getFile)
            //  const config={headers:{'content-type':'multipart/form-data'}}
            //  const result=await postDataAndImage('technology/addnewRecord',formData,config)
            //   if(result){
            //     alert("true")
            //   }
            //   else{
            //     alert("false")
            //   }
            //   readAllRecords()
            // }
    
        const readAllRecords=async() =>{
         var list=await getData('uploadprogram/displayall')
         setState({data:list})
        }
        useEffect(()=>{
            readAllRecords()
        },[])
        const handleEdit=async(newData)=>{
        if(getFile=='')
        {let body={'uploadprogramId':newData.uploadprogramid,
                   'programName':newData.programname,
                   'programDescription':newData.programdescription
                }
          let result=await postData('uploadprogram/edit',body)
        
          if(result.RESULT){
          alert("true")
          }
          else{
            alert("false")
          }
        }
        else{
          let formData=new FormData();
          formData.append('uploadprogramId',newData.uploadprogramid)
         
          formData.append('programFiles',getFile)
          const config={headers:{'content-type':'multipart/form-data'}}
          const result=await postDataAndImage('uploadprogram/editFile',formData,config)
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
  let body={'uploadprogramId':oldData.uploadprogramid}
         let result= await postData('uploadprogram/delete',body)
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
        //   onRowAdd: newData =>
        //     new Promise(resolve => {
        //       setTimeout(() => {
        //         resolve();
        //         const data = [...state.data];
        //         data.push(newData);
        //         setState({ ...state, data });
        //         handleAdd(newData)
        //       }, 600);
        //     }),
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
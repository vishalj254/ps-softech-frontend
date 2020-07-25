// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableFooter from '@material-ui/core/TableFooter';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import FirstPageIcon from '@material-ui/icons/FirstPage';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import LastPageIcon from '@material-ui/icons/LastPage';
// import { getData, BaseUrl } from "../../FetchServices"
// import { postData } from "../../FetchServices"

// const actionsStyles = theme => ({
//   root: {
//     flexShrink: 0,
//     color: theme.palette.text.secondary,
//     marginLeft: theme.spacing.unit * 2.5,
//   },
// });

// class TablePaginationActions extends React.Component {
//   handleFirstPageButtonClick = event => {
//     this.props.onChangePage(event, 0);
//   };

//   handleBackButtonClick = event => {
//     this.props.onChangePage(event, this.props.page - 1);
//   };

//   handleNextButtonClick = event => {
//     this.props.onChangePage(event, this.props.page + 1);
//   };

//   handleLastPageButtonClick = event => {
//     this.props.onChangePage(
//       event,
//       Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
//     );
//   };

//   render() {
//     const { classes, count, page, rowsPerPage, theme } = this.props;

//     return (
//       <div className={classes.root}>
//         <IconButton
//           onClick={this.handleFirstPageButtonClick}
//           disabled={page === 0}
//           aria-label="First Page"
//         >
//           {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//         </IconButton>
//         <IconButton
//           onClick={this.handleBackButtonClick}
//           disabled={page === 0}
//           aria-label="Previous Page"
//         >
//           {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//         </IconButton>
//         <IconButton
//           onClick={this.handleNextButtonClick}
//           disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//           aria-label="Next Page"
//         >
//           {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//         </IconButton>
//         <IconButton
//           onClick={this.handleLastPageButtonClick}
//           disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//           aria-label="Last Page"
//         >
//           {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//         </IconButton>
//       </div>
//     );
//   }
// }

// TablePaginationActions.propTypes = {
//   classes: PropTypes.object.isRequired,
//   count: PropTypes.number.isRequired,
//   onChangePage: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
//   theme: PropTypes.object.isRequired,
// };

// const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
//   TablePaginationActions,
// );

// let counter = 0;
 

// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit,
//   },
//   root: {
//     width: '100%',
//     marginTop: theme.spacing.unit * 3,
//   },
//   table: {
//     minWidth: 500,
//   },
//   tableWrapper: {
//     overflowX: 'auto',
//   },
// });

// class DisplayPageWise extends React.Component {
//   state = {
//     rows: [],
//     page: 0,
//     rowsPerPage: 5,
//     result:[]
//   };

//   async componentDidMount() {
        
//     const rows = await getData(`maincategory/fetchallmaincategories`);
//     console.log(`Data ${rows}`)
//     this.setState({ rows });
//     console.log(`Data ${this.state.rows}`)
//   }

//   showall=async(cid)=>{
//     const body={cid:cid};
//    const result = await postData(`maincategory/fetchbyid`,body);
//    if(result)
//    {  // const {maincategoryid,maincategory,icon}=result[0];
//          let data=JSON.stringify(result[0]);   
         
//       this.setState({ result:data });
//         console.log(`xxxxxxxxxxxxxx${this.state.result}`);
//       //  console.log(`xxxxxxxxxxxxxxxxx${maincategory}`)
//         this.props.history.replace({pathname:`/EditDeleteMain`,state:{result:this.state.result}});

//    }
//    else
//    {
//     console.log(`Invalid ${result}`);   
//    }
// }

//   handleChangePage = (event, page) => {
//     this.setState({ page });
//   };

//   handleChangeRowsPerPage = event => {
//     this.setState({ rowsPerPage: event.target.value });
//   };

//   render() {
//     const { classes } = this.props;
//     const { rows, rowsPerPage, page } = this.state;
//     const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  
//     return (
//       <Paper className={classes.root}>
//         <div className={classes.tableWrapper}>
//           <Table className={classes.table}>
//           <TableHead>
//           <TableRow>
//             <TableCell>Main Category Id</TableCell>
//             <TableCell>Main Category</TableCell>
//             <TableCell>Icon</TableCell>
//             <TableCell>Update</TableCell>
//          </TableRow>
//         </TableHead>
//             <TableBody>
//               {this.state.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
//                  let url=`${BaseUrl}/images/${row.icon}`;
//                  let cid=`${row.maincategoryid}`;
//                return (
//                   <TableRow key={row.id}>
//                     <TableCell component="th" scope="row">
//                       {row.maincategoryid}
//                     </TableCell>
//                     <TableCell>{row.maincategory}</TableCell>
                   
//                     <TableCell><img src={url} width='30' height='30'/> </TableCell>
//                     <TableCell>  <Button variant="outlined" color="primary" className={classes.button} onClick={()=>this.showall(row.id)}>
//             Edit/Delete
//           </Button></TableCell>
//                   </TableRow>
//                 );
//               })}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: 48 * emptyRows }}>
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//             <TableFooter>
//               <TableRow>
//                 <TablePagination
//                   rowsPerPageOptions={[5, 10, 25]}
//                   colSpan={3}
//                   count={rows.length}
//                   rowsPerPage={rowsPerPage}
//                   page={page}
//                   onChangePage={this.handleChangePage}
//                   onChangeRowsPerPage={this.handleChangeRowsPerPage}
//                   ActionsComponent={TablePaginationActionsWrapped}
//                 />
//               </TableRow>
//             </TableFooter>
//           </Table>
//         </div>
//       </Paper>
//     );
//   }
// }

// DisplayPageWise.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(DisplayPageWise);


import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { BaseUrl, getData, postData ,postDataAndImage} from '../../FetchServices';
import { Grid ,Avatar} from '@material-ui/core';
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
      { title: 'Main Category Id', field: 'maincategoryid' ,editable:'never' },
      { title: 'Main Category Name', field: 'maincategory' },
      
      { 
        title: 'Logo',
        field: 'logo',
        render:rowData=> <img src={`${BaseUrl}/images/${rowData.icon}`} style={{width: 30, borderRadius: '50%'}}/>,
        editComponent:props=>(<div>
        <Grid>
          <input 
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={(event)=>setFile({icon:URL.createObjectURL(event.target.files[0]),file:event.target.files[0]})}
          fullWidth
        /> 
         <label htmlFor="contained-button-file">
             <Button variant="contained" component="span" className={classes.button}>
                 Upload
                 <CloudUploadIcon className={classes.rightIcon}/>
             </Button>
         </label></Grid></div>)
      },
    ]
})
      const [state,setState]=React.useState({
          data: []});
     const [getFile,setFile]=React.useState({icon:'',file:''})
          const handleAdd=async(newData)=>{
            let formData=new FormData();
            formData.append('maincategory',newData.maincategory);
            formData.append('icon',getFile.file);
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };

            const result= await  postDataAndImage("maincategory/addnewrecord", formData,config);
            console.log(result);
            if(result){
              alert("true")
              setFile({icon:'',file:''})
            }
            else{
              alert("false")
            }
            readAllRecords()
          }
  
      const readAllRecords=async() =>{
       var list=await getData('maincategory/fetchallmaincategories')
       setState({data:list})
      }
      useEffect(()=>{
          readAllRecords()
      },[])
      const handleEdit=async(newData)=>{
      if(getFile.file==='')
      {let body={'maincategoryid':newData.maincategoryid,
       'maincategory':newData.maincategory
        
        }
        let result=await postData('maincategory/editrecord',body)
      
        if(result.RESULT){
        alert("true")
        }
        else{
          alert("false")
        }

      }
      else{
        let formData=new FormData();
        formData.append('maincategoryid',newData.maincategoryid)
       
        formData.append('icon',getFile.file)
        const config={headers:{'content-type':'multipart/form-data'}}
        const result=await postDataAndImage('maincategory/editicon',formData,config)
        if(result)
        {
          alert('record updted')
          setFile({icon:'',file:''})
        }
        else{
          alert('record not updated')
        }
        
      }
      readAllRecords()
    }
    
      const handleDelete=async(oldData)=>{
let body={'maincategoryid':oldData.maincategoryid}
       let result= await postData('maincategory/deleterecord',body)
        //var result =await postData('category/delete',oldData)
        if(result.RESULT){
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
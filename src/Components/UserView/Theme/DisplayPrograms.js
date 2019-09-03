import React from 'react';
import MaterialTable from 'material-table';
import {Link} from '@material-ui/core'
import { postData, BaseUrl } from '../../FetchServices';
import renderHTML from 'react-render-html';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

export default function DisplayProgram(props) {
    const [name,setName]=React.useState(props.technologyname)
  const [stateCol, setStateCol] = React.useState({
    columns: [
    //   { title: 'Technology', field: name },
      { title: 'Program Name', field: 'programname',render:rowData=>renderHTML(`${rowData.programname}`) },
      { title: 'Added On', field: 'addedon' },
      { title: 'Program description', field: 'programdescription',render:rowData=>renderHTML(`${rowData.programdescription}`) },
      {
        title: 'Filenames',
        field: 'filenames',
        render:rowData=>(<div><Link href={`${BaseUrl}/images/${rowData.filenames}`} download><GetAppRoundedIcon/></Link></div>)
      },
      
    ],
   
  });
  const [state,setState]=React.useState({ data: [
    // {  programname: 'Baran', addedon: 1987, programdescription: 63,filenames:'abs.zip' }
  ],})

  const [data,setData]=React.useState([])
  React.useEffect(()=>{
    readAllPrograms()
  },[props.technologyid])
  const readAllPrograms=async()=>{
    let body={'technologyId':props.technologyid}  
    let list=await postData('uploadprogram/displayByTechId',body)
    setData(list)
    setState({data:list})

  }

  const [technologyName,setTechnologyName]=React.useState('')

  const readTechName=async()=>{
    let body={'technologyId':props.technologyid}  
    let list=await postData('technology/displayByTechId',body)
    setTechnologyName(list)
  }
  React.useEffect(()=>{
    readTechName()
  },[props.technologyid])

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#4caf50',
      },
      secondary: {
        main: '#ff9100',
      },
    },

  });

const handleClick=()=>{
    alert("Hello")
}


return (
    <MuiThemeProvider theme={theme}>
      <MaterialTable
        title={`${technologyName} Programs`}
        columns={stateCol.columns}
        data={state.data}
        // options={{
        //   selection: true,
        //   render: rowData => (<a href={`${BaseUrl}/images/${rowData.filenames}`}>{rowData.filenames}</a>),
        //   onSelect: {handleClick},
        // }}
      />
    </MuiThemeProvider>
  )
}




// import React from 'react';
// import { MDBDataTable } from 'mdbreact';
// import {Link} from '@material-ui/core'
// import { postData, BaseUrl } from '../../FetchServices';
// import renderHTML from 'react-render-html';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

// export default function DisplayPrograms(props) {
//   const [data,setData] = ({
//     columns: [
//       {
//         label: 'Program name',
//         field: 'programname',
//         sort: 'asc',
//         width: 150
//       },
//       {
//         label: 'Added On',
//         field: 'addedon',
//         sort: 'asc',
//         width: 270
//       },
//       {
//         label: 'Program description',
//         field: 'programdescription',
//         sort: 'asc',
//         width: 200
//       },
//       {
//         label: 'Download',
//         field: 'filenames',
//         // render:rowData=>(<div><Link href={`${BaseUrl}/images/${rowData.filenames}`} download><GetAppRoundedIcon/></Link></div>),
//         sort: 'asc',
//         width: 100
//       },
//     ],
//     rows: []
//   });
  
//   React.useEffect(()=>{
//     readAllPrograms()
//     alert("hello")
//   },[props.technologyid])

//   const readAllPrograms=async()=>{
//     let body={'technologyId':props.technologyid}  
//     let list=await postData('uploadprogram/displayByTechId',body)
//     setData({rows:list})
//     console.log(data.rows)
//     alert("hello")
//   }

// //   const [technologyName,setTechnologyName]=React.useState('')

// //   const readTechName=async()=>{
// //     let body={'technologyId':props.technologyid}  
// //     let list=await postData('technology/displayByTechId',body)
// //     setTechnologyName(list)
// //   }
// //   React.useEffect(()=>{
// //     readTechName()
// //   },[props.technologyid])

//   return (
//     <MDBDataTable
//       striped
//       bordered
//       small
//       data={data}
//     />
//   );
// }





// import React from 'react';
// import { MDBDataTable } from 'mdbreact';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
// // import {postData} from '../../FetchServices'
// import { Typography } from '@material-ui/core';
// import {Link} from '@material-ui/core'
// import { postData, BaseUrl } from '../../FetchServices';
// import renderHTML from 'react-render-html';
// // import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

// const DatatablePage = (props) => {
//     React.useEffect(()=>{
//             readAllPrograms()
//             alert("hello")
//           },[props.technologyid])
        
//           const readAllPrograms=async()=>{
//             let body={'technologyId':props.technologyid}  
//             let list=await postData('uploadprogram/displayByTechId',body)
//             setData({rows:list})
//             console.log(data.rows)
//             alert("hello")
//           }

//           const [technologyName,setTechnologyName]=React.useState('')

//   const readTechName=async()=>{
//     let body={'technologyId':props.technologyid}  
//     let list=await postData('technology/displayByTechId',body)
//     setTechnologyName(list)
//   }
//   React.useEffect(()=>{
//     readTechName()
//   },[props.technologyid])

//   const [data,setData] = React.useState({
//     columns: [
//                   {
//                     label: 'Program name',
//                     field: 'programname',
//                     sort: 'asc',
//                     width: 150
//                   },
//                   {
//                     label: 'Added On',
//                     field: 'addedon',
//                     sort: 'asc',
//                     width: 270
//                   },
//                   {
//                     label: 'Program description',
//                     field: 'programdescription',
//                     sort: 'asc',
//                     width: 200
//                   },
//                   {
//                     label: 'Download',
//                     field: 'filenames',
//                     // render:rowData=>(<div><Link href={`${BaseUrl}/images/${rowData.filenames}`} download><GetAppRoundedIcon/></Link></div>),
//                     sort: 'asc',
//                     width: 100
//                   },
//     ],
//     rows: [
//     //   {
//     //     name: 'Tiger Nixon',
//     //     position: 'System Architect',
//     //     office: 'Edinburgh',
//     //     age: '61',
//     //     date: '2011/04/25',
//     //     salary: '$320'
//     //   },
//     //   {
//     //     name: 'Garrett Winters',
//     //     position: 'Accountant',
//     //     office: 'Tokyo',
//     //     age: '63',
//     //     date: '2011/07/25',
//     //     salary: '$170'
//     //   },
//     ]
//   });

//   return (
//       <div>
//           <Typography>
//               {technologyName} Programs
//           </Typography>
//     <MDBDataTable
//       striped
//       bordered
//       hover
//       data={data}
//     />
//     </div>
//   );
// }

// export default DatatablePage;





// import React from 'react'
// import ReactTable from 'react-table'
// import 'react-table/react-table.css'
// import { postData, BaseUrl } from '../../FetchServices';
// import renderHTML from 'react-render-html';
// import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
// import {Link} from '@material-ui/core'
 
// const DisplayPrograms=(props)=>{
//   const [data,setData] =React.useState([]) 
//   const columns = [{
//     Header: 'Program',
//     accessor: 'programname', // String-based value accessors!
//     Cell : rowData=>renderHTML(`${rowData.value}`)
//   },
//   {
//     Header: 'Description', // Custom header components!
//     accessor: 'programdescription',
//     Cell : rowData=>renderHTML(`${rowData.value}`)
//   },
//   {
//     Header: 'Added On',
//     accessor: 'addedon',
//     Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
//   },
//   {
//     Header: 'Download',
//     accessor: 'filenames',
//     Cell: props => <Link href={`${BaseUrl}/images/${props.value}`} download><GetAppRoundedIcon/></Link> // Custom cell components!
//   }
// ]

//             React.useEffect(()=>{
//                 readAllPrograms()
//                 alert("hello")
//               },[props.technologyid])
            
//               const readAllPrograms=async()=>{
//                 let body={'technologyId':props.technologyid}  
//                 let list=await postData('uploadprogram/displayByTechId',body)
//                 setData(list)
//                 console.log(list)
//                 // alert("hello")
//               }
    
//               const [technologyName,setTechnologyName]=React.useState('')
    
//       const readTechName=async()=>{
//         let body={'technologyId':props.technologyid}  
//         let list=await postData('technology/displayByTechId',body)
//         setTechnologyName(list)
//       }
//       React.useEffect(()=>{
//         readTechName()
//       },[props.technologyid])
 
//   return( <ReactTable
//     data={data}
//     columns={columns}
//   />)
// }

// export default DisplayPrograms




// import React from 'react'
// import SearchTable from 'reactable-search';
// import { postData, BaseUrl } from '../../FetchServices';
 
// export default function DisplayPrograms(props){


// // const [data,setData] = React.useState([]);
//                     React.useEffect(()=>{
//                     readAllPrograms()
//                     alert("hello")
//                   },[props.technologyid])
                
//                   const readAllPrograms=async()=>{
//                     let body={'technologyId':props.technologyid}  
//                     let list=await postData('uploadprogram/displayByTechId',body)
//                     setData(list)
//                     console.log(list)
//                     // alert("hello")
//                   }

// var [data,setData] = React.useState([
//     // {"technologyid":2,"technologyname":"Python","addedon":"2019-08-03T18:30:00.000Z","addedby":"Sandeep Sappal","technologydescription":"IOT,ML etc","logo":"python.jpg"},{"technologyid":4,"technologyname":"Java Core","addedon":"2019-08-03T18:30:00.000Z","addedby":"Sandeep Sappal","technologydescription":"","logo":"java-programming.jpg"},{"technologyid":5,"technologyname":"React & Node Js","addedon":"2019-08-04T18:30:00.000Z","addedby":"Sandeep Sappal","technologydescription":"MERN Technology","logo":"mern.jpg"},{"technologyid":6,"technologyname":"C++","addedon":"2019-08-04T18:30:00.000Z","addedby":"Sandeep Sappal","technologydescription":"C++","logo":"c++.jpg"},{"technologyid":7,"technologyname":"Android","addedon":"2019-08-05T18:30:00.000Z","addedby":"Sandeep Sappal","technologydescription":"SDK","logo":"android.jpg"},{"technologyid":8,"technologyname":"C Language","addedon":"2019-08-06T18:30:00.000Z","addedby":"Sandeep Sappal","technologydescription":"C","logo":"c-Language.jpg"}
//   ]);
 
// return(<div>
//     <SearchTable
//     searchPrompt="Type to search"
//     rows={data}/>
//     </div>
//     )
// }

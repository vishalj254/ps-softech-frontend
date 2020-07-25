import React, { Component } from 'react';

import { getData, BaseUrl } from "../../FetchServices"
import { postData } from "../../FetchServices"
import EditDelete from './EditDelete';
 
import Pagination from "react-js-pagination";
 


class DisplayAll extends React.Component {
    state = {
        list: [],
        
        result:''
      };

      constructor(props)
      {
          super(props);
  
          // bind <this> to the event methods
         
 
        
    } 
      async componentDidMount() {
        
        const list = await getData(`maincategory/fetchallmaincategories`);
        console.log(`Data ${list}`)
        this.setState({ list });
        console.log(`Data ${this.state.list}`)
      }



     showall=async(cid)=>{
         const body={cid:cid};
        const result = await postData(`maincategory/fetchbyid`,body);
        if(result)
        {  // const {maincategoryid,maincategory,icon}=result[0];
              let data=JSON.stringify(result[0]);   
           this.setState({ result:data });
             console.log(`xxxxxxxxxxxxxx${this.state.result}`);
           //  console.log(`xxxxxxxxxxxxxxxxx${maincategory}`)
             this.props.history.replace({pathname:`/EditDelete`,state:{result:this.state.result}});
  
        }
        else
        {
         console.log(`Invalid ${result}`);   
        }
     }

      makeTable = () => {
        
        return this.state.list.map((item, index) => {
             let url=`${BaseUrl}/images/${item.icon}`;
            let cid=`${item.maincategoryid}`;
             console.log(cid);
           
            return (
                <tr key={'maincategory'+index}>
                    <td>{index+1}</td>
                    <td>{item.maincategoryid}</td>
                    <td>{item.maincategory}</td>
                  
                    <td><img src={url} width='30' height='30'/></td>
                    <td>
          <button onClick={()=>this.showall(cid)}>
            Edit/Delete
          </button>
        </td>
                   
                     
                </tr>
             
            );
        })
    }  

    render() {

 // pagination
  

          return (
            <div>
                Result:<br/>
                 <center>
                <table border='1'>
                <thead>
           
                       <th>Sno</th>
                       <th>Main Category Id</th>
                       <th>Main Category</th>
                       <th>Icon</th>
                      
                       <th>Update</th>
                    </thead>
                    <tbody>
                        
                   {this.makeTable()}
                   </tbody>
                </table>
                
             
                 

                </center>

            </div>
        );
    }
    }
  
export default DisplayAll
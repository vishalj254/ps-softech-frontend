import React, { Component } from "react";
import { postDataAndImage } from '../../FetchServices'
import renderHTML from 'react-render-html';

class AddNewRecord extends Component {
  state = {
    maincategoryid: "",
    maincategory: "",
    file: "",
    msg: "",
    responseResult:'',
  };

  valid=()=>{
      
    let err1=this.state.maincategory.length!=0?'':'Main Category  Should Not Blank...';
    let err2=this.state.file.length!=0?'':'Select the Icon....'; 
     if(err1!='' || err2!='')
     {let errm=`<h6><font color='red'>${err1}<br>${err2}</font></h6>`;
     this.setState({msg:errm})
    
       return(false);} 
     else    
     {
       return(true)
     }

    }

  addrecord =async()=> {
    console.log(this.valid());
     if(this.valid())
     {
    try {

        const formData = new FormData();
        formData.append('maincategory',this.state.maincategory);
        formData.append('icon',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

      const result= await  postDataAndImage("maincategory/addnewrecord", formData,config);
      console.log(result);
      if(result) {
       
        this.setState({maincategory:''});
        this.setState({msg:'Record Submited....'});     
      } else {
        this.setState({msg:'Fail to Submit Record'});     
        alert('Server Error\nTry Again');
      }
    } catch (e) {
      console.log("MainCategory:", e);
    }
  }
  };

  render() {
    
    return (
           <div>
             <center>
            <h1>Main Category</h1>
            <table>
              <tr>
                <td>
                <input
                    type="text"
                    name="maincategory"
                     placeholder="Main Category"
                    value={this.state.maincategory}
                    onChange={e => this.setState({ maincategory: e.target.value })}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="file"
                    name="icon"
                    value={this.state.icon}
                    onChange={e => this.setState({file:e.target.files[0]})}
                  />
                </td>
              </tr>
               
               <tr>
                     <td>
                  <button
                    
                    onClick={() => this.addrecord()}
                  >
                   Submit
                  </button>
                </td>
              </tr>
            </table>
           {renderHTML(this.state.msg)}
            </center>
          </div>
         );
  }
}

export default AddNewRecord;

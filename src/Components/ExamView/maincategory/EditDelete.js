import React, { Component } from "react";
import { postData, BaseUrl } from "../../FetchServices";
import { postDataAndImage } from "../../FetchServices";

class EditDelete extends Component {
    state = {
        maincategoryid:'',
        maincategory:'' ,
        icon:'',
        file: "",
        msg: ""
      };
      async componentDidMount() {
let data= JSON.parse(this.props.location.state.result);
    this.setState({maincategory:data.maincategory});
    this.setState({maincategoryid:data.maincategoryid});
    let url=`${BaseUrl}/images/${data.icon}`;
    this.setState({icon:url});

     }

     editicon =async()=> {
     
      try {
  
          const formData = new FormData();
          formData.append('maincategoryid',this.state.maincategoryid);
          formData.append('icon',this.state.file);
          const config = {
              headers: {
                  'content-type': 'multipart/form-data'
              }
          };
  
        const result = await postDataAndImage("maincategory/editicon", formData,config);
       alert(result);
        if(result) {
          this.setState({msg:'Picture Edit....'});     
          this.props.history.replace({pathname:`/DisplayAllMain`});
        } else {
          this.setState({msg:'Fail to Edit Picture.....'});     
          alert('Server Error\nTry Again');
        }
      } catch (e) {
        console.log("MainCategory:", e);
      }
    };
  

  editrecord=async()=> {
     
    try {

        const body={
         maincategory:this.state.maincategory,
         maincategoryid:this.state.maincategoryid

        }; 

      const result = await postData("maincategory/editrecord", body);
    
      if(result.RESULT) {
        this.setState({msg:'Record Edited....'});  
        this.props.history.replace({pathname:`/DisplayAllMain`});   
      } else {
        this.setState({msg:'Fail to Edit Record...........'});     
        alert('Server Error\nTry Again');
      }
    } catch (e) {
      console.log("MainCategory:", e);
    }
  };

  deleterecord =async()=> {
     
    try {

        const body={
       
         maincategoryid:this.state.maincategoryid

        }; 

      const result = await postData("maincategory/deleterecord", body);
     alert(result.RESULT);
      if(result.RESULT) {
        this.setState({msg:'Record Deleted....'});   
        this.props.history.replace({pathname:`/DisplayAllMain`});
    
      } else {
        this.setState({msg:'Fail To Delete Record/Record Already Deleted...'});     
        alert('Server Error\nTry Again');
      }
    } catch (e) {
      console.log("MainCategory:", e);
    }
  };






  render() {
     
    
    
    return (
           <div>
           <center>
            <h1>Main Category[Edit/Delete]</h1>
           <table>
             <tr><td valign='top'>
            <table>
            <tr>
                <td>
                 <strong>Main Category Id:</strong> <br/>
                <input
                    type="text"
                    name="maincategoryid"
                     placeholder="Main Category Id"
                    value={this.state.maincategoryid}
                    onChange={e => this.setState({ maincategory: e.target.value })}
                  />
                </td>
              </tr>
              <tr>
                <td>
                <strong>Main Category Name:</strong> <br/>
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
                  <button
                    
                    onClick={() => this.editrecord()}
                  >
                  Edit
                  </button>&nbsp;&nbsp;&nbsp;
                  <button
                    
                    onClick={() => this.deleterecord()}
                  >
                   Delete
                  </button>
                </td>
              </tr>
            </table>
            </td><td valign='top'>

            <img src={this.state.icon} width='75' height='75'/> <br/>

            <input
                    type="file"
                    name="icon"
                     
                    
                    onChange={e => this.setState({file:e.target.files[0]})}
                  /><br/>
                   <button
                    onClick={() => this.editicon()}>
                Edit Icon
                </button>

            </td>
            </tr>
            </table>
            {this.state.msg}
            </center>
          
          </div>
         );
  }
}

export default EditDelete;

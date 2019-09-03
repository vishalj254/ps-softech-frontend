import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import { Typography, LinearProgress } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { type } from 'os';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import { getData, BaseUrl } from '../../../../FetchServices';
const styles = theme => ({
    paper:{
backgroundColor:'#263475',

    }

})

class Python extends React.Component {
  state={
    viewLess:'',
    viewMore:'',
    Edit:'ViewMore',
    save:<img src={`${BaseUrl}/images/add.png`} height='2%'width='2%'></img>,
    append:'',
    expanded: null,

    sh:'',
  };
   handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    })}
     
 render() {
  const { classes } = this.props;
  const { expanded } = this.state;

    return (
      <div style={{marginLeft:'2%',width:'96%'}}><center>
        <Paper style={{background:'#263475',width:'100%',marginTop:'2%'}}>
     <div style={{backgroundColor:'#263475'}}>   
    <p style={{marginLeft:'0%',fontSize:'40px',color:'white',marginRight:'-2%',paddingTop:'50px',marginTop:'-30px'}}>Python Training</p></div> 
    <div style={{marginLeft:'0%',fontSize:'30px',color:'white'}} >
    Live project Based Training..
        </div>
      <Typography style={{color:'white',height:'100%',width:'50%',marginLeft:'0%',marginTop:'2%',fontSize:'20px'}}><hr/>
      Duration:4 weeks | Certifited trainings
      <div>Python with ML:</div>
      <p>Open the gateway towards your Data Science career with the certification course of python  by PS Softech.. </p>

      </Typography>
          </Paper>
          </center>

          <Card style={{width:'100%',height:'50%',marginTop:'2%',flexDirection:'row'}}>
          <Typography style={{fontSize:'20px',marginLeft:'23%', borderBottom:'#263475 1px dotted',width:'43%'}}>
<b>Python Programing for Data Science:</b>

</Typography>
<Grid  container spacing={32}>
<Grid item xs={6} style={{fontSize:'13px',display:'flex'}}>
<img src={`${BaseUrl}/images/dot.png`}  style={{height:'20px',marginTop:'15px',marginLeft:'1%'}}></img><p  style={{marginLeft:'1%',textAlign:'flex',marginRight:'2%',paddingTop:'-10px'}}>Campusshala Python programming certification course enables you to learn Python from scratch.</p></Grid>
           <Grid item xs={6} style={{marginTop:'1%',display:'flex', fontSize:'13px'}}>
           <img src={`${BaseUrl}/images/dot.png`}  style={{height:'20px',marginTop:'%'}}></img> <p style={{fontSize:'13px',textAlign:'auto',marginLeft:'',color:'black',marginTop:'-3px'}}>The 6-week training program covering essential concepts on the building blocks of Python, data operations,  file operations, object-oriented programming and various Python libraries such as Pandas, Numpy, Matplotlib which are essential for Data Science. </p>
 </Grid>
 </Grid>
 <Grid  container spacing={32}>
<Grid item xs={6} style={{fontSize:'13px',display:'flex'}}>
<img src={`${BaseUrl}/images/dot.png`}  style={{height:'20px',marginTop:'15px',marginLeft:'1%'}}></img><p style={{fontSize:'13px',marginLeft:'8%',marginTop:'-6%'}}> For the practical exposure, this training program will come with assignments, assessment tests, code challenges, quizzes, and exercisesassessment tests code challenges, quizzes, and exercises.</p><p style={{marginLeft:'8%',marginTop:'-4%'}}> </p> 
</Grid>
           <Grid item xs={6}>
           <img src={`${BaseUrl}/images/dot.png`}  style={{height:'20px',marginTop:'10px',fontSize:'13px'}}></img><p style={{ marginLeft:'6%' ,marginTop:'-6%' ,fontSize:'13px'}}> At the end of this training program, you will build a live project with you. Doubt clearing session will be available for you 1 hour per day on daily basis.


           </p>
 </Grid>
 </Grid>
            </Card>
          
          
          <Typography style={{textAlign:'center',marginTop:'2%',fontSize:'20px',color:'#264375'}}><b> Course Content </b></Typography>

      <Card style={{width:'80%',height:'50%',marginLeft:'10%', marginTop:'1%'}} >
         
      <Typography style={{fontSize:'25px',fontWeight:"bold",marginLeft:"5%",marginTop:'2%',color:'#264375'}}>Python<span> 
<Button style={{fontSize:'20px',marginTop:'2%'}} href="http://localhost:3001/pdf/Node.rar" >
 <b style={{fontSize:'10px',color:'#264375'}}><img src={`${BaseUrl}/images/download.png`}  style={{ marginTop:'-50%',height:'20px',width:'20px'}}></img>Download Syllabus</b>
</Button>

</span></Typography>

        <ExpansionPanel  style={{height:'7%',marginTop:"2%"}} expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>1. Introduction 
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            
           <div style={{fontSize:'12px',color:'#264375'}}>
             1.1 Why Python?
             </div>      
        
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>2. How Python is different
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>
            <p> 2.1 Python Concepts            
</p>

            <p>2.2 Dynamic v/s Static</p>
           
            <p>2.3 Interepreted v/s Compiled</p>
            
            <p>2.4 Prototyping</p> 
            
            <p>2.5 Dynamic V/S Static</p>
             
            <p>2.6 Procedural V/S Object Oriented Programming</p> 
           
             </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>3. Comparison of Programming Language
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>
            <p> 3.1 C</p>
           
            <p>3.2 C++</p> 
            
            <p>3.3 Python </p> 
            
            <p>3.4 Java</p> 
            
            <p>3.5 C#</p>
            
             </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>4.Python Interpreter
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>
            <p> 4.1 Launching with Python Interpreter
            
              <p style={{marginLeft:'9%',color:'#264375'}}>
                4.1.1 Windows
                
              </p>
              
              <p style={{marginLeft:'9%',color:'#264375'}}>
                4.1.2 MAC
              </p>
              
            </p>
            <p>4.2 Python version</p> 
            
             </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>5.Types & Operators
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>
            <p> 5.1 Python Syntax
              </p>
              
            <p>5.2 Python Object Types  </p> 
            
            <p>5.2 Python Numbers  </p> 
           
             </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>6.Strings
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>
            <p> 6.1  Basic String Operations
              </p>
              
            <p>6.2  Indexing and Slicing Strings  </p> 
            
            <p> 6.3  String Formatting </p> 
           <p>6.4  Combining and Separating Strings</p>
           <p>6.5  Regular Expressions</p>
             </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>7.Lists
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>
            <p> 7.1  List usage
              </p>
            <p> 
7.2	Adding List Elements
  </p> 
            <p>7.3	Mutability
  </p> 
           <p>7.4	Methods
  </p>
      
             </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel8'} onChange={this.handleChange('panel8')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>8	Dictionaries
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>
            <p> 8.1  Making a Dictionary</p>
            <p>  8.2  Basic Operations </p> 
            <p>8.3  Dictionary Details</p>
          </div>      
          </ExpansionPanelDetails>  
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel9'} onChange={this.handleChange('panel9')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>9	Tuples
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>
            <p>9.1  Why Use Tuples?</p>
 
            <p> 9.2  Sequence Unpacking
 </p> 
            <p>  9.3  Methods
 </p>
          </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel10'} onChange={this.handleChange('panel10')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>10	Files
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>
            <p>10.1 File Operations</p>
         <p>10.2 Files and Streams
</p><p>10.3 Creating a File
</p>
<p>10.4 Reading From a File
</p>10.5 Iterating Through Files

<p>10.6 Seeking

</p>

<p>10.7 Serialization


</p>
           
          </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel11'} onChange={this.handleChange('panel11')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>11.	Statements
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p> 11.1 Assignment
</p>
         <p>11.2 Expressions/Calls
</p>
         <p>11.3 Printing
</p>
          <p>11.4 If Tests
</p>

           <p>11.5 While Loops
</p>

             <p>11.6 For Loops
</p>
           
          </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel12'} onChange={this.handleChange('panel12')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>12.	Lambda Expression
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p> 12.1 Making Python Do Something
</p>
         <p>12.2 Creating Lambda Expression
</p>
         <p>12.3 Map, Filter and Reduce
</p>
          <p>12.4 Default Arguments
</p></div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
          <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel13'} onChange={this.handleChange('panel13')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>13.Exceptions
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p> 13.1 Exception Class Hierarchy</p>
         <p>13.2 User-Defined Exceptions
</p>
         <p>
</p>
          <p>
</p></div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel14'} onChange={this.handleChange('panel14')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>14	Object Oriented Programming
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p> 14.1 Learning Python Classes</p>
         <p>14.2 How Are Classes Better?
</p>
         <p>14.3 Improving Your Class Standing
</p>
          <p>14.4 So What Does a Class Look Like?</p>
          <p>14.5 “New-style” classes</p>
          <p>14.6  A Note About Style</p>

          </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel15'} onChange={this.handleChange('panel15')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>15	More OOPS
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p> 15.1 Inheritance</p>
         <p>15.2 Operator Overloads
</p>
         <p>15.3 Class Methods
</p>
          <p>15.4 Abstraction & Polymorphism</p>
    
          </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel16'} onChange={this.handleChange('panel16')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>16	Databases
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p>16.1 How to Use a Database</p>
         <p>16.2 Working With a Database
</p>
         <p>16.3 Using SQL to Query a Database
</p>
          <p>16.5 Creating an SQLite DB</p>
    
          </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel17'} onChange={this.handleChange('panel17')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>17	Threading
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p>17.1 Creating Threads with Threading Module</p>
         <p>17.2 Synchronizing Threads
</p>
         <p>17.3 Priority Queue
</p>
          <p></p>
    
          </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel18'} onChange={this.handleChange('panel18')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>18	Networking
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p>18.1 Programming Socket Programming</p>
         <p>18.2 Application on Socket</p>

       
          </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel19'} onChange={this.handleChange('panel19')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>19	Email Services
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p>19.1 Sending Email</p>
         <p>19.2 Sending Email with Attachments</p>

         <p></p>
         <p></p>

          </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel20'} onChange={this.handleChange('panel20')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>20	Overview of Graphical User Interfaces
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p>21.1    Introduction</p>
         <p>21.2    GUI Controls(Tkinter/Qt5)</p>
         <p></p>
         <p></p>

          </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel21'} onChange={this.handleChange('panel21')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>21	Overview of Graphical User Interfaces
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p>21.1    Introduction</p>
         <p>21.2    GUI Controls(Tkinter/Qt5)</p>
         <p></p>
         <p></p>

          </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel22'} onChange={this.handleChange('panel22')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>22	Web Scripting & Application
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p>22.1HTML 5</p>
            <p>22.2 CGI Scripting</p>
              <p>22.3 D’Jango</p>
          </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel23'} onChange={this.handleChange('panel23')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>23	Control Hardware Devices Using Python</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p>23.1 Working on Sensors, Led, Motors etc.</p>
            <p>23.2 Home Automation</p>
            <p>23.3 Working With Sim900</p>

            <p>23.4 Creating Various Application Using Python To Control Hardware</p>


            
              <p></p>
          </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel24'} onChange={this.handleChange('panel24')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>24	Raspberry Pi B+3</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px' ,color:'#264375'}}>



            <p>24.1 Introduction to Raspberry Pi</p>

            <p> 24.2 Installation & Setting up Pi</p>

            <p>   24.3 Setting up GPIO Pins</p>

            <p>24.4 Serial Communication with Pi</p>


            <p>  24.5 Synchronous Peripheral Interfaces Sensors Interfacing</p>

          </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel25'} onChange={this.handleChange('panel25')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>25		IOT & Cloud Interfacing</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p>25.1 Introduction to IOT</p>
<p>25.2 Introduction of Cloud Computing</p>
<p>25.3 AWS/PUBNUB/AZURE Cloud</p>
<p>25.4 Creating Dashboard on Cloud</p>
<p>25.5 Creating IOT Device on Cloud</p>

<p>25.6 Sending & Fetching Data from Cloud</p>
<p>25.7 M2M Communication Using Cloud</p>
 </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>


<Typography style={{fontSize:'15px',fontWeight:"bold",marginLeft:"5%",marginTop:'2%',color:'#264375'}}>Machine Learning</Typography>
<ExpansionPanel  style={{height:'7%',marginTop:"2%"}} expanded={expanded === 'panel26'} onChange={this.handleChange('panel26')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>Lesson 1: Introduction to Artificial Intelligence and Machine Learning </b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p>1	Artificial Intelligence</p>

            <p>2	Machine Learning</p>

            <p>3	Machine Learning algorithms</p>

            <p>4 Applications of Machine Learning

</p>
 </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel27'} onChange={this.handleChange('panel27')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>Lesson 2: Techniques of Machine Learning</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p>1	Supervised learning
</p>

<p>	2 Unsupervised learning
</p>

<p>3	Semi-supervised and Reinforcement learning
</p>
<p>4 	Bias and variance trade-off
</p>

<p>5	Representation learning
</p>

 </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel28'} onChange={this.handleChange('panel28')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b> Class 3.Data Preprocessing</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p>1	Data Preparation</p>


            <p>2	Feature Engineering</p>


            <p>3	Feature Scaling</p>


            <p>4	Datasets</p>


            <p>5	Dimensionality Reduction</p>



 </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel29'} onChange={this.handleChange('panel29')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>Lesson 4: Regression learning objectives</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p>1.Regression and its types</p>

            <p>2.Linear regression: Equations and Algorithms</p>

 </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel30'} onChange={this.handleChange('panel30')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>Lesson 5: Classification Learning Objectives</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p>	Meaning and types of classification</p>

            <p>	Logistic Regression</p>

            <p>	K-nearest Neighbors</p>

            <p>Support Vector Machines</p>

            <p>	Kernel Support Vector Machines</p>

            <p>	Naive Bayes</p>

            <p>	Decision Tree Classifier</p>

            <p>	Random Forest Classifier

 </p>
 </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel31'} onChange={this.handleChange('panel31')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>Lesson 6: Unsupervised Learning</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p>	1	Clustering Algorithms</p>

            <p>2	K-means Clustering</p>
 </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel32'} onChange={this.handleChange('panel32')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'-0.07%',color:'#264375'}}><b>Lesson 7: Introduction to Deep Learning Objectives</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>



            <p>	1.	Meaning and Importance of Deep Learning

</p>

            <p>2.	Artificial Neural Networks</p>

            
 </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        

        </Card>
<br/>
      </div>
    );
  }
}

Python.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Python);
  
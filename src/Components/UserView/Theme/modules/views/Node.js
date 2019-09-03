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
import {BaseUrl} from '../../../../FetchServices';


const styles = theme => ({
    paper:{
backgroundColor:'blue',

    },
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  
})

class Node extends React.Component {
  state={
    viewLess:'',
    viewMore:'',
    Edit:'ViewMore',
    save:<img src={`${BaseUrl}/images/add.png`} height='2%'width='2%'></img>,
    append:'',
    expanded: null,

    sh:'',
  
    
  };
Display=()=>{
  if(this.state.Edit=='ViewMore')
  {
this.setState({Edit:'ViewLess'})
  }
  else if(this.state.Edit=='ViewLess')
  {
this.setState({Edit:'ViewMore'})
  }
 
}
handleChange = panel => (event, expanded) => {
  this.setState({
    expanded: expanded ? panel : false,
  })}


  render() {
    const { expanded } = this.state;
    const { classes } = this.props;


    return (
      <div style={{marginLeft:'2%',width:'96%'}}><center>


     <Paper style={{background:'#263475',width:'100%',marginTop:'2%'}}>
     <div style={{backgroundColor:'#263475'}}>   
    <p style={{marginLeft:'0%',fontSize:'40px',color:'white',marginRight:'-2%',paddingTop:'50px',marginTop:'-30px'}}>React & Node Training</p></div> 
    <div style={{marginLeft:'0%',fontSize:'30px',color:'white'}} >
    Learn Node & React and create your Own websites
        </div>
      <Typography style={{color:'white',height:'100%',width:'50%',marginLeft:'0%',marginTop:'2%',fontSize:'20px'}}><hr/>
      Duration:4 weeks | Certifited trainings
      <div>Node and React :</div>
      <p>Build and Deploy Fullstack web apps with NodeJs, ReactJs, Express, MySQL,and React Native</p>

      </Typography>
          </Paper>
     </center>






        
          <Card style={{width:'100%',height:'50%',marginTop:'2%',flexDirection:'row'}}>
          <Typography style={{fontSize:'20px',marginLeft:'30%',width:'35%',color:'#263475',borderBottom:'#263475 1px dotted'}}><b>About Node & React Training</b>
</Typography>
<Grid  container spacing={32}>
<Grid item xs={6} style={{fontSize:'13px',display:'flex'}}>
<img src={`${BaseUrl}/images/dot.png`} style={{height:'20px',marginTop:'15px'}}></img><p  style={{marginLeft:'2%',textAlign:'flex',marginRight:'2%',paddingTop:'-10px'}}>Are you a developer looking to build a scalable web applications at lightning speed?	 </p></Grid>
           <Grid item xs={6} style={{marginTop:'1%',display:'flex'}}>
           <img src={`${BaseUrl}/images/dot.png`} style={{height:'20px',marginTop:'%'}}></img> <p style={{fontSize:'13px',textAlign:'justify',marginLeft:'1%',color:'black',marginTop:'-3px'}}> Campusshala’s Node and react Js training enables you to build network applications 
            quickly and efficiently</p>
 </Grid>
 </Grid>
 <Grid  container spacing={32}>
<Grid item xs={6}>
<img src={`${BaseUrl}/images/dot.png`} style={{height:'20px',marginTop:'0px'}}></img><p style={{fontSize:'13px',marginLeft:'8%',marginTop:'-6%'}}><br/> This course helps you to gain an in-depth knowledge of<br/>concepts such as Conditional branching,Looping<br/>Statements,functions,Understanding of NPM,<br/>ExceptionHandling,Session Handling,Working with<br/>Json       </p> 
</Grid>
           <Grid item xs={6}>
           <img src={`${BaseUrl}/images/dot.png`} style={{height:'20px',marginTop:'10px'}}></img><p style={{ marginLeft:'6%' ,marginTop:'-6%',fontSize:'13px', }}> This course helps you to gain an in-depth knowledge of<br/>Express Framework,Working with react,State Management<br/>Working with React Routers Switching between<br/>Components,Code Splitting,Server Side Redering etc.
           </p>
 </Grid>
 </Grid>
            </Card>


            <Typography style={{textAlign:'center',marginTop:'2%',fontSize:'20px',color:'#264375'}}><b> Course Content </b></Typography>

      <Card style={{width:'80%',height:'50%',marginLeft:'10%', marginTop:'1%'}} >
         <Typography style={{fontSize:'20px',marginTop:'2%',marginLeft:'3%',color:'#264375'}}><b> WEB-SCRIPTING </b><span> 
<Button style={{fontSize:'10px',marginTop:'2%'}}href="/Pdf/Node.pdf" >
<img src={`${BaseUrl}/images/download.png`}  style={{ marginTop:'-50%',height:'20px',width:'20px'}}></img> <b style={{fontSize:'10px',color:'#264375'}}></b>
</Button>

</span></Typography>
        <ExpansionPanel  style={{height:'7%',marginTop:'2%'}} expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section 1: HTML5- The Static Web Page Creation 
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            
           <div style={{fontSize:'12px',color:'#264375'}}>
           <p>1.1	HTML5  Introduction </p>                   
           <p>1.2 Structure </p>                   
           <p>1.3	Elements </p>                 
          <p>1.4	Semantics </p>
         <p>1.5 Audio & Video</p>
         <p> 1.6	Section & Article</p> 
         <p> 1.7	Canvas, Aside</p> 
         <p> 1.8	Drag & Drop </p>
        <p>  1.9	Forms & Form Elements </p>
        </div>
             </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section 2: CSS 3 - The Presentation Semantics 
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>
            <p> 2.1 CSS Properties, Selectors, Style Declaration Types </p>
            <p>	2.2 Colors, Backgrounds, Text and Fonts </p>
           <p>	2.3 Images, Links, Tables and List </p>
          <p>	2.4 Borders, Padding, Margin </p>
          <p>	2.5 Cursor, Dimension, Scrollbars, Visibility and Positioning</p> 
          <p>	2.6 Pseudo class & Elements, @Rules( import, font-face, charset) </p>
          <p>	2.7 Filters, Media Types, Printing and Layouts </p>
<          p> 2.8 rocedural vs object oriented programming</p> 
             </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section 3: JavaScript - The Interpreted Programming Language 
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>
            <p>	3.1 Interpreted Programming Languages </p>
             <p>	3.2 Integrating JavaScript with HTML </p> 
            <p>	3.3 Variables in JavaScript </p>
           <p>	3.4 Operators in JavaScript </p>
           <p>	3.5 Expressions in JavaScript</p> 
	        <p>3.6 Arrays in JavaScript </p>
         <p>	3.7 Handling Loops & Decision structures </p>
         <p>3.8 Executing Conditional statements </p>
	       <p>3.9 Working with Functions </p>
        <p>	Section 4: ES6 Write Less Do More…</p>
        <p>	4.1 Understanding ES6</p> 
        < p>	4.2 Arrow Functions </p>
      <p>	4.3 Event Handlers</p> 
      <p>	4.4 Sliding, Easing, Fading, Toggling </p>
     <p>	4.5 AJAX calls </p>
       <p>	4.6 JSON </p>

 
             </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section 4: UI-Components
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>
            <p>	5.1 Introduction to Semantic-UI-React </p>
<p>	5.2  Grid System </p>
<p>	5.3 Creating Layouts with Semantic-UI-React</p>
<p>5.4 Semantic-UI - Understanding the CSS </p>
<p>	5.5 CSS Customization / Skins </p>
<p>	5.6 Responsive Web design with Semantic-UI-React</p>
<p>	5.7 Single Page Responsive site with Semantic-UI-React</p>
<p>	5.8 Semantic-UI-React Layout Components </p>
<p>5.9 Semantic-UI-React Plug-ins : ? Transition </p>	
<p>Modal </p>	
<p>	Dropdown </p>
<p>	Scrollspy </p>
<p>	Tab </p>
<p>	Tooltip </p>
<p>	5.10 Building Web-App with Semantic-UI-React.</p>
</div>

          </ExpansionPanelDetails>
        </ExpansionPanel>
        <Typography style={{fontSize:'20px',marginTop:'2%',marginLeft:'3%',color:'#264375'}}><b> PROGRAMMING LANGUAGE (NODE.JS - MySQL)</b></Typography>
     
        <ExpansionPanel  style={{height:'7%',marginTop:'2%'}} expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section 1: Node.js – Understanding the Preliminaries </b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>
            <p>1.1	Introduction to web & internet </p>
           <p> 1.2	Introduction to server </p>
       <p>1.3	Understanding localhost server </p>
	<p>1.4 Starting Node.js </p>
<p>	1.5 Node.js  syntax and variables </p>
<p>	Operators and Expressions </p>
<p>	1.7 Conditional Branching and Looping Statements</p>
<p>	1.8Learning Arrays in Node.js</p>
             </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section 2: Node.js - The Core Logics and Techniques 
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>
            <p> 	2.1 String and Math functions in Node.js </p>
<p>	2.2 Introduction HTML Form Elements and Fields </p>
<p>	2.3 Accessing Node.js, HTTP Data </p>
<p>	2.4 Query Strings and Hyperlinks </p>
<p>	2.5 Describing Pre-Defined Variables - Super Global Arrays </p>
<p>	2.6 Understanding NPM (Node Packeage Modular)</p>
<p>	2.7 Usage of import and require statements </p> 

           </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section 3: Node.js and MySQL - The Structured Repository 

</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>
            <p> 	3.1 Node.js MySQL Connectivity </p>
<p>3.2 Integrating Web Forms and Database </p>
<p>3.3 Using Node.js MySQL package
  </p>
      
             </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel17'} onChange={this.handleChange('panel17')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section 4: Learn More Advanced Techniques in Node.js
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>
            <p>	4.1 Introduction to Functional Programming</p>
<p>	4.2 Events and handlers </p>
	<p>4.3 Events And Process On Firing Events </p>
<p>4.4 Constructors </p>
<p>	4.5 Exception Handling </p>
<p>	4.6 Regular Expressions </p>
<p>	4.7 Session Handling</p> 
<p>	4.8 Using Cookies
</p>
          </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel9'} onChange={this.handleChange('panel9')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section 6: Working with  JSON 
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>
            <p>5.1 Introduction to JSON </p> 
<p>	5.2 Understanding the power of json</p>
<p>	5.3 Building a Sample Web Application 
               </p>
          </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel10'} onChange={this.handleChange('panel10')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section 7: Express Framework 
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>
           <p>7.1 Introduction to  Express Frameworks</p> 
<p>	7.2 Working with Express Framework </p> 
<p>	7.3 Routing </p>
<p>	7.4 Routes,Views and Public Assets</p> 
<p>	7.6 Helpers and Modules</p>
<p>	7.7 FormValidation </p><p>7.8 FetchingData using </p>
<p>	7.9 Session </p>
<p>	7.10 Database 
</p>
          </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel11'} onChange={this.handleChange('panel11')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section 8: Payment Gateway, E-mail and Social Media Networks 
</b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>
            <p>8.1 Integration of payment gateway </p>
          <p>	8.2 Integrating emails to web application </p>
<p>	8.3 Integrating social media networks to web application 
           </p>
          </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
   
        <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel12'} onChange={this.handleChange('panel12')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section 9: Web Security </b></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           <div style={{fontSize:'12px',color:'#264375'}}>
            <p>	10.1 Data Validation </p>  
          <p>	10.2 SQL Injection </p>
<p>10.3 Cross Site Scripting

 
           </p>
          </div>      
          </ExpansionPanelDetails>
        </ExpansionPanel>
   
        <Typography style={{fontSize:'20px',marginTop:'2%',marginLeft:'3%',color:'#263475'}}><b>MySQL</b></Typography>
     
     <ExpansionPanel  style={{height:'7%',marginTop:'2%'}} expanded={expanded === 'panel18'} onChange={this.handleChange('panel18')}>
       <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section 1: Relational Database</b></Typography>
       </ExpansionPanelSummary>
       <ExpansionPanelDetails>
        <div style={{fontSize:'12px',color:'#264375'}}>
         <p>1.1	Basics </p> 
<p>1.2	Brief History of MySQL </p>
   <p>1.3	Relational Databases and  Popular Databases </p>   
<p>1.3	SQL Statements</p>
      </div>      
       </ExpansionPanelDetails>
     </ExpansionPanel>
    
     <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel19'} onChange={this.handleChange('panel19')}>
       <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section 2: Data Manipulation Language (DML)  </b></Typography>
       </ExpansionPanelSummary>
       <ExpansionPanelDetails>
        <div style={{fontSize:'12px',color:'#264375'}}>
         <p>	2.1 INSERT </p>
          <p>	2.2 UPDATE </p>
          <p>	2.3 DELETE </p>
           <p>	2.4 SELECT </p>
      </div>      
       </ExpansionPanelDetails>
     </ExpansionPanel>
     <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel15'} onChange={this.handleChange('panel15')}>
       <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section3: Data Definition Language (DDL)  </b></Typography>
       </ExpansionPanelSummary>
       <ExpansionPanelDetails>
        <div style={{fontSize:'12px',color:'#264375'}}>
         <p>	3.1 CREATE </p>
          <p>	3.2 ALTER </p>
         	<p>3.3 DROP </p>
      </div>      
       </ExpansionPanelDetails>
     </ExpansionPanel>
     <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel16'} onChange={this.handleChange('panel16')}>
       <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section4: Sub-Queries, Joins and Unions with MySQL  </b></Typography>
       </ExpansionPanelSummary>
       <ExpansionPanelDetails>
        <div style={{fontSize:'12px',color:'#264375'}}>
         <p>  4.1 Order By,  Like , And & Or, Where ,  Between </p>  
          <p> 4.2 Joins &  Unions </p>  
          <p> 4.3 Aggregate Functions and Grouping </p>
      </div>      
       </ExpansionPanelDetails>
     </ExpansionPanel>
    
     <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel17'} onChange={this.handleChange('panel17')}>
       <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section 5: Constraints and Normalization  </b></Typography>
       </ExpansionPanelSummary>
       <ExpansionPanelDetails>
        <div style={{fontSize:'12px',color:'#264375'}}>
         <p>5.1 Understanding Primary and Foreign Keys </p>
          <p>5.2 Understanding Database Normalization</p> 
           <p>  5.3 Views and Triggers</p>
      </div>      
       </ExpansionPanelDetails>
     </ExpansionPanel>

     <Typography style={{fontSize:'20px',marginTop:'2%',marginLeft:'3%',color:'#264375'}}><b>React</b></Typography>
     
     <ExpansionPanel  style={{height:'7%',marginTop:'2%'}} expanded={expanded === 'panel20'} onChange={this.handleChange('panel20')}>
       <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section 1: Introduction to concept of react</b></Typography>
       </ExpansionPanelSummary>
       <ExpansionPanelDetails>
        <div style={{fontSize:'12px',color:'#264375'}}>
         <p>1.1	Basics </p> 
<p>1.2	Understanding the nature of react</p>
<p>1.3	The Power Of React
</p>
      </div>      
       </ExpansionPanelDetails>
     </ExpansionPanel>
    
     <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel21'} onChange={this.handleChange('panel21')}>
       <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section 2: Working With React</b></Typography>
       </ExpansionPanelSummary>
       <ExpansionPanelDetails>
        <div style={{fontSize:'12px',color:'#264375'}}>
         <p>2.1 Components </p>
<p>	2.2 State </p>
<p>	2.3 Props </p>
<p>	2.4 Render </p>
      </div>      
       </ExpansionPanelDetails>
     </ExpansionPanel>
     <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel22'} onChange={this.handleChange('panel22')}>
       <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section3: State management </b></Typography>
       </ExpansionPanelSummary>
       <ExpansionPanelDetails>
        <div style={{fontSize:'12px',color:'#264375'}}>
         <p>	3.1 Understanding the problem</p>
<p>3.2 Solution – Context API </p>
<p>	3.3 Working with Context API </p>
      </div>      
       </ExpansionPanelDetails>
     </ExpansionPanel>
    
     <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel23'} onChange={this.handleChange('panel23')}>
       <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section4: Interacting of Components	 </b></Typography>
       </ExpansionPanelSummary>
       <ExpansionPanelDetails>
        <div style={{fontSize:'12px',color:'#264375'}}>
         <p>4.1 Passing state</p> 
<p>4.2 Using Parent’s State As Props</p>
<p>	4.3 Changing the state of the parent</p>
 
      </div>      
       </ExpansionPanelDetails>
     </ExpansionPanel>
    
     <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel24'} onChange={this.handleChange('panel24')}>
       <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section 5: Working with React Routers </b></Typography>
       </ExpansionPanelSummary>
       <ExpansionPanelDetails>
        <div style={{fontSize:'12px',color:'#264375'}}>
         <p>	5.1 Understanding Routing In React</p>
<p>	5.2 Switching Between Components</p> 
      </div>      
       </ExpansionPanelDetails>
     </ExpansionPanel>
    
     <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel25'} onChange={this.handleChange('panel25')}>
       <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      {this.state.save}<Typography style={{marginTop:'0.25%',color:'#264375'}}><b>Section 6: Advance  React </b></Typography>
       </ExpansionPanelSummary>
       <ExpansionPanelDetails>
        <div style={{fontSize:'12px',color:'#264375'}}>
         <p>	6.1 Understanding Higher Components</p>
<p>6.2 Code Splitting </p>
	<p>6.3 Server Side Rendering</p>
      </div>      
       </ExpansionPanelDetails>
     </ExpansionPanel>
    
        </Card>
                 <br/>    

      </div>
    );
  }
}

Node.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Node);
  
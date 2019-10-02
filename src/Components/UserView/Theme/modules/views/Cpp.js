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
backgroundColor:'blue',

    },
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },

})

class Cpp extends React.Component {
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
          <Paper style={{background:'#263475',width:'100%',marginTop:'2%',color:'#264375',}}>
    <Typography style={{fontSize:'40px',color:'white',marginRight:'-2%',paddingTop:'50px',marginTop:'-30px'}}>C++ Programming Language Certified Associate</Typography>
    <div style={{fontSize:'30px',color:'white'}} >
    Develop system applications from scratch

</div>
      <Typography style={{color:'white',height:'100%',width:'50%',marginTop:'%',fontSize:'20px'}}><hr/>
      Duration:4 weeks | Certifited trainings
      <div style={{marginTop:''}}>C Language(Associate Level):</div>
      <p style={{marginTop:'-2px'}}> Looking to master web application development for virtually any computing  platform, this java Certification Training Course is for you .learn the advanced concepts of Core Java 8 and Java EE,Hibernate and Spring frameworks etc</p>

      </Typography>
         </Paper>
         </center>


         <Card style={{width:'100%',height:'50%',marginTop:'2%',flexDirection:'row'}}>
          <Typography style={{fontSize:'20px',marginLeft:'30%',width:'35%',color:'#263475',borderBottom:'#263475 1px dotted'}}><b>About Java Programming</b>
</Typography>
<Grid  container spacing={32}>
<Grid item xs={6} style={{fontSize:'13px',display:'flex'}}>
<img src={`${BaseUrl}/images/dot.png`} style={{height:'20px',marginTop:'15px'}}></img><p  style={{marginLeft:'2%',textAlign:'flex',marginRight:'2%',paddingTop:'-10px'}}>A 6-week online training program by Campusshala will cover all the topics of Java which includes basics of Java, oops concepts, exception handling, multithreading, collection framework.</p></Grid>

<Grid item xs={6} style={{fontSize:'13px',display:'flex'}}>
<img src={`${BaseUrl}/images/dot.png`} style={{height:'20px',marginTop:'15px'}}></img><p  style={{marginLeft:'2%',textAlign:'flex',marginRight:'2%',paddingTop:'-10px'}}>Webscripting like HTML, CSS, JQuery, JSON, JDBC, Servlets, Introduction to Spring Boot, Install the Spring Boot Command Line Interface, Build and deploy Spring Boot Applications, understand the best practices in designing RESTful web services,learn to connect web services to a Database using JPA and Hibernate with Spring Boot.</p></Grid>

 </Grid>
 <Grid  container spacing={32}>

<Grid item xs={6}>
           <img src={`${BaseUrl}/images/dot.png`} style={{height:'20px',marginTop:'10px'}}></img><p style={{ marginLeft:'6%' ,marginTop:'-6%',fontSize:'13px', }}>For a great hands on learning experience, this training program is packed with assignments, assessment tests, code challenges, quizzes, and exercises.
           </p>
 </Grid>

           <Grid item xs={6}>
           <img src={`${BaseUrl}/images/dot.png`} style={{height:'20px',marginTop:'10px'}}></img><p style={{ marginLeft:'6%' ,marginTop:'-6%',fontSize:'13px', }}>At the end of this training program, you will be having a project which will be value addition in your resume. For doubt clearing, you would get 1-hour live chat support with the trainer every day. You can also use the Q&A forum provided.
           </p>
 </Grid>
 </Grid>
            </Card>

            <Typography style={{fontSize:'20px',textAlign:'center',marginTop:'2%',color:'#263475',textAlign:'center'}}><b> Course Content </b></Typography>

<Card style={{width:'80%',height:'50%',marginLeft:'10%', marginTop:'1%'}} >
   <Typography style={{fontSize:'20px',marginTop:'2%',marginLeft:'6%',color:'#263475'}}><b> C++ Language </b><span>
<Button style={{fontSize:'20px',marginTop:'2%'}} href="/pdf/Cpp.rar" >
 <b style={{fontSize:'10px',color:'#264375'}}><img src={`${BaseUrl}/images/download.png`}  style={{ marginTop:'-50%',height:'20px',width:'20px'}}></img>Download Syllabus</b>
</Button>

</span></Typography>


<ExpansionPanel  style={{height:'7%',marginTop:'2%'}} expanded={expanded === 'panel20'} onChange={this.handleChange('panel20')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 1: Introduction to C++</b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>1.1 Starting with C++</p>
<p>1.2 How C++ evolved from C?</p>
<p>1.3 Features of C++</p>
<p>1.4 Procedure-oriented programming</p>
<p>1.5 OOP vs. procedure-oriented programming</p>
<p>1.6 The basic anatomy of a C++ program</p>
<p>1.7 Starting with a simple ͞Hello World͟ program</p>
<p>1.8 Compiling, linking and running a C++ program</p>
</div>
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel21'} onChange={this.handleChange('panel21')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 2: Object-Oriented Programming Concepts</b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>2.1 Abstraction</p>
<p>2.2 Inheritance</p>
<p>2.3 Polymorphism</p>
<p>2.4 Data Binding</p>
<p>2.5 Encapsulation</p>
<p>2.6 Classes, subclasses and Objects</p>
</div>
 </ExpansionPanelDetails>
</ExpansionPanel>
<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel22'} onChange={this.handleChange('panel22')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 3: The Basics of C++</b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
<p>3.1 Base Data Types and sizes</p>
<p>3.2 User-defined Data Types</p>
<p>3.3 Variable Declarations, Variable Names</p>
<p>3.4 Dynamic initialization of variables</p>
<p>3.5 Constants and its types<br/>
• Character Constants<br/>
 • String Constants</p>
<p>3.6 Standard input and standard output<br/>
 • Formatted input – cin<br/>
 • Formatted output – cout<br/>
 • Use of insertion and extraction operators</p>
</div>
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel23'} onChange={this.handleChange('panel23')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 4: Using Functions/Procedures </b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
<p>4.1 Why Functions?</p>
<p>4.2 Anatomy of a Function</p>
<p>4.3 Returning values from functions</p>
<p>4.4 Arguments Passed by Value</p>
<p>4.5 Passing Addresses of Arguments</p>
<p>4.6 Concept of variable scope and scope rules</p>
<p>4.7 Static and automatic variables</p>
<p>4.8 Global variables </p>
</div>
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel24'} onChange={this.handleChange('panel24')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 5: Pointers and Arrays </b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
<p>5.1 Pointers<br/>
 • What is a Pointer?<br/>
 • Pointer Initialization<br/>
 • Pointer Operators<br/>
 • The & Operator<br/>
 • Pointer Arithmetic<br/>
 • Functions and pointers</p>
<p>5.2 Understanding Arrays<br/>
 • Arrays<br/>
 • Initializing Arrays<br/>
 • Passing Arrays to Functions</p>
<p>5.3 Pointers and Arrays</p>
<p>5.4 Pointer to an Array</p>
<p>5.5 Array of pointers</p>
<p>5.6 Strings</p>

</div>
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel25'} onChange={this.handleChange('panel25')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 6: Binding data and functions  </b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
<p>6.1 Concept of a class</p>
<p>6.2 Defining a class</p>
<p>6.3 Creating an object</p>
<p>6.4 Object Scope</p>
<p>6.5 Data Abstraction</p>
<p>6.6 Enforcing Data Encapsulation</p>
<p>6.7 this Pointer ! Dynamic creation of objects</p>
<p>6.8 Constructors and Destructors<br/>
 • The Default Constructor<br/>
 • The Destructor <br/>
 • Parameterized Constructors<br/>
 • Copy Constructor</p>
<p>6.9 Defining member functions<br/>
 • Methods and address modifiers</p>
 <p>6.10 Accessing class data and methods</p>
 <p>6.11 Friend class and friendly functions</p>
 <p>6.12 Returning objects</p>
 <p>6.13 Arrays of Objects</p>
</div>
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel26'} onChange={this.handleChange('panel26')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 7: Function and Operator Overloading  </b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>







   <p>7.1 Function Overloading<br/>
 • Using overloaded functions<br/>
 • Rules for overloading</p>
<p>7.2 Operator overloading and its uses<br/>
 • Overloading unary and ďinary</p>
<p>7.3 Operators<br/>
 • Overloading the assignment</p>
<p>7.4 Operator<br/>
 • Overloading the insertion operator<br/>
 • Overloading the increment and decrement operator</p>
<p>7.5 Dealing with strings using operators</p>
<p>7.6 Converting data types<br/>
 • Basic to class type<br/>
 • Class to basic type<br/>
 • Class to another class type</p>

</div>
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel27'} onChange={this.handleChange('panel27')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 8: Reusing classes
 </b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
<p>8.1 Inheritance-Base and Derived classes</p>
<p>8.2 Inheritance types</p>
<p>8.3 Scope Resolution operator</p>
<p>8.4 Access Modifiers</p>
<p>8.5 Access and Inheritance</p>
<p>8.6 Constructors and Inheritance</p>
<p>8.7 Multiple & Multilevel Inheritance</p>
<p>8.8 Calling base class constructor</p>
<p>8.9 Overriding base class members</p>
</div>
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel28'} onChange={this.handleChange('panel28')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 9: Virtual functions and Polymorphism</b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
<p>9.1 Virtual & non-virtual Overriding</p>
<p>9.2 Virtual functions</p>
<p>9.3 Rules for virtual functions</p>
<p>9.4 Pure virtual functions</p>
<p>9.5 Static and Dynamic Binding</p>
<p>9.6 Virtual base classes</p>
</div>
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel29'} onChange={this.handleChange('panel29')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 10: Templates, Exception Handling </b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
<p>10.1 Templates</p>
<p>10.2 Function templates</p>
<p>10.3 Class templates</p>
<p>10.4 Exception handling</p>
</div>
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel30'} onChange={this.handleChange('panel30')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 11: IOS Stream and File Handling Object Persistence  </b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
<p>11.1 Console I/O Opration Formatted & Unformatted,<br/>
IStream, FStream, SStream Classes,<br/>
Method Write (), Read (), Get (), Put (), E.t.c, </p>
</div>
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel31'} onChange={this.handleChange('panel31')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Miscellaneous Topics </b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
<p>12.1 Aggregation</p>
<p>12.2 Association</p>
<p>12.3 Types of Objects</p>
<p>12.4 OOA & OOD</p>
<p>12.5 UML</p>
</div>
 </ExpansionPanelDetails>
</ExpansionPanel>

  </Card><br/>
    </div>
    );
  }
}

Cpp.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(Cpp);

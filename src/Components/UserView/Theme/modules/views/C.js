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

class C extends React.Component {
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
    <Typography style={{fontSize:'40px',color:'white',marginRight:'-2%',paddingTop:'50px',marginTop:'-30px'}}>CLA – C Programming Language Certified Associate</Typography>
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
   <Typography style={{fontSize:'20px',marginTop:'2%',marginLeft:'6%',color:'#263475'}}><b> Introduction </b><span> 
<Button style={{fontSize:'20px',marginTop:'2%'}} href="/pdf/C-language.rar" >
 <b style={{fontSize:'10px',color:'#264375'}}><img src={`${BaseUrl}/images/download.png`}  style={{ marginTop:'-50%',height:'20px',width:'20px'}}></img>Download Syllabus</b>
</Button>

</span></Typography>

<ExpansionPanel  style={{height:'7%',marginTop:'2%'}} expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
   {this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Course description </b></Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
     <div style={{fontSize:'12px',color:'#263475'}}>
     <p>The course fully covers the basics of programming in the "C"
programming language and demonstrates fundamental
programming techniques, customs and vocabulary including the
most common library functions and the usage of the preprocessor. </p>
  </div>
       </ExpansionPanelDetails>
  </ExpansionPanel>
  <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
   {this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Learning objectives </b></Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
     <div style={{fontSize:'12px',color:'#263475'}}>
     <p>To familiarize the trainee with basic concepts of computer
programming and developer tools.</p>
<p>To present the syntax and semantics of the "C" language as well as
data types offered by the language</p>
<p>To allow the trainee to write their own programs using standard
language infrastructure regardless of the hardware or software
platform </p>
  
  </div>
       </ExpansionPanelDetails>
  </ExpansionPanel>
  <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
   {this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Course outline </b></Typography>

    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
     <div style={{fontSize:'12px',color:'#263475'}}>
      <p>Introduction to compiling and software development</p>
        <p>Basic scalar data types and their operators</p>
        <p>Flow control</p>
        <p>Complex data types: arrays, structures and pointers</p>
        <p>Structuring the code: functions and modules</p>
        <p>Preprocessing source code </p>
       </div>      
    </ExpansionPanelDetails>
  </ExpansionPanel>
  


        
<Typography style={{fontSize:'20px',marginTop:'2%',marginLeft:'6%',color:'#263475'}}><b>C Language</b></Typography>

<ExpansionPanel  style={{height:'7%',marginTop:'2%'}} expanded={expanded === 'panel20'} onChange={this.handleChange('panel20')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 1: Chapters</b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>1.1 Absolute basics</p>
<p>1.2 Languages: natural and artificial</p>
<p>1.3 Machine languages</p>
<p>1.4 High-level programming languages</p>
<p>1.5 Obtaining the machine code: compilation process</p>
<p>1.6 Recommended readings</p>
<p>1.7 Your first program</p>
<p>1.8 Variable – why?</p>
<p>1.9 Integer values in real life and in "C", integer literals</p> 
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel21'} onChange={this.handleChange('panel21')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 2: Data Types</b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>2.1 Floating point values in real life and in "C", float literals</p>
<p>2.2 Arithmetic operators</p>
<p>2.3 Priority and binding</p>
<p>2.4 Post- and pre -incrementation and -decrementation</p>
<p>2.5 Operators of type op=</p>
<p>2.6 Char type and ASCII code, char literals</p>
<p>2.7 Equivalence of int and char data</p>
<p>2.8 Comparison operators</p>
<p>2.9 Conditional execution and if keyword</p>
<p>2.10 printf() and scanf() functions: absolute basics</p>
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>
<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel22'} onChange={this.handleChange('panel22')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section3: Flow control </b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>3.1 conditional execution continued: the ͞else͟ branch </p>
<p>3.2 More integer and float types</p>
<p>3.3 Conversions – why?</p>
<p>3.4 Typecast and its operators</p>
<p>3.5 Loops – while, do and for</p>
<p>3.6 Controlling the loop execution – break and continue</p>
<p>3.7 Logical and bitwise operators </p>
<p>3.8 Switch: different faces of ͚if͛</p>
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel23'} onChange={this.handleChange('panel23')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section4: Arrays & Pointers</b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>4.1 Arrays (vectors) – why do you need them?</p>
<p>4.2 Sorting in real life and in a computer memory</p>
<p>4.3 Initiators: a simple way to set an array</p>
<p>4.4 Pointers: another kind of data in "C"</p>
<p>4.5 An address, a reference, a dereference and the size of operator</p>
<p>4.6 Simple pointer and pointer to nothing (NULL)
& operator</p>
<p>4.7 Pointers arithmetic</p>
<p>4.8 Pointers vs. arrays: different forms of the same phenomenon</p>
<p>4.9 Using strings: basics</p>
<p>4.10 Basic functions dedicated to string manipulation </p>
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel24'} onChange={this.handleChange('panel24')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 5: Memory management and Structures  </b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>5.1 The meaning of array indexing</p>
<p>5.2 The usage of pointers: perils and disadvantages</p>
<p>5.3 void type</p>
<p>5.4 Arrays of arrays and multidimensional arrays</p>
<p>5.5 Memory allocation and deal location: malloc() and free() functions</p>
<p>5.6 Arrays of pointers vs. multidimensional arrays</p>
<p>5.7 Structures – why?</p>
<p>5.8 Declaring, using and initializing structures</p>
<p>5.9 Pointers to structures and arrays of structures</p>
<p>5.10 Basics of recursive data collections</p>
 
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel25'} onChange={this.handleChange('panel25')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 6: Functions  </b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>6.1 Functions – why?</p>
<p>6.2 How to declare, define and invoke a function</p>
<p>6.3 Variables' scope, local variables and function parameters</p>
<p>6.4 Pointers, arrays and structures as function parameters</p>
<p>6.5 Function result and return statement</p>
<p>6.6 void as a parameter, pointer and result</p>
<p>6.7 Parameterizing the main function</p>
<p>6.8 External function and the extern declarator</p>
<p>6.9 Header files and their role </p>
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel26'} onChange={this.handleChange('panel26')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 7: Files and streams </b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>7.1 Files vs. streams: where does the difference lie?</p>
<p>7.2 Header files needed for stream operations</p>
<p>7.3 FILE structure</p>
<p>7.4 Opening and closing a stream, open modes, errno variable</p>
<p>7.5 Reading and writing to/from a stream</p>
<p>7.6 Predefined streams: stdin, stdout and stderr</p>
<p>7.7 Stream manipulation: fgetc(), fputc(), fgets() and fputs() functions</p>
<p>7.8 Raw input/output: fread() and fwrite() functions</p>

</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel27'} onChange={this.handleChange('panel27')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 8: Preprocessor and complex declarations 
 </b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>8.1 Preprocessor – why?</p>
<p>8.2 #include: how to make use of a header file</p>
<p>8.3 #define: simple and parameterized macros</p>
<p>8.4 #undef directive</p>
<p>8.5 Predefined preprocessor symbols</p>
<p>8.6 Macrooperators: # and ##</p>
<p>8.7 Conditional compilation: #if and #ifdef directives</p>
<p>8.8 Avoiding multiple compilations of the same header files</p>
<p>8.9 Scopes of declarations, storage classes</p>
<p>8.10 User -defined types – why?</p>
<p>8.11 Pointers to functions</p>
<p>8.12 Analyzing and creating complex declarations</p>
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel28'} onChange={this.handleChange('panel28')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 9: C Graphics, Sound and Animation </b></Typography>

 </ExpansionPanelSummary>
</ExpansionPanel>

  </Card><br/>
    </div>
    );
  }
}

C.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(C);
  
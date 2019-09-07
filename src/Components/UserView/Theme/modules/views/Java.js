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

class Java extends React.Component {
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
    <Typography style={{fontSize:'40px',color:'white',marginRight:'-2%',paddingTop:'50px',marginTop:'-30px'}}>Java Certification Training Course</Typography>
    <div style={{fontSize:'30px',color:'white'}} >
    Develop system applications from scratch

</div>
      <Typography style={{color:'white',height:'100%',width:'50%',marginTop:'%',fontSize:'20px'}}><hr/>
      Duration:4 weeks | Certifited trainings
      <div style={{marginTop:''}}>Java Core & Advanced  :</div>
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
   <Typography style={{fontSize:'20px',marginTop:'2%',marginLeft:'6%',color:'#263475'}}><b> Core Java </b><span> 
<Button style={{fontSize:'20px',marginTop:'2%'}} href="/pdf/Java.rar" >
 <b style={{fontSize:'10px',color:'#264375'}}><img src={`${BaseUrl}/images/download.png`}  style={{ marginTop:'-50%',height:'20px',width:'20px'}}></img>Download Syllabus</b>
</Button>

</span></Typography>
  <ExpansionPanel  style={{height:'7%',marginTop:'2%'}} expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
   {this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 1:Basics of Java</b></Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
     <div style={{fontSize:'12px',color:'#263475'}}>
     <p>1.1 Java - What, Where and Why?</p>
     <p>1.2 History and Features of Java </p>
<p>1.3  Internals of Java Program</p>
<p>1.4  Difference between JDK,JRE and JVM </p>
<p>1.5  Internal Details of JVM</p> 
<p>1.6  Variable and Data Type</p>
<p>1.7  Unicode System</p> 
<p>1.8  Naming Convention</p>
  
  </div>
       </ExpansionPanelDetails>
  </ExpansionPanel>
  <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
   {this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 2:OOPS Concepts</b></Typography>

    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
     <div style={{fontSize:'12px',color:'#263475'}}>
      <p> 2.1 Advantage of OOPs</p>
<p>2.2  Object and Class</p>
<p>2.3Method Overloading</p>
<p> 2.4 Constructor</p>
<p>2.5  static variable, method and block </p>
<p>2.6  this keyword</p>
<p>2.7 Inheritance </p>
<p>2.8  Aggregation and Composition</p>
<p> 2.9 Method Overriding</p>
<p>2.9  Covariant Return Type</p>
<p>2.10 super keyword</p>
<p>2.11 Instance Initializer block</p>
<p>2.12 final keyword</p>
<p>2.13 Runtime Polymorphism</p>
<p> 2.14 static and Dynamic binding</p>
<p>2.15 Abstract class and Interface</p>  
<p>2.16 Down casting with instance of operator</p>
<p>2.17 Package and Access Modifiers</p>
<p>  2.18 Encapsulation</p>
<p>2.19 Object class </p>
<p>2.20 Object Cloning</p>
<p> 2.21 Java Array</p>
<p> 2.22 Call By Value and Call By Reference</p>
<p> 2.23 Creating API Document</p>
       </div>      
    </ExpansionPanelDetails>
  </ExpansionPanel>
  <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
   {this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 3: Exception Handling</b></Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
     <div style={{fontSize:'12px',color:'#263475'}}>
      <p> 3.1 Exception Handling: What and Why? </p>
      <p>3.2  try and catch block 
      <p>3.3  Multiple catch block </p></p>
      <p>3.4  Nested try </p>
      <p>3.5  finally, block </p>
      <p>3.6  throw keyword </p>
      <p>3.7  Exception Propagation </p>
      <p>3.8  throws keyword</p> 
      <p>3.9  Exception Handling with Method Overriding</p>
      <p>3.10 Custom Exception</p>
       </div>      
    </ExpansionPanelDetails>
  </ExpansionPanel>
  <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
   {this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 4: Nested Classes
</b></Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
     <div style={{fontSize:'12px',color:'#263475'}}>
      <p> 4.1 Nested Class : What and Why?</p>
      <p>4.2  Member Inner class </p>
      <p>4.3  Anonymous Inner class </p>
      <p>4.4  Local Inner class, static nested class</p> 
      <p>4.5  Nested Interface </p>
</div>

    </ExpansionPanelDetails>
  </ExpansionPanel>

  <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
   {this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 5: Multithreading </b></Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
     <div style={{fontSize:'12px',color:'#263475'}}>
      <p>5.1  Multithreading:What and Why?</p>
      <p>5.2  Life Cycle of a Thread </p>
      <p>5.3  Creating Thread, Thread Scheduler,</p> 
      <p>5.4  Sleeping a thread, Joining a thread, </p>
      <p>5.5  Thread Priority,Daemon Thread, </p>
      <p>5.6  Thread Pooling, Thread Group</p> 
      <p>5.7  Performing multiple task by multiple thread </p>
      <p>5.8  Garbage Collection, Run able class. </p>
       </div>      
    </ExpansionPanelDetails>
  </ExpansionPanel>
  <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
   {this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 6: Synchronization 
</b></Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
     <div style={{fontSize:'12px',color:'#263475'}}>
      <p> 6.1 Synchronization: What and Why?</p>
      <p>6.2  synchronized method </p>
      <p>6.3  synchronized block</p> 
      <p>6.3  static synchronization </p>
      <p>6.4  Deadlock </p>
      <p>6.5  Inter-thread Communication</p>
      <p>6.6  Interrupting Thread </p>
 

     </div>      
    </ExpansionPanelDetails>
  </ExpansionPanel>
  <ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
   {this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 7: Generic & Collection

</b></Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
     <div style={{fontSize:'12px',color:'#263475'}}>
      <p> 7.1 Collection definition</p>
      <p>7.2  Hierarchy of collections</p>
      <p>7.3 Collection interface</p>
      <p>7.4  Collection class</p>
      <p>7.5  List interface</p>
      <p>7.6  Various class under collection</p>
      <p>7.7  Bulletin methods of all the above class</p>
      <p>7.8  Using collection framework for sorting</p>
      <p> i) Comparable interface</p>
      <p>ii) Comparator interface</p>
      <p>7.9  Advantages of comparator over comparable</p>
      <p>7.10 Overriding hashcode() and equal()</p>
      <p>7.11 Wrapper class</p>
      <p>7.12 Byte, Short, Integer, Long float, Double</p>
      <p>7.13 Character Boolean </p>
      <p>7.14 Auto unboxing and boxing</p>
<p>7.15 Programming examples on collections</p>
</div>      
    </ExpansionPanelDetails>
  </ExpansionPanel>



        
<Typography style={{fontSize:'20px',marginTop:'2%',marginLeft:'6%',color:'#263475'}}><b>Advance Java</b></Typography>

<ExpansionPanel  style={{height:'7%',marginTop:'2%'}} expanded={expanded === 'panel20'} onChange={this.handleChange('panel20')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 1: Input and output</b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>1.1 FileOutputStream&FileInputStream </p>
   <p>1.2 ByteArrayOutputStream </p>
   <p>1.3 SequenceInputStream </p>
   <p>1.4 BufferedOutputStream&BufferedInputStream </p>
   <p>1.5 File Writer&File Reader </p>
   <p>1.6 CharArrayWriter </p>
   <p>1.7 Input from keyboard by InputStreamReader </p>
   <p>1.8 Input from keyboard by Console </p>
   <p>1.9 Input from keyboard by Scanner </p>
   <p>1.10  Print Stream class </p>
   <p>1.11  Print Writer class</p> 
   <p>1.12  Compressing and Uncompressing File </p>
   <p>1.13  Reading and Writing data simultaneously </p>
   <p>1.15  DataInputStream and DataOutputStream </p>
   <p>1.16  Stream Tokenizer class</p> 
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel21'} onChange={this.handleChange('panel21')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 2: Serialization</b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>2.1 Serialization & Deserialization</p>
   <p>2.2 Serialization with IS-A and Has-A</p>
   <p>2.3 transient keyword </p>
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>
<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel22'} onChange={this.handleChange('panel22')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section3: Networking </b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>3.1 Socket Programming </p>
   <p>3.2 URL class </p>
   <p>3.3 Displaying data of a web page </p>
   <p>3.4 I net Address class </p>
   <p>3.5 Datagram Socket and Datagram Packet </p>
   <p>3.6 RMI (Remote Method Invocation )</p>
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel23'} onChange={this.handleChange('panel23')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section4: Web Scripting </b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>4.1 HTML</p>
   <p>4.2 Java Script, JQuery</p>
<p>4.3  AJAX, JSON</p>
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel24'} onChange={this.handleChange('panel24')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 5: JDBC </b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>5.1 SQL queries and execution</p>
   <p>5.2 Insert, Select, Delete, Update query</p>
   <p>5.3 Statements and prepared statement</p>
   <p>5.4 ResultSet</p>
   <p>5.5 DatabaseMetaData</p>
   <p>5.6 ResultsetMetaData</p>
   <p>5.7 Transaction and batch update</p>
   <p>5.8 Basic of servlets, Servlet API</p>
 
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel25'} onChange={this.handleChange('panel25')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 6: Servlets </b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>6.1 Basic of servlets, Servlet api</p>
   <p>6.2 Genric servlets, HTTP servlets</p>
   <p>6.3 Servlets life cycle</p>
   <p>6.4 Init(), sevice(), destroy(), do get(), do post()</p>
   <p>6.5 Steps to create servlets in Tom cat</p>
   <p>6.6 Constant web/ static web</p>
   <p>6.7 Dynamic web</p>
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel26'} onChange={this.handleChange('panel26')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 7:JSP </b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>7.1 Basics of JSP development</p>
   <p>7.2 JSP life cycle & architecture</p>
   <p>7.3 Action tags</p>
   <p>7.4 Comment, Declaration, Declarative and Scriptlet tag</p>
   <p>7.5 Page and include directive</p>
   <p>7.6 Jspinit() jspDestroy()</p>

</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel27'} onChange={this.handleChange('panel27')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 8:Introduction Spring Boot ,Spring Boot Principles
 </b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>8.1 Spring Boot vs. Spring</p>
   <p>8.2 Creating a Spring Boot Web application with Spring Initializer, STS, and curl </p>
<p>8.3  Spring Boot CLI </p>
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel28'} onChange={this.handleChange('panel28')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 9:Configuration, Auto-Configuration, And Profile
Spring Boot Web Development And Rest Services </b></Typography>

 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>9.1 Spring web MVC or Jersey</p>
   <p>9.2 GSP Templates</p>
   <p>9.3 Creating a RESTful API</p>
 
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel29'} onChange={this.handleChange('panel29')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 10 :DATA ACCESS (Hibernate) </b></Typography>

 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>10.1  JDBC</p>
   <p>10.2 JPA</p>
   <p>10.3  SQL</p>
   <p>10.4  Spring Data REST</p>
   <p>10.5  NoSQL – MongoDB</p>
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel30'} onChange={this.handleChange('panel30')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 11: Security </b></Typography>

 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>11.1 Auto-configuration/simple security</p>
   <p>11.2 JDBC security</p>
 <p>11.3  OAuth2</p>

</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel31'} onChange={this.handleChange('panel31')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 12: Messageing</b></Typography>

 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>12.1  RabbitMQ</p>
   <p>12.2  Redis pub-sub</p>

</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel32'} onChange={this.handleChange('panel32')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Deployement </b></Typography>

 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
   <p>13.1 Continuous Development and Delivery</p>
   <p>13.2 JAR/WAR</p>
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>
  </Card>
  <br/>
    </div>
    );
  }
}

Java.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Java);
  
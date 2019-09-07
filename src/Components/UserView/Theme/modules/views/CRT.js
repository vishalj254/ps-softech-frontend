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

class CRT extends React.Component {
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
    <Typography style={{fontSize:'40px',color:'white',marginRight:'-2%',paddingTop:'50px',marginTop:'-30px'}}>Campus Recruitment Training</Typography>
    
      <Typography style={{color:'white',height:'100%',width:'50%',marginTop:'%',fontSize:'20px'}}><hr/>
      Duration:6 weeks | Certifited trainings
      

      </Typography>
      <br/>
         </Paper>
         </center>


         <Card style={{width:'100%',height:'50%',marginTop:'2%',flexDirection:'row'}}>
          <Typography style={{fontSize:'20px',marginLeft:'30%',width:'35%',color:'#263475',borderBottom:'#263475 1px dotted'}}><b>About Campus Recruitment Training Program</b>
</Typography>
<Grid  container spacing={32}>
<Grid item xs={6} style={{fontSize:'13px',display:'flex'}}>
<img src={`${BaseUrl}/images/dot.png`} style={{height:'20px',marginTop:'15px'}}></img><p  style={{marginLeft:'2%',textAlign:'flex',marginRight:'2%',paddingTop:'-10px'}}>A 6-week training program by PS Softech will cover all the topics of CRT which includes Quantitative Aptitude, Logical Reasoning, Soft Skills.
</p></Grid>
           
<Grid item xs={6} style={{fontSize:'13px',display:'flex'}}>
<img src={`${BaseUrl}/images/dot.png`} style={{height:'20px',marginTop:'15px'}}></img><p  style={{marginLeft:'2%',textAlign:'flex',marginRight:'2%',paddingTop:'-10px'}}>Online/ Offline Test will be conduct
after the completion of every topic.
</p></Grid>
  
 </Grid>
 <Grid  container spacing={32}>

<Grid item xs={6}>
           <img src={`${BaseUrl}/images/dot.png`} style={{height:'20px',marginTop:'10px'}}></img><p style={{ marginLeft:'6%' ,marginTop:'-6%',fontSize:'13px', }}>For a great hands on learning experience, this training program is packed with assignments, assessment tests, quizzes, and exercises.     
           </p>
 </Grid>

           <Grid item xs={6}>
           <img src={`${BaseUrl}/images/dot.png`} style={{height:'20px',marginTop:'10px'}}></img><p style={{ marginLeft:'6%' ,marginTop:'-6%',fontSize:'13px', }}>Comprehensive Study Material
Practice Sheets/ Test paper.<br/>Min 5 - 8 Campus Drive for all the
Trained Students.
           </p>
 </Grid>
 </Grid>
            </Card>

            <Typography style={{fontSize:'20px',textAlign:'center',marginTop:'2%',color:'#263475',textAlign:'center'}}><b> Course Content </b></Typography>

<Card style={{width:'80%',height:'50%',marginLeft:'10%', marginTop:'1%'}} >
   <Typography style={{fontSize:'20px',marginTop:'2%',marginLeft:'6%',color:'#263475'}}><b> Campus Recruitment Training Program </b><span> 
<Button style={{fontSize:'20px',marginTop:'2%'}} href="/pdf/Crt.rar" >
 <b style={{fontSize:'10px',color:'#264375'}}><img src={`${BaseUrl}/images/download.png`}  style={{ marginTop:'-50%',height:'20px',width:'20px'}}></img>Download Syllabus</b>
</Button>

</span></Typography>

      
<ExpansionPanel  style={{height:'7%',marginTop:'2%'}} expanded={expanded === 'panel20'} onChange={this.handleChange('panel20')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 1: Quantitative Aptitude
</b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
<p>✓ Number System</p>
<p>✓ Logarithms</p>
<p>✓ Average</p>
<p>✓ Problem on Ages</p>
<p>✓ Surds and Indices</p>
<p>✓ Percentages</p>
<p>✓ Profit & Loss</p>
<p>✓ Ratio & Proportion</p>
<p>✓ Partnership</p>
<p>✓ Time & Work</p>
<p>✓ Pipes & Cisterns</p>
<p>✓ Time, Speed & Distance</p>
<p>✓ Problem on Trains</p>
<p>✓ Problem based on Boats & Streams</p>
<p>✓ Area</p>
<p>✓ Volume and Surface Area</p>
<p>✓ Allegations and Mixture</p>
<p>✓ Simple Interest & Compound Interest</p>
<p>✓ Permutation & Combination</p>
<p>✓ Probability</p>
<p>✓ Geometry</p>
<p>✓ Calender</p>
<p>✓ Clocks</p>
<p>✓ Height & Distances</p>
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel21'} onChange={this.handleChange('panel21')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 2: Logical Reasoning
</b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
<p>✓ Analogy /Series Completion</p>
<p>✓ Coding – Decoding</p>
<p>✓ Blood Relations</p>
<p>✓ Puzzle test</p>
<p>✓ Sitting Arrangement</p>
<p>✓ Direction Sense Test</p>
<p>✓ Logical Venn Diagrams</p>
<p>✓ Number, Ranking & Time Sequence Test</p>
<p>✓ Data Sufficiency</p>
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>
<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel22'} onChange={this.handleChange('panel22')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Section 3: Soft Skills</b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
<p>✓ Training need analysis (TNA)</p>
<p>✓ Behavioural training</p>
<p>✓ English language & Communication training</p>
<p>✓ Group Discussion</p>
<p>✓ Resume \ Curriculum vitae</p>
<p>✓ Interview Skills</p>
<p>✓ Email Etiquettes</p>
<p>✓ Business Etiquette and Customer Handling</p>
<p>✓ Etiquette of dressing</p>
<p>✓ Mock Group Discussions</p>
<p>✓ Mock Interviews</p>
<p>✓ Mock Recruitment Drive</p>
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel23'} onChange={this.handleChange('panel23')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Special Features</b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
<p>1. Comprehensive Study Material
Practice Sheets/ Test paper.</p>
<p>2. Online/ Offline Test will be conduct
after the completion of every topic.</p>
<p>3. Min 5 - 8 Campus Drive for all the
Trained Students.</p>
<p>4. Previous Year Question paper of
various companies to be solved in the
class.</p>
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

<ExpansionPanel  style={{height:'7%'}} expanded={expanded === 'panel24'} onChange={this.handleChange('panel24')}>
 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
{this.state.save}<Typography style={{marginTop:'0.25%',color:'#263475'}}><b>Placement Partners</b></Typography>
 </ExpansionPanelSummary>
 <ExpansionPanelDetails>
  <div style={{fontSize:'12px',color:'#263475'}}>
<p><h2><u>CoCubes.com</u></h2><img src='/images/cocubes.jpg'/></p>
<p><h2><u>Concept Campus</u></h2><img src='/images/conceptcampus.png'/></p>
</div>      
 </ExpansionPanelDetails>
</ExpansionPanel>

  </Card><br/>
    </div>
    );
  }
}

CRT.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CRT);
  
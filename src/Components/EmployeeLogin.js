import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {Link} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { postData } from "./FetchServices"
import {ClientURL} from './FetchServices'
import OTPInput from 'otp-input-react'


import renderHTML from 'react-render-html';
const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  paper_link: {
    marginTop: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 1}px ${theme.spacing.unit * 1}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});


class EmployerLogin extends React.Component {
    state = {
      user_name:this.props.uid,
      password:'',
      msg:'',
      result:[],
      open:false,
      confirmPassword:'',
      openOtp:false,
      OTP:'',
      saveOtp:'',
      openPassword:false
      
    };
    
    
    valid=()=>{
      
    let eerr=this.state.user_name.length!=0?'':'User Name Should Not Blank...';
     let perr=this.state.password.length!=0?'':'Password Should Not Blank...';
     if(eerr!='' || perr!='')
     {let errm=`<font color='red'>${eerr}<br>${perr}</font>`;
     this.setState({msg:errm})
    
       return(false);} 
     else    
     {
         let errm = `<font color='red'>${eerr}<br>${perr}</font>`
       return(true)
     }

    }
    checkLogin=async()=>{
     // this.props.history.replace({pathname:`/EmployerHome`,state:{result:this.state.result}});
       if(this.valid())
       {
        const body={user_name:this.state.user_name,password:this.state.password};
        
       const result = await postData(`internship/checkuserlogin`,body);
       console.log(result);
       
       if (result.result)
       {  // const {maincategoryid,maincategory,icon}=result[0];
      
       let data = JSON.stringify(result.result[0]);
        
       localStorage.setItem('employer',data); 
          this.setState({ result:data,msg:'' });
          alert("Login Success");
        this.props.history.replace({pathname:`/EmployerHome`,state:{result:this.state.result}});
        


       
       
       }
       else
       { this.setState({ msg:'<center><font color=white>Invalid Employer/Password/Check your email for verification....</font></center>' });
        console.log(`Invalid ${result.result}`);
       }
      }
    }

    handleForgot=async()=>{
    let body={
      'user_name':this.state.user_name
  }
  var result= await postData('userinterface/forgotpassword',body)
  if(result.RESULT){
    // if(true){
      // alert(result.RESULT)
      this.setState({saveOtp:result.RESULT})
      {this.handleClose()}
      this.setState({openOtp:true})
  }
  else{
      alert('Mobile No/Email not found')
      {this.handleClose()}
  }
  }

  handleOtp=()=>{
  if(this.state.OTP===this.state.saveOtp){
      alert("true")
      {this.handleCloseOtp()}
      this.setState({openPassword:true})
  }
  else{
      alert('Incorrect OTP')
      // {this.handleCloseOtp()}
  }
  }

  handlePassword=async()=>{
    if(this.state.password==this.state.confirmPassword){
          let body={
            'user_name':this.state.user_name,
            'password':this.state.password
        }
        var result= await postData('userinterface/updatepassword',body)
        if(result.RESULT){
            // alert('true')
            {this.handleClosePassword()}
            alert("Password Changed Successfully")
        }
        else{
            alert('Password Not Changed')
            {this.handleClosePassword()}
        }
    }
    else{
      alert("Password not matched...")
    }
  }

  handleClose=()=> {
    this.setState({open:false});
  }

   handleCloseOtp=()=> {
    this.setState({openOtp:false});
  }

   handleClosePassword=()=> {
    this.setState({openPassword:false});
  }

   
 UserLogin(classes) {
  
console.log("loginid");
  return (<div>
<Dialog open={this.state.open} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title"><img src={`${ClientURL}/images/cssbig.png`}></img></DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please enter your email address/mobile number here...
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  value={this.state.user_name}
                  label="Email Address"
                  onChange={(event)=>this.setState({user_name:event.target.value})}
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={()=>this.handleClose()} color="primary">
                  Cancel
                </Button>
                <Button onClick={this.handleForgot} color="primary">
                  Submit
                </Button>
              </DialogActions>
            </Dialog>

            {/* To enter the otp */}

            <Dialog open={this.state.openOtp} onClose={this.handleCloseOtp} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"><img src={`${ClientURL}/images/cssbig.png`}></img></DialogTitle>
        <DialogContent>
          <DialogContentText>
          {/* You receive on your mobile {mobileno} or email {email} */}
          {/* You receive on your mobile {starifyNumber(Result[0].mobileno)} or email {Result[0].email} */}
          </DialogContentText>
              <Typography component="h1" variant="h5">
              Enter OTP
            </Typography>
            <p></p>
            <OTPInput
            
            onChange={(event)=>this.setState({OTP:event})}
            autoFocus
            value={this.state.OTP}
            OTPLength={4}
            otpType="number"
            disabled={false}
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={this.handleCloseOtp} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleOtp} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>


<Dialog open={this.state.openPassword} onClose={this.handleClosePassword} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title"><img src={`${ClientURL}/images/cssbig.png`}></img></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Password
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Password"
            type="password"
            onChange={(event)=>this.setState({password:event.target.value})}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Confirm New Password"
            type="password"
            onChange={(event)=>this.setState({confirmPassword:event.target.value})}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClosePassword} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handlePassword} color="primary">
            Save Password
          </Button>
        </DialogActions>
      </Dialog>


    <main className={classes.main} style={{marginLeft:'65%',padding:'20px'}} >
      <CssBaseline />
      <Paper className={classes.paper} >
         
      <img src={`${ClientURL}/images/cssbig.png`}></img> 
     
        <Typography component="h1" variant="h5" style={{marginBottom:0}}>
         Employer Sign in
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="user_name">User Name</InputLabel>
            <Input id="user_name" name="user_name" autoFocus     onChange={e => this.setState({user_name: e.target.value })}/>
            
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password"    onChange={e => this.setState({password: e.target.value })} />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => this.checkLogin()}
          >
            Sign in
          </Button>
        </form>
        <br/>
        <Link onClick={(event)=>this.setState({open:true})} variant="body2">
                  Forgot password?
        </Link>
      </Paper>
        
      <Paper className={classes.paper_link}>
       <p> Don't have an account? <a href='javascript:;' onClick={()=>this.props.mainpage('ER')}>Sign Up</a></p>
        </Paper> 
        {renderHTML(this.state.msg)}    
    </main>
    </div>
  );
}

render(){
    const { classes } = this.props;
return(
    <div  style={{backgroundImage:`url(${"/images/employerlogin.png"})`}}>
    {this.UserLogin(classes)}
    </div>
    )

}

}
EmployerLogin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployerLogin);

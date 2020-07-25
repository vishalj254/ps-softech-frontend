import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getData } from "../../FetchServices"
import { postData } from "../../FetchServices"

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

 

function SimpleTable(props,rows) {
    const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Main Category Id</TableCell>
            <TableCell>Main Category</TableCell>
            <TableCell>Icon</TableCell>
         </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.maincategoryid}
                </TableCell>
                <TableCell>{row.maincategory}</TableCell>
                <TableCell numeric>{row.icon}</TableCell>
                 </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};


class DisplayAllUi extends React.Component {
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

      

    render() {

 // pagination
  

          return (
            <div>
                Result:<br/>
                 <center>
                
                        
                   {SimpleTable(this.props,this.state.list)}
                  
             
                 

                </center>

            </div>
        );
    }
    }
  
export default withStyles(styles)(DisplayAllUi);



 

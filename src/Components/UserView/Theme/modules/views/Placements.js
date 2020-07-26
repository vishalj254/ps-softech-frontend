import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getData, BaseUrl, postData } from '../../../../FetchServices';

const useStyles = makeStyles({
  card: {
    // maxWidth: 310,
    margin: 10,
    width: 310

  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: '10px',
    justifyContent: 'center',
    alignSelf: 'center'
  }
});

export default function Placements() {
  const classes = useStyles();
  const [getList, setList] = React.useState([])

  React.useEffect(() => {
    readAllStudents()
  }, [])

  const readAllStudents = async () => {
    var d = new Date()
    let body = { 'Year': d.getFullYear() }
    let list = await getData('placedstudent/displayall')
    setList(list)
  }

  const showCards = () => {
    return (getList.map(item => {
      return (
        <Card className={classes.card}>
          <CardMedia
            component="img"
            alt={item.name}
            height="200"
            image={`${BaseUrl}/images/${item.photo}`}
            title={item.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.branch}<br /> {item.college}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" >
              {item.companyname}
            </Button>
            <Button size="small" color="primary">
              {item.package}
            </Button>
          </CardActions>
        </Card>)
    })
    )
  }

  return (<div>
    <center><h1>Our Achievers</h1></center>
    <div className={classes.root}>
      {showCards()}
    </div>
  </div>
  );
}

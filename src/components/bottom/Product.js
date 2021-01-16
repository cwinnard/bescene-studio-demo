import { Avatar, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlined from '@material-ui/icons/AddCircleOutlined';


const useStyles = makeStyles({
  avatar: {
    height: '30px',
    width: '30px',
    marginLeft: '10px',
    marginRight: '15px'
  },
  product: {
    width: '100%',
    height: '40px',
    backgroundColor: '#34373d',
    borderRadius: '0',
    margin: '1px 0',
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    width: '65%'
  },
  plusIcon: {
    color: 'lightgrey',
    height: '20px',
    width: '20px',
  }
});

function Product(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.product}>
      <Avatar className={classes.avatar} />
      <Typography variant="h6" className={classes.title}>{props.title}</Typography>
      <AddCircleOutlined className={classes.plusIcon}/>
    </Paper>
  );
}
  
export default Product;

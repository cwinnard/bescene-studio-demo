import  { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: theme.palette.darkBackground.main,
      height: '100vh',
      width: '100vw'
    }
  }
});

function ContentArea(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
          {props.children}
      </div>
    );
  }
  
  export default ContentArea;

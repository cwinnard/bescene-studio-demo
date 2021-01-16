import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  accentSpacer: {
      backgroundColor: '#3f434c',
      height: '80%',
      width: '2px'
  }
});

function AccentSpacer() {
  const classes = useStyles();

  return (
    <div className={classes.accentSpacer} />
  );
}
  
export default AccentSpacer;

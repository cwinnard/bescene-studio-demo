import { Input, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles({
  search: {
    backgroundColor: '#34373d',
    borderRadius: '0',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px'
  },
  input: {
    width: '100%'
  }
});

function ProductSearch() {
  const classes = useStyles();

  return (
    <Paper className={classes.search}>
      <SearchIcon />
      <Input className={classes.input}>Search</Input>
    </Paper>
  );
}
  
export default ProductSearch;

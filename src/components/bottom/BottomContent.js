import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ProductList from './ProductList';
import VideoEditing from './VideoEditing';


const useStyles = makeStyles({
  bottomContainer: {
      display: 'flex',
      flexDirection: 'row',
      height: '40vh',
      margin: '0',
      padding: '0'
  }
});

function BottomContent() {
  const classes = useStyles();

  return (
    <Container className={classes.bottomContainer}>
      <ProductList />
      <VideoEditing />
    </Container>
  );
}
  
export default BottomContent;

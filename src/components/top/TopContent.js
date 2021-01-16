import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AccentSpacer from './AccentSpacer';
import ProductPreview from './ProductPreview';
import VideoContainer from './VideoContainer';


const useStyles = makeStyles({
  topContainer: {
      display: 'flex',
      flexDirection: 'row',
      height: '55vh',
      alignItems: 'center'
  }
});

function TopContent() {
  const classes = useStyles();

  return (
    <Container className={classes.topContainer}>
      <VideoContainer />
      <AccentSpacer />
      <ProductPreview />
    </Container>
  );
}
  
export default TopContent;

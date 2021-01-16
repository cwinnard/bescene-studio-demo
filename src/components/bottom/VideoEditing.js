import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import videoediting from './videoediting.png';


const useStyles = makeStyles({
  videoEditing: {
      width: '75%',
      padding: '0'
  }
});

function VideoEditing() {
  const classes = useStyles();

  return (
    <Container className={classes.videoEditing}>
      <img height="100%" width="100%" src={videoediting} alt="video editing"/>
    </Container>
  );
}
  
export default VideoEditing;

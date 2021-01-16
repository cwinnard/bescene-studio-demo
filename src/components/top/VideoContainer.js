import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  videoContainer: {
      width: '60%'
  }
});

function VideoContainer() {
    const classes = useStyles();

    return (
      <Container className={classes.videoContainer}>
        <Typography variant="h6">Never gonna give you up</Typography>
        <iframe
          title="youtube video"
          width="700"
          height="350"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen 
        />
      </Container>
    );
  }
  
  export default VideoContainer;

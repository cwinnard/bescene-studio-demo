import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import preview from './preview.png';


const useStyles = makeStyles({
  productContainer: {
      width: '25%'
  }
});

function ProductPreview() {
    const classes = useStyles();

    return (
      <Container className={classes.productContainer}>
        <Typography variant="h6">Product Preview</Typography>
        <img height="350px" width="230px" src={preview} alt="product preview"/>
      </Container>
    );
  }
  
export default ProductPreview;

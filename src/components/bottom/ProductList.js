import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Product from './Product';
import ProductSearch from './ProductSearch';


const useStyles = makeStyles({
  productListContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '25%',
      padding: '0 5px'
  }
});

const products = [{
    title: 'Product One',
    img: ''
},{
    title: 'Product Two',
    img: ''
},{
    title: 'Product Three',
    img: ''
},{
    title: 'Offering One',
    img: ''
},{
    title: 'Offering Two',
    img: ''
},{
    title: 'Sale One',
    img: ''
},{
    title: 'Sale Two',
    img: ''
}];

function ProductList() {
  const classes = useStyles();

  return (
    <Container className={classes.productListContainer}>
      <ProductSearch />
      {products.map(product => <Product title={product.title} />)}
    </Container>
  );
}
  
export default ProductList;

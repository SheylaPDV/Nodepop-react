import { Link } from 'react-router-dom';
import Page from '../../layout/Page';
import Button from '../../common/button';
import Product from './Product';
import '../../../assets/css/ProductsPage.css';
import styles from './ProductsPage.module.css';
import { useProducts } from '../../auth/context';

const EmptyList = () => (
  <div style={{ textAlign: 'center' }}>
    <p>Upload the first product!</p>
    <Button as={Link} to="/products/new" variant="primary">
      Add product
    </Button>
  </div>
);

const ProductsPage = () => {
  const products = useProducts();

  return (
    <Page title="What are you looking for today?">
      <div className={styles.productsPage}>
        {products.length ? (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <Product {...product} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyList />
        )}
      </div>
    </Page>
  );
};

export default ProductsPage;

import { useEffect, useState } from "react";
import { getLatestProducts } from "../../service";
import { Link } from "react-router-dom";
import Page from "../../layout/Page";
import Button from "../../common/button";
import Product from "./Product"
import "../../../assets/css/ProductsPage.css";
import styles from "./ProductsPage.module.css";


const EmptyList = () => (
  <div style={{ textAlign: "center" }}>
    <p>Sube el primer producto!</p>
    <Button as={Link} to="/products/new" variant="primary">
      Producto
    </Button>
  </div>
);

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const execute = async () => {
      const products = await getLatestProducts();
      setProducts(products);
    };
    execute();

    return () => {};
  }, []);

  return products;
};

const ProductsPage = () => {
  const products = useProducts();

  return (
    <Page title="¿Qué estás buscando hoy?">
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

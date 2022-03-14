import { useEffect, useState } from "react";
import { getLatestProducts } from "./service.js";
import './ProductsPage.css';
import Layout from "../layout/layout.js";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // getLatestProducts().then(products => setProducts(products));
    const execute = async () => {
        const products = await getLatestProducts();
        setProducts(products);
    };
    execute();
  }, []);
  return (
    <Layout title="NodePOP ...">
      <div className="productsPage">
      <ul
        style={{
          listStyle: 'none',
          margin: 0,
          padding: '2em',
          display: products ? 'block' : 'none',
        }}
      >
        {products.map(product => (
          <li key={product.id}>{product.nombre}{product.precio}{product.estado}{product.tags}</li>
        ))}
      </ul>
    </div>
    </Layout>
    
  );
};

export default ProductsPage;

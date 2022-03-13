import { useEffect, useState } from "react";
import { getLatestProducts } from "./service.js";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getLatestProducts().then(products => setProducts(products));
  }, []);
  return (
    <div className="ProductosPage">
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;

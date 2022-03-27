import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Photo from '../../common/Photo';
import '../../../assets/css/Product.css';
import Button from '../../common/button';
import { useState, setError } from 'react';
import { deleteProduct } from '../../service';
import { Navigate, useNavigate } from 'react-router-dom';

//////////////////////////PRODUCTO///////////////////////////////

const Product = ({ id, name, sale, price, tags }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: 0,
    sale: false,
    tags: [],
  });
  const [deletedProduct, setDeletedProduct] = useState(null);

  const handleClick = async (id) => {
    try {
      console.log(id);
      const borrar = await deleteProduct(id);
      setDeletedProduct(borrar);
      console.log(borrar);
      navigate(`/products`);
    } catch (error) {
      console.log(error);
    }
  };

  if (deletedProduct) {
    return <Navigate to={`/products`} />;
  }

  return (
    <article className="product bordered">
      <div className="left">{/* <Photo className="product-photo" /> */}</div>
      <div className="right">
        <div className="product-header">
          <span className="product-name">Nombre: {name}</span>
          <span className="product-username">{sale}</span>
          <span className="product-name">Precio: {price}</span>
          <span className="product-name">{tags}</span>
          <span className="product-separator">·</span>
        </div>
        <div>
          <div className="product-actions">
            <button onClick={() => handleClick(id)}>Borrar</button>
          </div>
        </div>
      </div>
    </article>
  );
};

/////////////////////////////////////////////////////////

export default Product;

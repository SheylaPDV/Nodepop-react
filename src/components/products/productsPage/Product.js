import React from 'react';
import Photo from '../../common/Photo';
import '../../../assets/css/Product.css';
import { useState } from 'react';
import { deleteProduct } from '../../service';
import { Navigate, useNavigate } from 'react-router-dom';
import '../../../assets/css/Button.css';

const Product = ({ id, name, sale, price, tags, photo }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: 0,
    sale: false,
    tags: [],
    photo: '',
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
      <div className="left">
        <Photo className="product-photo" />{' '}
        <span className="product-name">{photo}</span>
      </div>
      <div className="right">
        <div className="product-header">
          <span className="product-name">Name: {name}</span>
          <span className="product-username">
            Sale: {sale ? 'Se vende' : 'Se compra'}
          </span>
          <span className="product-name">Price: {price}</span>
          <span className="product-name">Tags: {tags}</span>
        </div>
        <div>
          <div className="product-actions">
            <button className="styled-button" onClick={() => handleClick(id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Product;

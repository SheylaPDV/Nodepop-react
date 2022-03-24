import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Photo from '../photo/Photo';
import '../../assets/css/Product.css';

const Product = ({ nombre, precio, estado, tags, updatedAt }) => {
  return (
    <article className="product bordered">
      <div className="left">
        <Photo className="product-photo" />
      </div>
      <div className="right">
        <div className="product-header">
          <span className="product-name">{nombre.nombre}</span>
          <span className="product-username">{precio.precio}</span>
          <span className="product-separator">·</span>
          <time dateTime={updatedAt}>
            {formatDistanceToNow(new Date(updatedAt))}
          </time>
        </div>
        <div>
          {estado}
          <div className="product-actions">
            {/* <LikeButton onLike={event => console.log(event)}>
              {likes.length || null}
            </LikeButton> */}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Product;

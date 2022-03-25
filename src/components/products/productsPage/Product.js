import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Photo from '../../common/Photo';
import '../../../assets/css/Product.css';

//////////////////////////PRODUCTO///////////////////////////////

const Product = ({ content, updatedAt, user }) => {
  return (
    <article className="product bordered">
      <div className="left">
        <Photo className="product-photo" />
      </div>
      <div className="right">
        <div className="product-header">
          <span className="product-name">{user.name}</span>
          <span className="product-username">{user.username}</span>
          <span className="product-separator">·</span>
          <time dateTime={updatedAt}>
            {formatDistanceToNow(new Date(updatedAt))}
          </time>
        </div>
        <div>
          {content}
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

/////////////////////////////////////////////////////////

export default Product;

import React from 'react';
import classNames from 'classnames';
import unnamed from '../../assets/images/unnamed.jpg';
import '../../assets/css/Photo.css';

const Photo = ({ className, ...props }) => (
  <img
    className={classNames('photo', className)}
    src={unnamed}
    alt=""
    {...props}
  />
);

export default Photo;
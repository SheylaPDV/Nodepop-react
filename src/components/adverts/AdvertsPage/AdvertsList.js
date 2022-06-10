import React from "react";
import T from "prop-types";
import { Link } from "react-router-dom";
import "../../../assets/css/AdvertsPage.css";
import Photo from "../../common/Photo";

import placeholder from "../../../assets/images/placeholder.png";

import { advert } from "../../propTypes";

function Advert({ id, name, sale, price, tags, photo }) {
  return (
    <article className="advert bordered">
      <div className="left">
        <Photo className="advert-photo" />{" "}
        <img
          src={photo || placeholder}
          alt={name}
          width="200"
          height="200"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="right">
        <div className="advert-header">
          <span className="advert-name">Name: {name}</span>
          <span className="advert-username">
            Sale: {sale ? "Se vende" : "Se compra"}
          </span>
          <span className="advert-name">Price: {price}</span>
          <span className="advert-name">Tags: {tags}</span>
        </div>
        <div>
          <div className="advert-actions"></div>
        </div>
      </div>
    </article>
  );
}

Advert.propTypes = {
  ...advert,
};

function AdvertsList({ adverts }) {
  const renderAdvert = ({ id, ...advert }) => (
    <li key={id}>
      <Link to={`/adverts/${id}`}>
        <Advert {...advert} />
      </Link>
    </li>
  );

  return <ul>{adverts.map(renderAdvert)}</ul>;
}

AdvertsList.propTypes = {
  adverts: T.arrayOf(T.shape({ id: T.string.isRequired }).isRequired)
    .isRequired,
};

export default AdvertsList;

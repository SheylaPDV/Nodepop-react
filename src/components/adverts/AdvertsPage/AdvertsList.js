import React from "react";
import T from "prop-types";
import { Link } from "react-router-dom";
import "../../../assets/css/AdvertsPage.css";
import styles from "./AdvertsPage.module.css";
import Photo from "../../common/Photo";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import placeholder from "../../../assets/images/placeholder.png";

import { advert } from "../../propTypes";

function Advert({ id, name, sale, price, tags, photo }) {
  const navigate = useNavigate();
  const [advert, setAdvert] = useState({
    id: "",
    name: "",
    price: 0,
    sale: false,
    tags: [],
    photo: "",
  });
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
        {/* <span className="advert-name">{photo}</span> */}
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

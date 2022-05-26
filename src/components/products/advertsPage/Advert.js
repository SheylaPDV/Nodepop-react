import React from "react";
import Photo from "../../common/Photo";
import "../../../assets/css/Advert.css";
import { useState } from "react";
import { deleteAdvert } from "../../service";
import { Navigate, useNavigate } from "react-router-dom";
import "../../../assets/css/Button.css";

const Advert = ({ id, name, sale, price, tags, photo }) => {
  const navigate = useNavigate();
  const [advert, setAdvert] = useState({
    id: "",
    name: "",
    price: 0,
    sale: false,
    tags: [],
    photo: "",
  });
  const [deletedAdvert, setDeletedAdvert] = useState(null);

  const handleClick = async (id) => {
    try {
      const borrar = await deleteAdvert(id);
      setDeletedAdvert(borrar);
      navigate(`/adverts`);
    } catch (error) {
      console.log(error);
    }
  };

  if (deletedAdvert) {
    return <Navigate to={`/adverts`} />;
  }

  return (
    <article className="advert bordered">
      <div className="left">
        <Photo className="advert-photo" />{" "}
        <span className="advert-name">{photo}</span>
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
          <div className="advert-actions">
            <button className="styled-button" onClick={() => handleClick(id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Advert;

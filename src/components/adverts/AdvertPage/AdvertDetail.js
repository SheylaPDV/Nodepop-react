import React from "react";
import T from "prop-types";
import "../../../assets/css/Button.css";
import "../../../assets/css/Advert.css";
// import styles from "./AdvertsPage.module.css";
import ConfirmationButton from "../../common/ConfirmationButton";
import placeholder from "../../../assets/images/placeholder.png";
import { advert } from "../../propTypes";

function AdvertDetail({ name, sale, price, tags, photo, onDelete }) {
  return (
    <div className="advert-name">
      <img
        src={photo || placeholder}
        alt={name}
        width="200"
        height="200"
        style={{ objectFit: "contain" }}
      />

      <p>{name}</p>
      <p>{sale ? "Sell" : "Buy"}</p>
      <p>{tags.join(", ")}</p>
      <p>{price}</p>

      <ConfirmationButton
        className="styled-button"
        confirmation="Are you sure?"
        onConfirm={onDelete}
      >
        Delete
      </ConfirmationButton>
    </div>
  );
}

AdvertDetail.propTypes = {
  ...advert,
  photo: T.string,
  onDelete: T.func.isRequired,
};

AdvertDetail.defaultProps = {
  photo: null,
};

export default AdvertDetail;

import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "../AdvertsPage/AdvertsPage.module.css";
import "../../../assets/css/NewAdvertPage.css";
import { createAdvert } from "../../service";
import NewAdvertForm from "./NewAdvertForm";
import useMutation from "../../hooks/useMutation";

function NewAdvertPage({ className }) {
  const navigate = useNavigate();
  const mutation = useMutation(createAdvert);

  const handleSubmit = (newAdvert) => {
    mutation.execute(newAdvert).then(({ id }) => navigate(`/adverts/${id}`));
  };

  if (mutation.error?.statusCode === 401) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h4 className={styles.newProductPage}>
        Ad upload
        <NewAdvertForm onSubmit={handleSubmit} />
      </h4>
    </>
  );
}

export default NewAdvertPage;

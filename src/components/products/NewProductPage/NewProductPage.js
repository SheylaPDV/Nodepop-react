import Page from "../../layout/Page";
import Photo from "../../../assets/css/Photo.css";
import Textarea from "../../common/TextArea";
import Button from "../../common/button";
import { useState } from "react";
import { createProduct } from "../../service";
import { Navigate, useNavigate } from "react-router-dom";
import "../../../assets/css/NewProductPage.css";

const MAX_CHARACTERS = 280;

const NewProductPage = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [createdProduct, setCreatedProduct] = useState(null);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const product = await createProduct({ content });
      setCreatedProduct(product);
      // navigate(`/tweets/${createdTweet.id}`);
    } catch (error) {
      setError(error);
    }
  };

  const characters = `${content.length} / ${MAX_CHARACTERS}`;
  const buttonDisabled = content.length < 5;

  if (createdProduct) {
    return <Navigate to={`/products/${createdProduct.id}`} />;
  }

  if (error?.status === 401) {
    return <Navigate to="/login" />;
  }

  return (
    <Page title="Subir producto">
      <div className="newProductPage bordered">
        <div className="left">
          <Photo />
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            {/* <span className="newProductPage-textarea" text='nombre'> Nombre: </span>
              <input placeholder='Nombre del producto' onChange={handleChange}></input>
            <span>Estado</span>
            <select onChange={event => console.log(event)}>
              <option value="Compra">Compra</option>
              <option value="Venta">Venta</option>
            </select>
            <span> Tags: </span>
              <input placeholder='Tags' onChange={handleChange}></input>
            <span> Precio: </span>
              <input placeholder='Precio' onChange={handleChange}></input>
            */}
            <Textarea
              className="newProductPage-textarea"
              placeholder="Escribe aqui el detalle del producto.."
              value={content}
              onChange={handleChange}
              maxLength={MAX_CHARACTERS}
            />
            <div className="newProductPage-footer">
              <span className="newProductPage-characters">{characters}</span>
              <Button
                type="submit"
                className="newProductPage-submit"
                variant="primary"
                disabled={buttonDisabled}
              >
                + Subir
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Page>
  );
};

export default NewProductPage;

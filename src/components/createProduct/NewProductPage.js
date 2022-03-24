import Page from '../layout/Page'
import Photo from '../photo/Photo'
import Textarea from '../textArea/TextArea'
import Button from '../button/button'
import { useState } from 'react';
import { createProduct } from '../productsPage/service'
import { Navigate, useNavigate } from 'react-router-dom'
import '../../assets/css/NewProductPage.css'


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
            <Textarea
              className="newProductPage-textarea"
              placeholder=""
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

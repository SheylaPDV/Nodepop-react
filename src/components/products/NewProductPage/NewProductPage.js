import Page from '../../layout/Page';
import Button from '../../common/button';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createProduct } from '../../service';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import '../../../assets/css/NewProductPage.css';
import FormField from '../../common/FormField';
import Select from 'react-select';

////////////////////////////PAGINA NUEVO PRODUCTO/////////////////////////////

const NewProductPage = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    sale: false,
    tags: [],
  });
  const [error, setError] = useState(null);
  const [createdProduct, setCreatedProduct] = useState(null);

  ////////////////////////MANEJO DE CAMBIOS////////////////////////////////

  const { name, sale, price, tags } = product;

  // const handleChange = (event) => ({
  //   setProduct(event.target.value);
  // };

  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  /////////////////////////MANEJO DE ENVIO//////////////////////////////

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const product_result = await createProduct(product);
      setCreatedProduct(product_result);
      // navigate(`/tweets/${createdTweet.id}`);
    } catch (error) {
      setError(error);
    }
  };

  ///////////////////////////PRODUCTO CREADO//////////////////////////////

  if (createdProduct) {
    return <Navigate to={`/products/${createdProduct.id}`} />;
  }

  if (error?.status === 401) {
    return <Navigate to="/login" />;
  }

  const optionsTags = [
    { value: { tags }, label: 'lifestyle', name: 'lifestyle' },
    { value: { tags }, label: 'mobile', name: 'mobile' },
    { value: { tags }, label: 'motor', name: 'motor' },
    { value: { tags }, label: 'work', name: 'work' },
  ];

  const optionSale = [
    { value: { sale }, label: 'se compra' },
    { value: { sale }, label: 'se vende' },
  ];
  const SelectTags = () => <Select options={optionsTags} />;
  const SelectSale = () => <Select options={optionSale} />;

  /////////////////////////////////////////////////////////

  return (
    <Page title="Subir producto">
      <div className="newProductPage bordered">
        <div className="left">{/* <Photo /> */}</div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <label>Product: </label>
            <FormField
              className="loginForm-field"
              type="text"
              name="name"
              label="name"
              value={product.name}
              onChange={handleChange}
            />
            <label>Price: </label>
            <FormField
              className="loginForm-field"
              type="number"
              name="price"
              label="price"
              value={product.price}
              onChange={handleChange}
            />
            <label>Sale: </label>
            <SelectSale />

            <label>Tags:</label>
            <SelectTags />

            <div className="newProductPage-footer">
              {/* <span className="newProductPage-characters"></span> */}
              <Button
                type="submit"
                className="newProductPage-submit"
                variant="primary"
                // disabled={buttonDisabled}
              >
                Created product
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Page>
  );
};

export default NewProductPage;

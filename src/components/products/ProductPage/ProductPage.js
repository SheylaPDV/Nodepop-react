import React, { useEffect, useRef } from 'react';
import Page from '../../layout/Page';
import { Navigate, useParams } from 'react-router-dom';
import { getProduct } from '../../service';
import '../../../assets/css/Product.css';
import Photo from '../../common/Photo';

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      error: null,
      isLoading: false,
    };
    this.handleGetProduct();
  }

  handleGetProduct = async () => {
    this.setState({ isLoading: true, error: null });
    try {
      const product = await getProduct(this.props.productId);
      this.setState({ product, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false, error });
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.productId !== this.props.productId) {
      this.handleGetProduct();
    }
  }

  render() {
    const { product, error, isLoading } = this.state;

    if (error?.status === 401) {
      return <Navigate to="/login" />;
    }

    if (error?.status === 404) {
      return <Navigate to="/404" />;
    }

    return (
      <Page title="Detalle del producto">
        <div className="product">
          {product ? (
            <div>
              <Photo />
              <div className="product-name">{product.photo}</div>
              <div className="product-name">Name: {product.name}</div>
              <div className="product-name">
                Sale: {product.sale ? 'Se vende' : 'Se compra'}
              </div>
              <div className="product-name">Price: {product.price}</div>
              <div className="product-name">Tags: {product.tags}</div>
            </div>
          ) : (
            <div>Nothing to show</div>
          )}
        </div>
      </Page>
    );
  }
}

const ProductPageFunction = () => {
  const ref = useRef(null);
  const { productId } = useParams();

  useEffect(() => {
    console.log('ref', ref.current);
  }, []);

  return <ProductPage ref={ref} productId={productId} />;
};

export default ProductPageFunction;

import React, { useEffect, useRef, useState } from "react";
import Page from '../layout/Page'
import { Navigate, useParams } from 'react-router-dom'
import { getProduct } from '../productsPage/service'




class ProductPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        product: null,
        error: null,
        isLoading: false,
      };
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
  
    componentDidMount() {
      this.handleGetProduct();
    }
  
    componentDidUpdate(prevProps, prevState) {
      console.log('old', prevProps, prevState);
      console.log('new', this.props, this.state);
      if (prevProps.productId !== this.props.productId) {
        this.handleGetProduct();
      }
    }
  
    componentWillUnmount() {
      console.log('unmont');

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
        <Page title="Product detail">
          <div>{product ? JSON.stringify(product) : 'Nothing to show'}</div>
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
  
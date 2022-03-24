import React, { useEffect, useRef, useState } from "react";
import Page from "../layout/Page";
import { Navigate, useParams } from "react-router-dom";
import { getProduct } from "../productsPage/service";

// class ProductPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       product: null,
//       error: null,
//       isLoading: false,
//     };
//   }

//   handleGetProduct = async () => {
//     this.setState({ isLoading: true, error: null });
//     try {
//       const product = await getProduct(this.props.productId);
//       this.setState({ product, isLoading: false });
//     } catch (error) {
//       this.setState({ isLoading: false, error });
//     }
//   };

//   componentDidMount() {
//     this.handleGetProduct();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("old", prevProps, prevState);
//     console.log("new", this.props, this.state);
//     if (prevProps.productId !== this.props.productId) {
//       this.handleGetProduct();
//     }
//   }

//   componentWillUnmount() {
//     console.log("unmont");
//   }

//   render() {
//     const { product, error, isLoading } = this.state;

//     if (error?.status === 401) { //solo lo evaluo cuando no sea null (para eso sirve la interrogacion)
//       return <Navigate to="/login" />;
//     }

//     if (error?.status === 404) {
//       return <Navigate to="/404" />;
//     }

//     return (
//       <Page title="Product detail">
//         <div>{product ? JSON.stringify(product) : "Nothing to show"}</div>
//       </Page>
//     );
//   }
// }

const ProductPageFunction = () => {
  const [product, setProduct] = useState(null)
  // const ref = useRef(null);
  const { productId } = useParams();

  useEffect(() => {
    getProduct(productId).then(product => setProduct(product))
    return () => {
      console.log('unmmonted');
    }
    
  }, [productId]);

  return  <Page title="Product detail">
  <div>{product ? JSON.stringify(product) : "Nothing to show"}</div>
</Page>;
};

export default ProductPageFunction;

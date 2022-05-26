import React, { useEffect, useRef } from "react";
import Page from "../../layout/Page";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { deleteAdvert, getAdvert } from "../../service";
import "../../../assets/css/advert.css";
import Photo from "../../common/Photo";
import useMutation from "../../hooks/useMutation";
import advertDetail from "./advertDetail";

class AdvertPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advert: null,
      error: null,
      isLoading: false,
    };
    this.handleGetAdvert();
  }

  handleGetAdvert = async () => {
    this.setState({ isLoading: true, error: null });
    try {
      const advert = await getAdvert(this.props.advertId);
      this.setState({ advert, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false, error });
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.advertId !== this.props.advertId) {
      this.handleGetAdvert();
    }
  }

  handleDelete = () => {
    const mutation = useMutation(deleteAdvert);
    const navigate = useNavigate();
    mutation.execute(this.advertId).then(() => navigate("/"));
  };

  render() {
    const { advert, error, isLoading } = this.state;

    if (error?.status === 401) {
      return <Navigate to="/login" />;
    }

    if (error?.status === 404) {
      return <Navigate to="/404" />;
    }

    return (
      <>{advert && <advertDetail onDelete={this.handleDelete} {...advert} />}</>
    );

    //     return (
    //       <Page title="Detalle del adverto">
    //         <div className="product">
    //           {product ? (
    //             <div>
    //               <Photo />
    //               <div className="product-name">{product.photo}</div>
    //               <div className="product-name">Name: {product.name}</div>
    //               <div className="product-name">
    //                 Sale: {product.sale ? "Se vende" : "Se compra"}
    //               </div>
    //               <div className="product-name">Price: {product.price}</div>
    //               <div className="product-name">Tags: {product.tags}</div>
    //             </div>
    //           ) : (
    //             <div>Nothing to show</div>
    //           )}
    //         </div>
    //       </Page>
    //     );
    //   }
  }

  // const ProductPageFunction = () => {
  //   const ref = useRef(null);
  //   const { productId } = useParams();

  //   useEffect(() => {
  //     console.log("ref", ref.current);
  //   }, []);

  //   return <ProductPage ref={ref} productId={productId} />;
}

export default AdvertPage;

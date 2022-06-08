import React, { useCallback } from "react";
// import Page from "../../layout/Page";

import { Navigate, useParams, useNavigate } from "react-router-dom";
import { deleteAdvert, getAdvert } from "../../service";
import "../../../assets/css/Advert.css";
// import Photo from "../../common/Photo";
import useMutation from "../../hooks/useMutation";
import AdvertDetail from "./AdvertDetail";
import useQuery from "../../hooks/useQuery";

function AdvertPage() {
  const { advertId } = useParams();
  const navigate = useNavigate();
  const getAdvertById = useCallback(() => getAdvert(advertId), [advertId]);
  const { error, data: advert } = useQuery(getAdvertById);
  const mutation = useMutation(deleteAdvert);

  const handleDelete = () => {
    mutation.execute(advertId).then(() => navigate("/"));
  };

  if (error?.statusCode === 401 || mutation.error?.statusCode === 401) {
    return <Navigate to="/login" />;
  }

  if (error?.statusCode === 404) {
    return <Navigate to="/404" />;
  }

  return <>{advert && <AdvertDetail onDelete={handleDelete} {...advert} />}</>;
}
// class AdvertPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       advertId: null,
//       error: null,
//       isLoading: false,
//     };
//     this.handleGetAdvert();
//   }

//   handleGetAdvert = async () => {
//     this.setState({ isLoading: true, error: null });
//     try {
//       const advert = await getAdvert(this.props.advertId);
//       this.setState({ advert, isLoading: false });
//     } catch (error) {
//       this.setState({ isLoading: false, error });
//     }
//   };

//   componentDidUpdate(prevProps) {
//     if (prevProps.advertId !== this.props.advertId) {
//       this.handleGetAdvert();
//     }
//   }

//   handleDelete = () => {
//     const mutation = useMutation(deleteAdvert);
//     const navigate = useNavigate();
//     mutation.execute(this.advertId).then(() => navigate("/"));
//   };

//   render() {
//     const { advert, error, isLoading } = this.state;

//     if (error?.status === 401) {
//       return <Navigate to="/login" />;
//     }

//     if (error?.status === 404) {
//       return <Navigate to="/404" />;
//     }

//     // return (
//     //   <>{advert && <AdvertDetail onDelete={this.handleDelete} {...advert} />}</>
//     // );

//     return (
//       <Page title="Detalle del adverto">
//         <div className="product">
//           {advert ? (
//             <div>
//               <Photo />
//               <div className="product-name">{advert.photo}</div>
//               <div className="product-name">Name: {advert.name}</div>
//               <div className="product-name">
//                 Sale: {advert.sale ? "Se vende" : "Se compra"}
//               </div>
//               <div className="product-name">Price: {advert.price}</div>
//               <div className="product-name">Tags: {advert.tags}</div>
//             </div>
//           ) : (
//             <div>Nothing to show</div>
//           )}
//         </div>
//       </Page>
//     );
//   }
// }

// function AdvertPageFunction() {
//   const ref = useRef(null);
//   const { advertId } = useParams();

//   useEffect(() => {
//     console.log("ref", ref.current);
//   }, []);

//   return <AdvertPage ref={ref} advertId={advertId} />;
// }

export default AdvertPage;

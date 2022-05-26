// import Page from "../../layout/Page";
// import Button from "../../common/button";
// import { useState } from "react";
// import { createadvert } from "../../service";
// import { Navigate } from "react-router-dom";
// import "../../../assets/css/NewadvertPage.css";
// import FormField from "../../common/FormField";
// import Photo from "../../common/Photo";

// const validName = ({ name }) => name;
// const validPrice = ({ price }) =>
//   !Number.isNaN(price) && Number.isFinite(price) && price >= 0;
// const validTags = ({ tags }) => !!tags.length;

// const NewProductPage = ({onSubmit}) => {
//   const [product, setProduct] = useState({
//     name: "",
//     sale: false,
//     price: 0,
//     tags: [],
//     photo: "",
//   });
//   const [error, setError] = useState(null);
//   const [createdProduct, setCreatedProduct] = useState(null);

//   // const { name, sale, price, tags, photo } = product;

//   const handleChange = (event) => {
//     setProduct({
//       ...product,
//       [event.target.name]:
//         event.target.name === "tags"
//           ? [event.target.value]
//           : event.target.value,
//     });
//   };

//   const onChangeFile = (event) => {
//     setProduct({
//       ...product,
//       [event.target.name]: event.target.files[0],
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const product_result = await createProduct(product);
//       setCreatedProduct(product_result);
//     } catch (error) {
//       setError(error);
//     }
//   };

//   if (createdProduct) {
//     return <Navigate to={`/products/${createdProduct.id}`} />;
//   }

//   if (error?.status === 401) {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <Page title="Upload product">
//       <div className="newProductPage bordered">
//         <div className="left"></div>
//         <div className="right">
//           <Photo />
//           <form onSubmit={handleSubmit}>
//             <label>Product: </label>
//             <FormField
//               className="loginForm-field"
//               type="text"
//               name="name"
//               label="name"
//               value={product.name}
//               onChange={handleChange}
//             />
//             <label>Price: </label>
//             <FormField
//               className="loginForm-field"
//               type="number"
//               name="price"
//               label="price"
//               value={product.price}
//               onChange={handleChange}
//             />

//             <label>Sale: </label>
//             <select
//               className="inputs-newProducts"
//               name="sale"
//               onChange={handleChange}
//             >
//               <option value="false">Compra</option>
//               <option value="true">Venta</option>
//             </select>

//             <label>Tags:</label>
//             <select
//               className="inputs-newProducts"
//               name="tags"
//               onChange={handleChange}
//             >
//               <option value="lifestyle">lifestyle</option>
//               <option value="mobile">mobile</option>
//               <option value="motor">motor</option>
//               <option value="work">work</option>
//             </select>

//             <div> File Upload </div>
//             <input
//               className="inputs-newProducts"
//               type="file"
//               name="photo"
//               onChange={onChangeFile}
//             />
//             <img src={product.photo} width="100px" />

//             <div className="newProductPage-footer">
//               <Button
//                 type="submit"
//                 className="newProductPage-submit"
//                 variant="primary"
//               >
//                 Created product
//               </Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </Page>
//   );
// };

// export default NewProductPage;
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { createadvert } from "../../service";
import NewAdvertForm from "./NewadvertForm";
import useMutation from "../../hooks/useMutation";

function NewAdvertPage() {
  const navigate = useNavigate();
  const mutation = useMutation(createadvert);

  const handleSubmit = (newAdvert) => {
    mutation.execute(newAdvert).then(({ id }) => navigate(`/adverts/${id}`));
  };

  if (mutation.error?.statusCode === 401) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <NewAdvertForm onSubmit={handleSubmit} />
    </>
  );
}

export default NewAdvertPage;

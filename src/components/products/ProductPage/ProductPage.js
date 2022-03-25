import React, { useEffect, useRef, useState } from 'react';
import Page from '../../layout/Page';
import { Navigate, useParams } from 'react-router-dom';
import { getProduct } from '../../service';

//////////////////////////PAGINA PRODUCTO///////////////////////////////

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      error: null,
      isLoading: false,
    };
  }

  ///////////////////////////MANEJO OBTENER PRODUCTO//////////////////////////////

  handleGetProduct = async () => {
    this.setState({ isLoading: true, error: null });
    try {
      const product = await getProduct(this.props.productId);
      this.setState({ product, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false, error });
    }
  };

  /////////////////////////////MONTAJE DE COMPONENTE////////////////////////////

  componentDidMount() {
    this.handleGetProduct();
  }

  ///////////////////////////ACTUALIZAR COMPONENTE//////////////////////////////

  componentDidUpdate(prevProps, prevState) {
    console.log('old', prevProps, prevState);
    console.log('new', this.props, this.state);
    if (prevProps.productId !== this.props.productId) {
      this.handleGetProduct();
    }
  }

  ///////////////////////////DESMONTAR COMPONENTE//////////////////////////////

  componentWillUnmount() {
    console.log('unmont');
  }

  ///////////////////////////RENDERIZAR//////////////////////////////

  render() {
    const { product, error, isLoading } = this.state;

    if (error?.status === 401) {
      //solo lo evaluo cuando no sea null (para eso sirve la interrogacion)
      return <Navigate to="/login" />;
    }

    if (error?.status === 404) {
      return <Navigate to="/404" />;
    }

    return (
      <Page title="Detalle del producto">
        <div>{product ? JSON.stringify(product) : 'Nada que mostrar'}</div>
      </Page>
    );
  }
}

//////////////////////////FUNCION PAGINA DE PRODUCTO///////////////////////////////

const ProductPageFunction = () => {
  const ref = useRef(null);
  const { productId } = useParams();

  useEffect(() => {
    console.log('ref', ref.current);
  }, []);
  //array de dependencias(el array vacio solo se ejecuta en el primer render, si le meto un valor, de ejecuta cada vez que cambia ese valor)

  return <ProductPage ref={ref} productId={productId} />;
};

export default ProductPageFunction;
// const ProductPageFunction = () => {
//   const [product, setProduct] = useState(null)
//   // const ref = useRef(null);
//   const { productId } = useParams();

//   useEffect(() => {
//     getProduct(productId).then(product => setProduct(product))
//     return () => {
//       console.log('unmmonted');
//     }

//   }, [productId]);

//   return  <Page title="Product detail">
//   <div>{product ? JSON.stringify(product) : "Nothing to show"}</div>
// </Page>;
// };

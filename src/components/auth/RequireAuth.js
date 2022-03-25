import T from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext, { AuthContextConsumer } from './context';

/////////////////////////////////////////////////////////

const RequireAuth = ({ isLogged, children }) => {
  const location = useLocation();

  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

/////////////////////////////////////////////////////////

RequireAuth.propTypes = {
  //comprobacion por consola si esas funciones reciben el dato correcto
  isLogged: T.bool,
  children: T.node,
};

/////////////////////////////////////////////////////////

const ConectedRequireAuth = (props) => (
  <AuthContextConsumer>
    {({ isLogged }) => <RequireAuth isLogged={isLogged} {...props} />}
  </AuthContextConsumer>
);

// CONECTAR CONTEXTO (ES IGUAL QUE EL DE ARRIBA)
// const ConectedRequireAuth = props => {
//   const {isLogged} = useContext(AuthContext)
//   return <RequireAuth isLogged={isLogged} {...props} />

export default ConectedRequireAuth;

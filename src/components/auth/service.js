import client, {
  setAuthorizationHeader,
  removeAuthorizationHeader,
} from '../../api/client';
import storage from '../../utils/storage';

///////////////////////////////////INCIAR SESION//////////////////////////////////////

export const login = ({ remember, ...credentials }) => {
  return client.post('/auth/login', credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    storage.set('auth', accessToken);
  });
};

// export const signUp = ({ remember, ...credentials }) => {
//   return client.post('/api/auth/signup', credentials).then(({accessToken}) => {
//     storage.set('auth',accessToken);
//   })
// };
/////////////////////////////////////////CERRAR SESION/////////////////////////////////////////

export const logout = () => {
  return Promise.resolve().then(() => {
    removeAuthorizationHeader();
    storage.remove('auth');
  });
};

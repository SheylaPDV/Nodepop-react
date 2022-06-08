import client, {
  setAuthorizationHeader,
  removeAuthorizationHeader,
} from "../../api/client";
import storage from "../../utils/storage";
// const authPath = "/auth";
// export const login = ({ remember, ...credentials }) => {
//   return client.post("/api/auth/login", credentials).then(({ accessToken }) => {
//     setAuthorizationHeader(accessToken);
//     storage.set("auth", accessToken);
//   });
// };
export const login = ({ remember, ...credentials }) => {
  return client
    .post(`/api/auth/login`, credentials)
    .then(({ accessToken }) => {
      setAuthorizationHeader(accessToken);
      return accessToken;
    })
    .then((accessToken) => {
      storage.remove("auth");
      if (remember) {
        storage.set("auth", accessToken);
      }
    });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    removeAuthorizationHeader();
    storage.remove("auth");
  });
};

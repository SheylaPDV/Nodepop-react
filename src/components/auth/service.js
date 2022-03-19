import client, { setAuthorizationHeader } from "../../api/client";
import storage from "../../utils/storage";

export const login = ({ remember, ...credentials }) => {
  return client.post("/auth/login", credentials).then((accessToken) => {
    setAuthorizationHeader(accessToken);
    storage.set("auth", accessToken);
  });
};

// export const createUser = ()

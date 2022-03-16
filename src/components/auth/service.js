import client from "../../api/client";

export const login = ({ remember, ...credentials}) => {
  return client.post("/auth/login", credentials);
};

// export const createUser = ()

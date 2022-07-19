import axios from "axios";

const API = axios.create({ baseURL: "api" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const signIn = (formData) => API.post("/sign-in", formData);
export const signUp = (formData) => API.post("/sign-up", formData);
export const recommendedForYou = () =>
  axios.get(
    "http://api.marketcheck.com/v2/search/heavy-equipment/active?api_key=OMOV4Xoz9GXONrwlv6dvtvRuJeps33T3&price=15000",
    
  );

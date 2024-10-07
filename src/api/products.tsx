import { Api } from "api";

export const getProducts = async () => {
  let url = "/api/products/1/";
  const res = await Api.get(url);
  return res.data;
};

export const authorizePayment = async () => {
  let url = "/api/products/1/authorize_payment/";
  const res = await Api.post(url, {payment_info: 1});
  return res.data;
};

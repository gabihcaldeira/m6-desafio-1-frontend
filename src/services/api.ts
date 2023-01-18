import axios from "axios";

export interface IApiPostData {
  amount: number;
  installments: number;
  mdr: number;
  days?: Array<number>;
}

export interface IApiResponse {
  1: number;
  15: number;
  30: number;
  90: number;
}

const api = axios.create({
  baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app",
  timeout: 5000,
});

export const calculateTransaction = async (info: IApiPostData) => {
  const days = [1, 15, 30, 90];
  const { data } = await api.post<IApiResponse>("", { ...info, days });

  return data;
};

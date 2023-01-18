import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { IApiResponse } from "../services/api";

interface IProviderProps {
  children: ReactNode;
}

interface IContext {
  apiResponse: IApiResponse;
  setApiResponse: Dispatch<SetStateAction<IApiResponse>>;
  days: number[];
  setDays: Dispatch<SetStateAction<number[]>>;
}

export const Context = createContext<IContext>({} as IContext);

const ContextProvider = ({ children }: IProviderProps) => {
  const [apiResponse, setApiResponse] = useState<IApiResponse>(
    {} as IApiResponse
  );
  const [days, setDays] = useState([1, 15, 30, 90]);

  return (
    <Context.Provider value={{ apiResponse, setApiResponse, days, setDays }} />
  );
};

export default ContextProvider;

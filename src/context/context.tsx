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
}

export const Context = createContext<IContext>({} as IContext);

const ContextProvider = ({ children }: IProviderProps) => {
  const [apiResponse, setApiResponse] = useState<IApiResponse>(
    {} as IApiResponse
  );
  const days = [1, 15, 30, 90];

  return <Context.Provider value={{ apiResponse, setApiResponse, days }} />;
};

export default ContextProvider;

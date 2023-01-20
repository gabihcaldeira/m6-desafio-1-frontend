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
  isToastOpen: boolean;
  setIsToastOpen: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  toastType: string;
  setToastType: Dispatch<SetStateAction<string>>;
}

export const Context = createContext<IContext>({} as IContext);

const ContextProvider = ({ children }: IProviderProps) => {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toastType, setToastType] = useState("Loading");
  const [apiResponse, setApiResponse] = useState<IApiResponse>(
    {} as IApiResponse
  );
  const days = [1, 15, 30, 90];

  return (
    <Context.Provider
      value={{
        apiResponse,
        setApiResponse,
        days,
        isToastOpen,
        setIsToastOpen,
        isLoading,
        setIsLoading,
        toastType,
        setToastType,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

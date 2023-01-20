import { useContext, useEffect } from "react";
import Toast from "./components/Toast";
import ContextProvider, { Context } from "./context/context";
import HomePage from "./pages/homePage";

function App() {
  const { isToastOpen, setIsToastOpen, isLoading, setToastType } =
    useContext(Context);

  useEffect(() => {
    if (isLoading) {
      setToastType("delay");
      setIsToastOpen(true);
    }
  }, [isToastOpen, isLoading]);

  return (
    <ContextProvider>
      <HomePage />
    </ContextProvider>
  );
}

export default App;

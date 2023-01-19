import React from "react";
import ContextProvider from "./context/context";
import HomePage from "./pages/homePage";

function App() {
  return (
    <ContextProvider>
      <HomePage />;
    </ContextProvider>
  );
}

export default App;

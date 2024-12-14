import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
// import { WalletProvider } from "@txnlab/use-wallet-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <WalletProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </WalletProvider> */}
  </StrictMode>
);

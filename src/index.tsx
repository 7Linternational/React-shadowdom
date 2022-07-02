import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import ReactDOM from "react-dom/client";
import { CustomApp } from "./CustomApp";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

const customRootElement = document.getElementById("custom-root");
customRootElement!.attachShadow({ mode: "open" });
// @ts-ignore
const customRoot = ReactDOM.createRoot(customRootElement.shadowRoot);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

customRoot.render(
  <StrictMode>
    <CustomApp />
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MainScreen from "./screen/mainScreen/MainScreen";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ChakraProvider>
    <MainScreen />
  </ChakraProvider>
);

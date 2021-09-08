import React from "react";
import ReactDom from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";
import App from "./App";
import "./index.css";

ReactDom.render(
  <SpeechProvider appId="6ce7edcc-69c2-4de4-ab0f-71b9fc78a3a9" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);

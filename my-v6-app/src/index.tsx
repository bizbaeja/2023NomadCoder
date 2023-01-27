import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./global";
import { darkTheme, lightTheme } from "./theme";
import { RecoilRoot } from "recoil";
import isDark from "./App";
import { isDarkAtom } from "./atoms";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={isDark(false) ? darkTheme : lightTheme}>
          <GlobalStyles />
          <App></App>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);

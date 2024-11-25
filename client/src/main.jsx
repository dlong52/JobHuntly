import React from "react";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store.js";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { SnackbarProvider } from "./providers/SnackbarProvider";
import AuthProvider from "./providers/AuthenticationProvider";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <SnackbarProvider>
      <AuthProvider>
        <Router>
          <Provider store={store}>
            <App />
          </Provider>
        </Router>
      </AuthProvider>
    </SnackbarProvider>
  </QueryClientProvider>
);

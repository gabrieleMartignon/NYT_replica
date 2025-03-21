import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./assets/Components/App/App.jsx";
import { Provider } from "react-redux";
import store from "./assets/Store/store.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./assets/Pages/SignUpPage.jsx";
import { Navigate } from "react-router-dom";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Home/:World/:World" />} />
          <Route path="/Home/:World/:World" element={<App />} />
          <Route path="/SignUp" element={<SignUpPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

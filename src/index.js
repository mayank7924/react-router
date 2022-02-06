import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //to connect your app to the browser's URL
import About from "./routes/About";
import Contacts from "./routes/Contacts";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

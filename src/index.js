import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //to connect your app to the browser's URL
import About from "./routes/About";
import Contacts from "./routes/Contacts";
import layout from "./Layout";

const AppComponent = layout(App);
const AboutComponent = layout(About);
const ContactsComponent = layout(Contacts);

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppComponent />} />
      <Route path="/about" element={<AboutComponent />} />
      <Route path="/contacts" element={<ContactsComponent />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

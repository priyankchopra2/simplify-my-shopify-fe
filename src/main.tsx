import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./app/Home/HomePage.tsx";
import Layout from "./app/sidebar/sidebarLayout.tsx";
import SettingsPage from "./app/Settings/SettingsPage.tsx";
import FaqPage from "./app/Faq/FaqPage.tsx";
// import  { Redir } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element:  <App>
    {/* return <Redirect to='/home'  /> */}
    <></>
  </App>,
  },
  {
    path: "/home",
    element: (
      <App>
        <HomePage></HomePage>
      </App>
    ),
  },
  {
    path: "/settings",
    element: (
      <App>
       <SettingsPage></SettingsPage>
      </App>
    ),
  },
  {
    path: "/sms-pricing",
    element: <App>
      <></>
      </App>,
  },
  {
    path: "/analytics",
    element: <App>
      <></>
    </App>,
  },
  {
    path: "/faqs",
    element: <App>
      <FaqPage></FaqPage>
    </App>,
  },
  {
    path: "/subscriptions",
    element: <App>
      <></>
    </App>,
  },
  {
    path: "/firebase",
    element: <App>
      <></>
    </App>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { BrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";
// import "normalize.css";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import Account from "./pages/Account";

// const router = BrowserRouter([
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//   },
//   {
//     path: "/",
//     element: <Signup />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/account",
//     element: <Account />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// )

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "normalize.css";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Account from "./pages/Account";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


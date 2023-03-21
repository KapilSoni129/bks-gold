
import React from "react"
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";import Dashboard from "./homepage/Dashboard"
import Signup from "./homepage/SignUp"
import { AuthProvider } from "./contexts/AuthContext"
import Login from "./homepage/Login"
import PrivateRoute from "./homepage/PrivateRoute"
import ForgotPassword from "./homepage/ForgotPassword"
import UpdateProfile from "./homepage/UpdateProfile"

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Dashboard/>),
  },
  {
    path: "/update-profile",
    element: (<UpdateProfile/>),
  },
  {
    path: "/signup",
    element: (<Signup/>),
  },
  {
    path: "/login",
    element: (<Login/>),
  },
  {
    path: "/forgot-password",
    element: (<ForgotPassword/>),
  },
]);

function App() {
  return (
        <RouterProvider router={router} />
  )
}

export default App
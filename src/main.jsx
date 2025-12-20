import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import SingleProduct from "./pages/SingleProduct";
import Layout from "./Layout/Layout";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./Context/AuthContext";
import { CartProvider } from "./Context/CartContext";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/singleproduct/:id",
        element: <SingleProduct />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <QueryClientProvider client={queryClient}>
    
    <AuthProvider>
      <CartProvider>
      <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>

  </QueryClientProvider>
);
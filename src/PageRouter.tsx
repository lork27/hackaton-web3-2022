import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import AdminPage from "./pages/AdminPage";
import AidStatusPage from "./pages/AidStatusPage";
import HomePage from "./pages/HomePage";

export default function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <Layout>
              <Navigate to={"/iop-map"} />
            </Layout>
          }
        />
        <Route
          path="/iop-map"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/admin"
          element={
            <Layout>
              <AdminPage />
            </Layout>
          }
        />
        <Route
          path="/aid-track"
          element={
            <Layout>
              <AidStatusPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

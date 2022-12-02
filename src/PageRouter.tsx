import { Stack } from "@mantine/core";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import AboutUs from "./pages/AboutUs";
import AdminPage from "./pages/AdminPage";
import AidStatusPage from "./pages/AidStatusPage";
import HomePage from "./pages/HomePage";
import { useViewportSize } from "@mantine/hooks";

export default function PageRouter() {
  const { width } = useViewportSize();
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
              <Stack w={width > 900 ? 600 : width - 20} mx={"auto"}>
                <AdminPage />
              </Stack>
            </Layout>
          }
        />
        <Route
          path="/aid-track"
          element={
            <Layout>
              <Stack w={width > 900 ? 600 : width - 20} mx={"auto"}>
                <AidStatusPage />
              </Stack>
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

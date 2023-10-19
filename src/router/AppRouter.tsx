import { Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "../auth/ProtectedRoute";
import {
  AdmEmp,
  HomePage,
  Login,
  ProfilePage,
  Register,
  AdmColaboradoresPage,
  EventList,
  ProfileEmp,
  RankList,
  CreateCompanyPage,
  TagsPage,
  PrizeCorner
} from "../pages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute>
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminEmpresa"
          element={
            <ProtectedRoute>
              <AdmEmp />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admEventos"
          element={
            <ProtectedRoute>
              <AdmEmp />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admColaboradores"
          element={
            <ProtectedRoute>
              <AdmColaboradoresPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <EventList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/miEmpresa"
          element={
            <ProtectedRoute>
              <ProfileEmp />
            </ProtectedRoute>
          }
        />
        <Route
          path="/rank"
          element={
            <ProtectedRoute>
              <RankList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/createCompany"
          element={
            <ProtectedRoute>
              <CreateCompanyPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/interest"
          element={
            <ProtectedRoute>
              <TagsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shop"
          element={
            <ProtectedRoute>
              <PrizeCorner/>
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </>
  );
};

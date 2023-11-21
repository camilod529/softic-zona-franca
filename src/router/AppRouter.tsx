import { Route, Routes } from "react-router-dom";

import { ProtectedRoute } from "../auth/ProtectedRoute";
import { CreateColaboradorPage } from "../pages/CreateColaboradorPage";
import {
  AdmEmp,
  AdmEventPage,
  HomePage,
  Login,
  ProfilePage,
  AdmColaboradoresPage,
  EventList,
  ProfileEmp,
  RankList,
  CreateCompanyPage,
  TagsPage,
  PrizeCorner,
  EventDetail,
  MainPage,
  CreateEventPage,
} from "../pages";
import { CreatePrizePage } from "../pages/CreatePrizePage";
import { AdmPrizePage } from "../pages/AdmPrizePage";
import { ReedPrizes } from "../pages/ReedPrizes";

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
          path="/intereses"
          element={
            <ProtectedRoute>
              <TagsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/mainPage"
          element={
            <ProtectedRoute>
              <MainPage />
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
              <AdmEventPage />
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
          path="/admPrizes"
          element={
            <ProtectedRoute>
              <AdmPrizePage />
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
          path="/events/:id"
          element={
            <ProtectedRoute>
              <EventDetail />
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
          path="/shop"
          element={
            <ProtectedRoute>
              <PrizeCorner />
            </ProtectedRoute>
          }
        />
        <Route
          path="/createColaborator"
          element={
            <ProtectedRoute>
              <CreateColaboradorPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/createEvent"
          element={
            <ProtectedRoute>
              <CreateEventPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/createPrize"
          element={
            <ProtectedRoute>
              <CreatePrizePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reedPrizes"
          element={
            <ProtectedRoute>
              <ReedPrizes/>
            </ProtectedRoute>
          }
        />

        <Route path="/*" element={<HomePage />} />
      </Routes>
    </>
  );
};

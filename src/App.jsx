import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/Routes/PrivateRoute";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<HomePage />} path="/" exact />
          <Route element={<ProfilePage />} path="/profile/:id" />
        </Route>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegistrationPage />} path="/registration" />
        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </>
  );
}

export default App;

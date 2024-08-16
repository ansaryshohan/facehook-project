import { Navigate, Outlet } from "react-router-dom";
import ProfileContextProvider from "../../contexts/ProfileContextProvider";
import Header from "../header/Header";
import { useAuthContext } from "../../hooks/useAuthContext";

const PrivateRoute = () => {
  const { auth } = useAuthContext();
  return (
    <>
      {auth.authToken ? (
        <>
          <ProfileContextProvider>
            <Header />
            <main className="mx-auto max-w-[1020px] py-8">
              <div className="container">
                <Outlet />
              </div>
            </main>
          </ProfileContextProvider>
        </>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default PrivateRoute;

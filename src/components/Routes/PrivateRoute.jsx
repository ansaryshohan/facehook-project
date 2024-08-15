import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import Header from "../header/Header";

const PrivateRoute = () => {
  const { auth } = useAuthContext();
  return (
    <>
      {auth.user ? (
        <>
           <Header />
          <main className="mx-auto max-w-[1020px] py-8">
            <div className="container">
              <Outlet />
            </div>
          </main>
        </>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default PrivateRoute;

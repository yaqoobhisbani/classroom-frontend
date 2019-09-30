import React, { useContext, useEffect, Suspense } from "react";
import { setAuthToken } from "./utils/axios";
import AuthContext from "./context/auth/authContext";
import LinearProgress from "@material-ui/core/LinearProgress";

const AuthApp = React.lazy(() => import("./apps/AuthApp"));
const UnAuthApp = React.lazy(() => import("./apps/UnAuthApp"));

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Suspense fallback={<LinearProgress color="secondary" />}>
      {isAuthenticated ? <AuthApp /> : <UnAuthApp />}
    </Suspense>
  );
};

export default App;

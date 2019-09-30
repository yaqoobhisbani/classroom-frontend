import React from "react";
import { setAuthToken } from "./utils/axios";
import AuthContext from "./context/auth/authContext";
import LinearProgress from "@material-ui/core/LinearProgress";

const AuthApp = React.lazy(() => import("./apps/AuthApp"));
const UnAuthApp = React.lazy(() => import("./apps/UnAuthApp"));

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const authContext = React.useContext(AuthContext);
  const { isAuthenticated, loadUser } = authContext;

  React.useEffect(() => {
    loadUser();
  }, []);

  return (
    <React.Suspense fallback={<LinearProgress color="secondary" />}>
      {isAuthenticated ? <AuthApp /> : <UnAuthApp />}
    </React.Suspense>
  );
};

export default App;

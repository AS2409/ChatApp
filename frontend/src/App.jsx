import React from "react";
import Left from "./home/left/Left";
import Right from "./home/right/Right";
import Logout from "./home/left1/Logout";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "./components/Loading";
import toast, { Toaster, ToastBar } from "react-hot-toast";
import DeleteAccount from "./home/left1/DeleteAccountButton"; // Ensure DeleteAccount is imported

function App() {
  const { authUser, setAuthUser } = useAuth(); // Accessing the auth state
  console.log(authUser);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen overflow-hidden">
                {/* <DeleteAccount /> Ensure DeleteAccount button is here */}
                <Logout />
                <Left />
                <Right />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>

      {/* Loading Spinner/Component if needed */}
      <Loading />

      <div className="bg-coralNeon">
        <Toaster>
          {(t) => (
            <ToastBar
              toast={t}
              style={{
                ...t.style,
                animation: t.visible
                  ? "custom-enter 1s ease"
                  : "custom-exit 1s ease forwards",
              }}
            />
          )}
        </Toaster>
      </div>
    </>
  );
}

export default App;

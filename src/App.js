import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminCourses from "./components/Admin/AdminCourses/AdminCourses";
import CreateCourse from "./components/Admin/CreateCourse/CreateCourse";
import Users from "./components/Admin/Users/Users";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ResetPassword from "./components/Auth/ResetPassword";
import CoursePage from "./components/CoursePage/CoursePage";
import Courses from "./components/Courses/Courses";
import Home from "./components/Home/Home";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import NotFound from "./components/Layout/NotFound";
import ChangePassword from "./components/Profile/ChangePassword";
import Profile from "./components/Profile/Profile";
import UpdateProfile from "./components/Profile/UpdateProfile";
import toast, { Toaster } from "react-hot-toast";
import { loadUser } from "./redux/actions/user";
import { ProtectedRoute } from "protected-route-react";
import HomeLoader from "./components/Layout/HomeLoader";
import TopDown from "./assets/TopDown";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import BlogsDeatails from "./components/Courses/BlogsDeatails";

function App() {
  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  const { isAuthenticated, user, message, error, loading } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, message, error]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <HomeLoader />
      ) : (
        <>
          <Header isAuthenticated={isAuthenticated} user={user} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Courses />} />
            <Route path="/blog/:id" element={<BlogsDeatails />} />

            <Route
              path="/course/:id"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <CoursePage />
                </ProtectedRoute>
              }
            />

            {/* Profile Routes  */}
            <Route
              path="/changepassword"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ChangePassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/updateprofile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <UpdateProfile user={user} />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === "admin"}
                >
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profile user={user} />
                </ProtectedRoute>
              }
            />
            {/* Auth Routes  */}
            <Route
              path="/login"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Register />
                </ProtectedRoute>
              }
            />
            <Route
              path="/forgetpassword"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <ForgotPassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/resetpassword/:token"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <ResetPassword />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/createblog"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === "admin"}
                >
                  <CreateCourse />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/blogs"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === "admin"}
                >
                  <AdminCourses />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/users"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === "admin"}
                >
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <Toaster />
        </>
      )}

      <TopDown />
    </Router>
  );
}

export default App;

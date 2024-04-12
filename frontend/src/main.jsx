import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import LogIn from "./pages/LogIn.jsx";
import Section from "./pages/Section.jsx";
import SignUp from "./pages/SignUp.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "../src/redux/store.js";
import MentorSignUp from "./pages/MentorSignUp.jsx";
import Profile from "./pages/Profile.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx"
import DashBoard from "./pages/DashBoard.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import OnlyMentorPrivateRoute from "./components/OnlyMentorPrivateRoute.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<LogIn />} />
      <Route path="section" element={<Section />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="mensignup" element={<MentorSignUp />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password" element={<ResetPassword />} />
      
      <Route element={<PrivateRoute />}>
      

      {/* Nested route for PrivateRoute */}
      <Route element={<OnlyMentorPrivateRoute />}>
        
        
        <Route path="create-post" element={<CreatePost />} />
        
      
      </Route>
      <Route path="dash" element={<DashBoard />} />
      <Route path="profile" element={<Profile />} />

      
       
      
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

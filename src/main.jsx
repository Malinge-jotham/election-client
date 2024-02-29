import { Buffer } from 'buffer'; // Import Buffer

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { AuthProvider } from './AuthContext'; // Import AuthProvider

import Landing from "./pages/Landing.jsx";
import Register from "./pages/Register.jsx";
import Voting from "./pages/Voting.jsx";
import CandidateRegistration from "./components/CandidateRegistration.jsx";
import Login from "./pages/Login.jsx";
import Results from "./pages/Results.jsx";
import CandidateForm from "./pages/CandidateForm.jsx";
import Reports from "./pages/Reports.jsx";
import Error from "./pages/Error.jsx";
import CandidatesReports from './pages/CandidatesReports.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/vote",
        element: <Voting />
      },
      {
        path: "/Cand-Register",
        element: <CandidateRegistration />,
      },
      {
        path: "/candidates",
        element: <CandidateForm />,
      },
      {
        path: "/results",
        element: <Results />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Reports",
        element: <Reports />,
      },
      {
        path: "/Tally",
        element: <CandidatesReports />,
      },
      {
        path: "*",
        element: <Error />,
      },
        
      

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

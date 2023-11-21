import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Components

// Pages
import RegClient from "./Pages/RegClient";
import RegOwner from "./Pages/RegOwner";
import RegAgent from "./Pages/RegAgent";

import Login from "./Pages/Login";
import RegistrationForm from "./Pages/RegistrationForm";
import Welcome from "./Pages/Welcome";

import Home from "./Pages/Home";
import About from "./Pages/About";
import FAQ from "./Pages/FAQ";
import Contact from "./Pages/Contact";

// Layouts
import RootLayout from "./Layouts/RootLayout";
import { Help } from "@mui/icons-material";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="RegClient" element={<RegClient />} />
      <Route path="RegOwner" element={<RegOwner />} />
      <Route path="RegAgent" element={<RegAgent />} />

      <Route path="Welcome" element={<Welcome />} />

      <Route path="Login" element={<Login />} />
      <Route path="about" element={<About />} />
      <Route path="RegistrationForm" element={<RegistrationForm />} />
      <Route path="help" element={<Help />}>
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

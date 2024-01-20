import { Route, Routes } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/LandingPages/LandingPageLayout";
import Home from "./components/LandingPages/LandingPageComponents/Home";
import Terms from "./components/LandingPages/LandingPageComponents/Terms";

import DashLayout from "./components/Dashboard/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/terms" element={<Terms />} />
        </Route>

        <Route path="/dashboard/*" element={<DashLayout />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;

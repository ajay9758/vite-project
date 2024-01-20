import { Outlet } from "react-router-dom";
import Navbar from "./LandingPageComponents/Navbar";
import Footer from "./LandingPageComponents/Footer";
import Box from "@mui/material/Box";
import bgimage from "../../assets/geiranger.jpg";

export default function LandingPageLayout() {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            zIndex: -1, // Place background behind other content
            backgroundImage: `url(${bgimage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed", // Ensure image stays fixed on scroll
          }}
        />
        <Navbar />
        <Outlet />
        <Footer />
      </Box>
    </>
  );
}

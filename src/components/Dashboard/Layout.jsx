import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import DashHeader from "./DashHeader";
import DashSidebar from "./DashSidebar";
import Main from "./MainPage";
import useMediaQuery from "@mui/material/useMediaQuery";
import data from "./Routes";

export default function DashLayout() {
  const matchMobileView = useMediaQuery("(max-width:450px)");

  useEffect(() => {
    if (matchMobileView) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [matchMobileView]);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleDrawer = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        margin: "0",
      }}
      className="layout"
    >
      <Box sx={{ display: "flex", flexGrow: 1 }} className="maincontainer">
        <DashSidebar
          routeData={data}
          isCollapsed={isCollapsed}
          toggleDrawer={toggleDrawer}
        />
        <Box sx={{ flexGrow: 1 }} className="seconderycontainer">
          <DashHeader isCollapsed={isCollapsed} toggleDrawer={toggleDrawer} />
          <Main />
        </Box>
      </Box>
    </Box>
  );
}

import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Menu, Close } from "@mui/icons-material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import NavigationHeader from "./NavigationHeader";
import Logo from "../../../assets/diamond.png";

const Navbar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const matchMobileView = useMediaQuery("(max-width:960px)");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "1.5rem",
        }}
      >
        <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
          <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
            <Menu />
          </IconButton>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // flexDirection: { xs: "column", md: "row" },
            transition: (theme) => theme.transitions.create(["top"]),
            ...(matchMobileView && {
              backgroundColor: "skyblue",
              zIndex: "appBar",
              position: "fixed",
              height: { xs: "50vh", md: "auto" },
              top: visibleMenu ? 0 : "-120vh",
              left: 0,
            }),
          }}
        >
          <Box
            component={"img"}
            src={Logo}
            alt="logo"
            sx={{
              width: 60,
              objectFit: "contain",
              cursor: "pointer",
              marginRight: "7rem",
              display: { xs: "none", md: "block", lg: "block" },
            }}
            onClick={() => {
              window.location.href = "/";
            }}
          />
          <NavigationHeader />

          {visibleMenu && matchMobileView && (
            <IconButton
              sx={{
                position: "fixed",
                top: 10,
                right: 10,
              }}
              onClick={() => setVisibleMenu(!visibleMenu)}
            >
              <Close />
            </IconButton>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Navbar;

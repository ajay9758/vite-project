import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
export default function DashHeader({ isCollapsed, toggleDrawer }) {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#4681e8",
        padding: "10px",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          height: "45px",
        }}
      >
        {isCollapsed && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <IconButton onClick={() => toggleDrawer(!isCollapsed)}>
              <Menu />
            </IconButton>
          </Box>
        )}
      </Box>
      <IconButton>
        <PersonOutlineIcon />
        Name
      </IconButton>
    </Box>
  );
}

DashHeader.propTypes = {
  isCollapsed: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};

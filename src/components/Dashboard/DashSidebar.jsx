import PropTypes from "prop-types";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Typography from "@mui/material/Typography";

export default function DashSidebar({ routeData, isCollapsed, toggleDrawer }) {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          borderRight: "1px solid #ccc",
        }}
      >
        <Sidebar
          collapsed={isCollapsed}
          collapsedWidth="0px"
          width={"210px"}
          transitionDuration={500}
        >
          <Menu>
            <Box
              sx={{
                display: "flex",
                padding: "0.3rem",
              }}
            >
              <MenuItem
                style={{
                  backgroundColor: "#4681e8",
                  borderBottom: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "0.5rem",
                }}
                suffix={isCollapsed ? "" : "Menu"}
              />
              <IconButton color="inherit" onClick={toggleDrawer}>
                <MenuOpenIcon />
              </IconButton>
            </Box>

            {routeData?.map((item) =>
              item.subMenu ? (
                <SubMenu
                  label={item.subMenuTitle}
                  key={item.key}
                  style={{
                    backgroundColor: "#2e528f",
                    padding: "0.3rem",
                    color: "#efefef",
                    whiteSpace: "nowrap",
                    margin: "0.5rem",
                  }}
                >
                  {item.subMenuData.map((subItem) => (
                    <MenuItem
                      key={subItem.subKey}
                      style={{
                        backgroundColor: "#cbdaf2",
                        margin: "0.5rem",
                        padding: "0.3rem",
                      }}
                      // component={<Link href={subItem.subTo} />}
                    >
                      {subItem.subLabel}
                    </MenuItem>
                  ))}
                </SubMenu>
              ) : (
                <MenuItem
                  key={item.key}
                  icon={item.icon}
                  // component={<Link href={item.to} />}
                  style={{
                    padding: "0.3rem",
                    marginBottom: "0.5rem",
                    borderRadius: "10px",
                    backgroundColor: "#cbdaf2",
                    margin: "0.5rem",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      whiteSpace: "break-spaces",
                    }}
                  >
                    {item.label}
                  </Typography>
                </MenuItem>
              )
            )}
          </Menu>
        </Sidebar>
      </Box>
    </Box>
  );
}

DashSidebar.propTypes = {
  routeData: PropTypes.array.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

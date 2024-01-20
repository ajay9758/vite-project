import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IconButton, Link } from "@mui/material";
import Flag from "../../../assets/GB.png";

const navigations = [
  {
    label: "Home",
    path: "/",
    index: 0,
  },
  {
    label: "Terms",
    path: "/terms",
    index: 2,
  },
  {
    label: "Order",
    path: "/#",
    index: 1,
  },
  {
    label: "Our Customers",
    path: "/#",
    index: 11,
  },
  {
    label: "About Us",
    path: "/#",
    index: 12,
  },
  {
    label: "Contact Us",
    path: "/#",
    index: 13,
  },
];

const NavigationHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {navigations.map(({ path: destination, label, index }) => (
        <Link href={destination} key={index}>
          <Box
            key={index}
            duration={350}
            sx={{
              position: "relative",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "flex-end",
              textOverflow: "ellipsis",
              px: { xs: 0, md: 2 },
              mb: { xs: 3, md: 0 },
              fontSize: { xs: "1.2rem", md: "inherit" },
            }}
          >
            <Typography
              component={"span"}
              fontWeight={"bold"}
              color="white"
              sx={{
                "&:hover": {
                  color: "#efefef",
                },
              }}
            >
              {label}
            </Typography>
          </Box>
        </Link>
      ))}
      <Box
        duration={350}
        sx={{
          position: "relative",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-end",
          textOverflow: "ellipsis",
          px: { xs: 0, md: 2 },
          mb: { xs: 3, md: 0 },
        }}
      >
        <IconButton
          sx={{
            fontSize: { xs: "1.2rem", md: "inherit" },
            color: "white",
            "&:hover": {
              color: "#efefef",
            },
          }}
        >
          English &nbsp;&nbsp;
          <img src={Flag} alt="uk" height={20} width={25} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavigationHeader;

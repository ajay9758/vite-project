import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Footer() {
  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        padding: "48px 0px 0px",
        backgroundImage:
          "url(https://assets.nicepagecdn.com/9a6d2659/5308532/images/bg-gradient-1.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        marginBottom: "0px",
      }}
    >
      <Box m={2}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              delectus eum enim harum in illum, adipisci repr
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              pariatur aliquam accusantium a voluptas ducimus.
            </Typography>
            <Typography variant="body2">Email: test@gmail.com</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" gutterBottom>
              Powered By
            </Typography>
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Typography variant="body2">SOW</Typography>
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" align="center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            tenetur et saepe a expedita, libero delectus amet pariatur fuga ex
            tempore voluptas omnis explicabo.
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "20px 0 0",
            padding: "20px 0",
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="body2" align="center">
              {"Copyright © "}
              <Link
                color="inherit"
                href="https://#.org/"
                target="_blank"
                rel="noopener"
                style={{ textDecoration: "none" }}
              >
                test
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

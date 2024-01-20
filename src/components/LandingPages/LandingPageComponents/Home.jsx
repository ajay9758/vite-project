import {
  Box,
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        marginTop: "6rem",
        marginBottom: "6rem",
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginLeft: { xs: "0.5rem", md: "10rem" },
        marginRight: { xs: "0.5rem", md: "10rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "30px",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "white",
          padding: "6rem",
        }}
      >
        <Box component={"form"}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography
                variant="h3"
                component="h3"
                align="center"
                sx={{ mb: 2 }}
                color={"red"}
                fontWeight={"bold"}
              >
                Log in
              </Typography>
            </Grid>

            <Grid item xs={12} md={12}>
              <TextField
                label="Enter your email address"
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
                sx={{ mb: 2 }}
                required
                helperText="We'll never share your email."
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                label="Enter your password"
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
                type="password"
                required
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <Typography
                variant="body1"
                component="p"
                align="center"
                sx={{ mb: 2 }}
                color={"black"}
                textAlign={"start"}
              >
                <Checkbox /> Remember me
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="success"
                size="large"
                fullWidth
                sx={{
                  mb: 2,
                  borderRadius: "20px",
                }}
              >
                Log in
              </Button>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <Typography
                variant="body1"
                component="p"
                align="center"
                sx={{ mb: 2 }}
                color={"black"}
                textAlign={"start"}
              >
                {"Don't have an account?"} <a href="/register">Sign up</a>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Typography
                variant="body1"
                component="p"
                align="center"
                sx={{ mb: 2 }}
                color={"black"}
                textAlign={"end"}
              >
                {"Forgot Password"} <a href="/#">Click here</a>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

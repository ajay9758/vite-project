import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Container, Grid, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import axios from "../../utils/axiosInstance/axios";
import { useEffect, useState } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 90, hide: true },
  {
    field: "article_no",
    headerName: "Article No.",
    width: 150,
    editable: true,
  },
  {
    field: "product",
    headerName: "Product / Service",
    width: 150,
    editable: true,
  },
  {
    field: "in_price",
    headerName: "In Price",
    width: 110,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    sortable: false,
    width: 130,
  },
  {
    field: "unit",
    headerName: "Unit",
    sortable: false,
    width: 130,
  },
  {
    field: "in_stock",
    headerName: "In Stock",
    sortable: false,
    width: 130,
  },
  {
    field: "description",
    headerName: "Description",
    sortable: false,
    width: 200,
  },
];

export default function MainPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/products/")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "10px",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Search Article No."
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} md={1} lg={1} />

          <Grid item xs={12} md={2} lg={2}>
            <Button variant="outlined" endIcon={<AddIcon />}>
              Add New
            </Button>
          </Grid>
          <Grid item xs={12} md={2} lg={2}>
            <Button variant="outlined" endIcon={<LocalPrintshopIcon />}>
              Price List
            </Button>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Search Product"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        <Box sx={{ height: 400, width: "100%", mt: 1 }}>
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            sx={{
              "& .MuiDataGrid-cell": {
                borderRadius: "10px",
                m: 0,
                p: 0,
                borderColor: "primary.light",
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

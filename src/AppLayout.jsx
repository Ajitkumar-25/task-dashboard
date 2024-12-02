import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
} from "@mui/material";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Box
        sx={{
          display: { xs: "none", sm: "block" }, // Show sidebar on larger screens
          width: { sm: "240px", md: "250px" },
          backgroundColor: "#1e272e",
          color: "white",
        }}
      >
        <Sidebar />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top Bar */}
        <AppBar
          position="static"
          sx={{ backgroundColor: "orange", padding: "10px 20px" }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", letterSpacing: "1px" }}
            >
              Task Management Dashboard
            </Typography>
            <Box display="flex" alignItems="center" gap="10px">
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  color: "white",
                }}
              >
                Ajit Kumar
              </Typography>
              <IconButton color="inherit">
                <Avatar
                  alt="Ajit Kumar"
                  src="/static/images/avatar/1.jpg"
                  sx={{ border: "2px solid white" }}
                />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <Box sx={{ padding: "20px", backgroundColor: "#f8f9fa", flexGrow: 1 }}>
          <Outlet /> {/* Renders the child routes (Dashboard/Details, etc.) */}
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;

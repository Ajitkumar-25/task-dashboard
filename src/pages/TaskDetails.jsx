import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Typography, Paper, Button } from "@mui/material";

const TaskDetails = () => {
  const { id } = useParams();
  const task = useSelector((state) =>
    state.tasks.tasks.find((task) => task.id === parseInt(id))
  );

  if (!task) {
    return (
      <Typography variant="h5" align="center" color="error">
        Task not found
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90%",
        backgroundColor: "#f4f7fc",
        padding: "20px",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: "20px",
          maxWidth: "800px",
          width: "100%",
          borderRadius: "8px",
          backgroundColor: "white",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "600", marginBottom: "20px" }}
        >
          {task.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "20px", color: "#555" }}
        >
          {task.description}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: "bold",
            color: "#ff5722",
            marginBottom: "10px",
          }}
        >
          Due Date: {task.dueDate}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: "bold",
            color: task.completed ? "#4caf50" : "#f44336",
            marginBottom: "20px",
          }}
        >
          Status: {task.completed ? "Completed" : "Pending"}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "none", padding: "10px 20px" }}
          onClick={() => window.history.back()}
        >
          Go Back
        </Button>
      </Paper>
    </Box>
  );
};

export default TaskDetails;

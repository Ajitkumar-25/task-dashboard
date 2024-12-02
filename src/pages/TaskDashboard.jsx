import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter, addTask } from "../redux/taskSlice";
import TaskList from "../components/TaskList";
import AddEditTaskModal from "../components/AddEditTaskModal";
import {
  Button,
  Select,
  MenuItem,
  Grid,
  Typography,
  FormControl,
  InputLabel,
} from "@mui/material";

const TaskDashboard = () => {
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState(false);

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Task Management Dashboard
      </Typography>

      {/* Filter and Add Task Section */}
      <Grid container spacing={2} style={{ marginBottom: "20px" }}>
        {/* Filter Dropdown */}
        <Grid item xs={8}>
          <FormControl fullWidth>
            <InputLabel>Filter Tasks</InputLabel>
            <Select
              defaultValue="all"
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              <MenuItem value="all">All Tasks</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="overdue">Overdue</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Add Task Button */}
        <Grid item xs={4} style={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsAdding(true)}
          >
            Add Task
          </Button>
        </Grid>
      </Grid>

      {/* Task List */}
      <TaskList />

      {/* Add/Edit Modal */}
      {isAdding && (
        <AddEditTaskModal
          open={isAdding}
          onSave={(newTask) =>
            dispatch(addTask({ id: Date.now(), ...newTask }))
          }
          onClose={() => setIsAdding(false)}
        />
      )}
    </div>
  );
};

export default TaskDashboard;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleComplete, deleteTask, editTask } from "../redux/taskSlice";
import {
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import AddEditTaskModal from "./AddEditTaskModal";
import ConfirmationModal from "./ConfirmationModal"; // Import the new modal

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state.tasks);

  const [editTaskModal, setEditTaskModal] = useState(null);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false); // State for confirmation modal
  const [taskToDelete, setTaskToDelete] = useState(null); // Task to delete

  const filteredTasks = tasks.filter((task) => {
    const isOverdue = new Date(task.dueDate) < new Date();
    switch (filter) {
      case "completed":
        return task.completed;
      case "pending":
        return !task.completed && !isOverdue;
      case "overdue":
        return !task.completed && isOverdue;
      default:
        return true;
    }
  });

  // Function to handle delete confirmation
  const handleDeleteConfirm = (task) => {
    if (task) {
      dispatch(deleteTask(task.id)); // Dispatch delete action
      setOpenConfirmDialog(false); // Close confirmation dialog
      setTaskToDelete(null); // Reset task to delete
    }
  };

  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: "20px", fontWeight: "600" }}>
        Task List
      </Typography>

      <List sx={{ padding: "0" }}>
        {filteredTasks.map((task) => (
          <ListItem
            key={task.id}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              padding: "10px 0",
              borderBottom: "1px solid #ddd",
            }}
          >
            <Checkbox
              checked={task.completed}
              onChange={() => dispatch(toggleComplete(task.id))}
              sx={{
                color: task.completed ? "#4caf50" : "#757575",
                "&.Mui-checked": {
                  color: "#4caf50",
                },
              }}
            />
            <ListItemText
              primary={
                <Link
                  to={`/tasks/${task.id}`}
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontWeight: "500",
                    fontSize: "1.1rem",
                  }}
                >
                  {task.title}
                </Link>
              }
              secondary={
                <Typography
                  variant="body2"
                  sx={{ color: "#757575", fontSize: "0.9rem" }}
                >
                  {task.description} - Due: {task.dueDate}
                </Typography>
              }
              sx={{ marginRight: "auto" }}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{
                fontSize: "0.9rem",
                marginRight: "10px",
                padding: "6px 16px",
              }}
              onClick={() => setEditTaskModal(task)} // Open modal for editing
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              size="small"
              sx={{
                fontSize: "0.9rem",
                padding: "6px 16px",
              }}
              onClick={() => {
                setTaskToDelete(task); // Set the task to be deleted
                setOpenConfirmDialog(true); // Open confirmation dialog
              }}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>

      {/* Add/Edit Task Modal */}
      {editTaskModal && (
        <AddEditTaskModal
          open={!!editTaskModal}
          task={editTaskModal}
          onSave={(updatedTask) => {
            dispatch(editTask(updatedTask));
            setEditTaskModal(null);
          }}
          onClose={() => setEditTaskModal(null)}
        />
      )}

      {/* Confirmation Modal for Deletion */}
      <ConfirmationModal
        open={openConfirmDialog}
        task={taskToDelete}
        onClose={() => setOpenConfirmDialog(false)}
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
};

export default TaskList;

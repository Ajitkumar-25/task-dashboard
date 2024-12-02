import { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import PropTypes from "prop-types"; // Import PropTypes for validation

const AddEditTaskModal = ({ open, onClose, onSave, task = {} }) => {
  const [title, setTitle] = useState(task.title || "");
  const [description, setDescription] = useState(task.description || "");
  const [dueDate, setDueDate] = useState(task.dueDate || "");

  const handleSave = () => {
    if (title && description && dueDate) {
      onSave({ ...task, title, description, dueDate });
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          margin: "auto",
          backgroundColor: "white",
          width: { xs: "90%", sm: "80%", md: "60%" }, // Adjust width for better responsiveness
          borderRadius: "8px",
          boxShadow: 24, // Adding a subtle shadow for better focus
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Centering the modal
        }}
      >
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
          sx={{ marginBottom: "16px" }}
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
          sx={{ marginBottom: "16px" }}
        />
        <TextField
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          fullWidth
          margin="normal"
          sx={{ marginBottom: "16px" }}
        />
        <Button
          variant="contained"
          onClick={handleSave}
          sx={{ marginTop: "20px", width: "100%" }}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
};

// Prop validation for the AddEditTaskModal component
AddEditTaskModal.propTypes = {
  open: PropTypes.bool.isRequired, // Modal open state
  onClose: PropTypes.func.isRequired, // Function to close the modal
  onSave: PropTypes.func.isRequired, // Function to save the task
  task: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    dueDate: PropTypes.string,
  }), // Optional task object to prefill form
};

AddEditTaskModal.defaultProps = {
  task: {},
};

export default AddEditTaskModal;

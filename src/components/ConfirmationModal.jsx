import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import PropTypes from "prop-types"; // For prop validation

const ConfirmationModal = ({ open, onClose, onConfirm, task }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="confirm-delete-dialog"
    >
      <DialogTitle id="confirm-delete-dialog">Confirm Deletion</DialogTitle>
      <DialogContent>
        <p>
          Are you sure you want to delete the task:{" "}
          <strong>{task?.title}</strong>?
        </p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="error" variant="contained">
          Cancel
        </Button>
        <Button
          onClick={() => onConfirm(task)}
          color="success"
          variant="contained"
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Prop validation for the ConfirmationModal component
ConfirmationModal.propTypes = {
  open: PropTypes.bool.isRequired, // Modal open state
  onClose: PropTypes.func.isRequired, // Function to close the modal
  onConfirm: PropTypes.func.isRequired, // Function to confirm the delete
  task: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }), // Task to be deleted
};

export default ConfirmationModal;

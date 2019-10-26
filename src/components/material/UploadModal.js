import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  TextField,
  DialogContent,
  Button,
  Grid
} from "@material-ui/core";

import RoomsContext from "../../context/rooms/roomsContext";
import MaterialContext from "../../context/material/materialContext";
import FileIcon from "@material-ui/icons/AttachFile";
import UploadIcon from "@material-ui/icons/CloudUpload";

const UploadModal = ({ open, onClose }) => {
  // Context & State
  const roomsContext = React.useContext(RoomsContext);
  const materialContext = React.useContext(MaterialContext);
  const { current } = roomsContext;
  const { uploadFile } = materialContext;

  const [file, setFile] = React.useState();
  const [fileName, setFileName] = React.useState("No File Selected");

  const onChange = e => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onExist = () => {
    setFileName("No File Selected");
    setFile(undefined);
    onClose();
  };

  const onSubmit = e => {
    if (file) {
      e.preventDefault();
      const formData = new FormData();
      formData.append("material", file);
      uploadFile(current.code, formData);
      onExist();
    }
  };

  return (
    <Dialog open={open} onClose={onExist} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Upload Material</DialogTitle>
      <DialogContent>
        <Grid container direction="column" alignItems="center" spacing={1}>
          <Grid item>
            <Button
              variant="contained"
              startIcon={<FileIcon />}
              component="label"
            >
              Choose File
              <input
                type="file"
                style={{ display: "none" }}
                accept=".pdf, .doc, .docx, .ppt, .pptx, .xls, .xlsx"
                onChange={onChange}
              />
            </Button>
          </Grid>

          <Grid item>
            <TextField
              disabled
              margin="normal"
              variant="outlined"
              label={fileName}
              fullWidth
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<UploadIcon />}
              onClick={onSubmit}
            >
              Upload
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onExist} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadModal;

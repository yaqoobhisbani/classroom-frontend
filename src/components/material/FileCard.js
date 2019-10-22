import React from "react";
import {
  Button,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  makeStyles,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import FileViewerDialog from "./FileViewerDialog";

import xls from "../../assets/xls.png";
import ppt from "../../assets/ppt.png";
import pdf from "../../assets/pdf.png";
import doc from "../../assets/word.png";

import AuthContext from "../../context/auth/authContext";
import RoomsContext from "../../context/rooms/roomsContext";
import MaterialContext from "../../context/material/materialContext";

const useStyles = makeStyles({
  card: {
    maxWidth: "100%"
  },
  cardContent: {
    paddingBottom: 5,
    paddingTop: 8
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between"
  },
  media: {
    height: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white"
  },
  mediaImg: {
    width: 48,
    height: 48
  },
  docBG: {
    background: "#0091ea"
  },
  pptBG: {
    background: "#e65100"
  },
  pdfBG: {
    background: "#d84315"
  },
  xlsBG: {
    background: "#4caf50"
  },
  avatar: {
    backgroundColor: "#d84315"
  }
});

const FileCard = ({ file, fileType }) => {
  const authContext = React.useContext(AuthContext);
  const roomsContext = React.useContext(RoomsContext);
  const materialContext = React.useContext(MaterialContext);
  const { user } = authContext;
  const { current } = roomsContext;
  const classes = useStyles();

  // File Viewer Modal State
  const [openViewer, setOpenViewer] = React.useState(false);
  const handleOpenViewer = () => setOpenViewer(true);
  const handleCloseViewer = () => setOpenViewer(false);

  // Local Dynamic Variables
  const isAdminLoggedIn = current.createdBy === user._id ? true : false;

  let cardTheme = {
    icon: null,
    bg: null
  };

  if (fileType === "doc") {
    cardTheme.icon = doc;
    cardTheme.bg = classes.docBG;
  } else if (fileType === "pdf") {
    cardTheme.icon = pdf;
    cardTheme.bg = classes.pdfBG;
  } else if (fileType === "ppt") {
    cardTheme.icon = ppt;
    cardTheme.bg = classes.pptBG;
  } else if (fileType === "xls") {
    cardTheme.icon = xls;
    cardTheme.bg = classes.xlsBG;
  }

  // Download File
  const download = () => {
    materialContext.downloadFile(file.downloadLink, file.originalName);
  };

  // Remove File
  const remove = () => {
    materialContext.deleteFile(file.downloadLink, file._id);
  };

  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card onClick={handleOpenViewer} className={classes.card}>
        <CardActionArea>
          <CardMedia className={`${classes.media} ${cardTheme.bg}`}>
            <img
              src={cardTheme.icon}
              alt={file.originalName}
              className={classes.mediaImg}
            />
          </CardMedia>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="subtitle2">
              {file.originalName}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button onClick={download} size="small" color="primary">
            Download
          </Button>
          {isAdminLoggedIn ? (
            <IconButton onClick={remove} size="small" color="primary">
              <DeleteIcon />
            </IconButton>
          ) : null}
        </CardActions>
      </Card>

      <FileViewerDialog
        file={file}
        open={openViewer}
        handleClose={handleCloseViewer}
      />
    </Grid>
  );
};

export default FileCard;

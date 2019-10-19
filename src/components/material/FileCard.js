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
  makeStyles
} from "@material-ui/core";

import xls from "../../assets/xls.png";
import ppt from "../../assets/ppt.png";
import pdf from "../../assets/pdf.png";
import doc from "../../assets/word.png";

import MaterialContext from "../../context/material/materialContext";

const useStyles = makeStyles({
  card: {
    maxWidth: "100%"
  },
  downBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  downBtnIcon: {
    marginRight: 8
  },
  cardContent: {
    paddingBottom: 5,
    paddingTop: 8
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
  const materialContext = React.useContext(MaterialContext);
  const classes = useStyles();

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

  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={`${classes.media} ${cardTheme.bg}`}>
            <img src={cardTheme.icon} className={classes.mediaImg} />
          </CardMedia>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="subtitle2">
              {file.originalName}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={download} size="small" color="primary">
            Download
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default FileCard;

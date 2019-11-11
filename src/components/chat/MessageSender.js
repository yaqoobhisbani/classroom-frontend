import React from "react";
import { Button, TextField, makeStyles } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import RoomsContext from "../../context/rooms/roomsContext";
import ChatContext from "../../context/chat/chatContext";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex"
  },
  messagebox: {
    flexGrow: 1
  },
  sendButton: {
    marginLeft: 10
  }
}));

const MessageSender = () => {
  // Context
  const chatContext = React.useContext(ChatContext);
  const roomsContext = React.useContext(RoomsContext);

  // State
  const [text, setText] = React.useState("");

  // Styles
  const classes = useStyles();

  // On Change
  const onChange = e => {
    e.preventDefault();
    setText(e.target.value);
  };

  // On Submit
  const onSubmit = e => {
    e.preventDefault();

    if (text.length > 0) {
      // Message Object
      const message = {
        text: text,
        classroom: roomsContext.current._id
      };

      chatContext.sendMessage(message);

      setText("");
    }
  };

  return (
    <form onSubmit={onSubmit} className={classes.container}>
      <TextField
        variant="outlined"
        multiline
        fullWidth
        label="Type Your Message.."
        onChange={onChange}
        value={text}
        className={classes.messagebox}
        onKeyPress={e => {
          if (e.key === "Enter") {
            onSubmit(e);
          }
        }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        endIcon={<SendIcon />}
        className={classes.sendButton}
      >
        Send
      </Button>
    </form>

    // <Grid container justify="center" alignItems="center" spacing={1}>
    //   <Grid item xs={8} sm={9} md={10}>
    //     <form id="message-form" onSubmit={onSubmit}>
    //       <TextField
    //         variant="outlined"
    //         multiline
    //         fullWidth
    //         label="Type Your Message.."
    //         onChange={onChange}
    //         value={text}
    //       />
    //     </form>
    //   </Grid>

    //   <Grid item xs>
    //     <Grid container justify="center">
    //       <Button
    //         type="submit"
    //         form="message-form"
    //         variant="contained"
    //         color="primary"
    //         endIcon={<SendIcon />}
    //       >
    //         Send
    //       </Button>
    //     </Grid>
    //   </Grid>
    // </Grid>
  );
};

export default MessageSender;

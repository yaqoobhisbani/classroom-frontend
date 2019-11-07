import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import RoomsContext from "../../context/rooms/roomsContext";
import ChatContext from "../../context/chat/chatContext";

const MessageSender = () => {
  // Context
  const chatContext = React.useContext(ChatContext);
  const roomsContext = React.useContext(RoomsContext);

  // State
  const [text, setText] = React.useState("");

  // On Change
  const onChange = e => setText(e.target.value);

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
    <Grid container justify="center" alignItems="center" spacing={1}>
      <Grid item xs={8} sm={9} md={10}>
        <form id="message-form" onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            multiline
            fullWidth
            label="Type Your Message.."
            onChange={onChange}
            value={text}
          />
        </form>
      </Grid>

      <Grid item xs>
        <Grid container justify="center">
          <Button
            type="submit"
            form="message-form"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MessageSender;

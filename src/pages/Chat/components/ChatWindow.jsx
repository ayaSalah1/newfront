import React from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { ArrowBack, Call, VideoCall } from "@mui/icons-material";
import MessageInput from "./MessageInput";
import Message from "./Message";

const ChatWindow = ({ selectedChat }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        height: "50vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          mb: 2,
        }}
      >
        <IconButton sx={{ mr: 1 }}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h6">{selectedChat}</Typography>
        <Box sx={{ ml: "auto" }}>
          <IconButton>
            <Call />
          </IconButton>
          <IconButton>
            <VideoCall />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ flex: 1, overflowY: "auto", mb: 2, px: 1 }}>
        <Message text="السلام عليكم...تم انهاء المهمه" isUser={false} />
        <Message text="يعطيك العافية...ارسلها" isUser={true} />
        <Message text="الله يعافيك ارسلتها المهندس" isUser={false} />
        <Message text="تمام هتواصل معه وأوافقهم" isUser={true} />
        <Message text="في شويه تعديلات ابغيه" isUser={true} />
        <Message text="ارسلها لي وهعدلهم بإذن الله" isUser={false} />
      </Box>
      <MessageInput />
    </Paper>
  );
};

export default ChatWindow;

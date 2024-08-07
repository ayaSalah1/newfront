import React, { useState } from "react";
import { Box, Grid, Divider } from "@mui/material";
import ChatWindow from "./ChatWindow";
import ChatList from "./ChatList";
import TapsComponent from "../../../Components/Taps.component";

const FirstTapComponent = () => {
  const [selectedChat, setSelectedChat] = useState({
    name: "محمد علي",
    avatar: "/path/to/avatar.jpg",
  });

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };
  return (
    <Box sx={{ width: "95%", margin: "4rem auto" }}>
      <Grid container spacing={6}>
        <Grid item xs={3.5}>
          <ChatList selectedChat={selectedChat} onChatClick={handleChatClick} />
        </Grid>
        <Grid item xs={8.5}>
          <Box sx={{ display: "flex", height: "100%" }}>
            <Box
              sx={{
                width: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "stretch",
              }}
            >
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  bgcolor: "#C9A0A0",
                  width: "1px",
                }}
              />
            </Box>
            <Box sx={{ flexGrow: 1, pl: 3 }}>
              <ChatWindow selectedChat={selectedChat} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FirstTapComponent;

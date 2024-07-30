import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Grid,
  Divider,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { ChatBubble, Notifications, Search, Timer } from "@mui/icons-material";
import ChatWindow from "./components/ChatWindow";

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState("محمد علي");

  const handleChatClick = (name) => {
    setSelectedChat(name);
  };

  return (
    <Box sx={{ width: "90%", margin: "auto", display: "flex", height: "80vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ChatList selectedChat={selectedChat} onChatClick={handleChatClick} />
        </Grid>
        <Grid item xs={8}>
          <ChatWindow selectedChat={selectedChat} />
        </Grid>
      </Grid>
    </Box>
  );
};

const ChatList = ({ selectedChat, onChatClick }) => {
  const accounts = ["محمد علي", "حسام عكيله", "رنا الحايك", "محمد عمر"];

  return (
    <Paper elevation={3} sx={{ p: 2, height: "auto" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Typography variant="h6">محادثات الموظفين</Typography>
        <Box sx={{ ml: "auto" }}>
          <IconButton>
            <Notifications />
          </IconButton>
          <IconButton>
            <ChatBubble />
          </IconButton>
          <IconButton>
            <Timer />
          </IconButton>
        </Box>
      </Box>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="البحث"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 2 }}
      />
      <List>
        {accounts.map((name, index) => (
          <React.Fragment key={name}>
            <ListItem button onClick={() => onChatClick(name)}>
              <ListItemAvatar>
                <Avatar>{name[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={name}
                secondary="السلام عليكم"
                primaryTypographyProps={{
                  fontWeight: selectedChat === name ? "bold" : "normal",
                }}
              />
            </ListItem>
            {index < accounts.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default Chat;

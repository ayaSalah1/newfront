import React from "react";
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
  Divider,
  IconButton,
} from "@mui/material";
import "../styles/ChatList.css";
import CreateChatModal from "./CreateChatModal";

const ChatList = ({ selectedChat, onChatClick }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const accounts = [
    { name: "محمد علي", avatar: "url_to_avatar1.jpg" },
    { name: "حسام عكيله", avatar: "url_to_avatar2.jpg" },
    { name: "رنا الحايك", avatar: "url_to_avatar3.jpg" },
    { name: "محمد عمر", avatar: "url_to_avatar4.jpg" },
  ];
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <Paper className="chatListContainer" elevation={0}>
      <Box className="chatHeader">
        <IconButton onClick={handleModalOpen}>
          <img
            src="https://s3-alpha-sig.figma.com/img/cb2a/e859/44864670cb08f54b86c02c3e0517d46e?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MS8t3Bg3Nrcg1S4b~mURLjxEgA-tj1kDWkV3-PKo1qbtvEUUi56m~cver-kA74bPbDhE0-zM461hQOUrbKKFwQXgzpKCozFt0BxB63te4t1u2iKhIDqtS2CALzuiPlnNALm23Bxaux9VsosDiHwVNyTLbWlEXjg34B7BFSn4UFrBKcmJNC3rcpTKDnW1vu8f867O~D7-4uVLIN87QC3WH93C2n7oquUv1Jn4Tn0gBlRpIsTUkIVLpfNzR7en4VoLwnIhgAm-OdgkhWwB7I25PXHFhjFeIfBsKrE7Xn2O0fwccvTpO3-BN1vFHFGOtUg2TUW6FhaW8euyofZ0oodhdQ__"
            alt="icon"
          />
        </IconButton>
        <Typography variant="h6">محادثات الموظفين</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
          direction: "rtl",
          border: "1px solid #ccc ",
          borderRadius: 2,
          padding: "0 8px",
          height: 40, // Reduce height
        }}
      >
        <IconButton sx={{ p: 0, mr: 1 }}>
          <img
            src="https://s3-alpha-sig.figma.com/img/68b8/ab8a/18d5d74e8b7e0adf81cd9094a3ebae17?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=os3uV77sPHaN57EYaZjye8EROkySCH462UlVPNg0jXn41YmEUsdYT8LFzcXYAmHS4u0u5B~xGXmHUobWOYf1VKiFlPHDKP~Z4U4i3NCX3o~mGTQfm4S7VpgZUEE1Lt9s8e9qUTLFaQt3ZxPVWspom0A6soYxm81PlUWJARTBdq7Xa187EbJNt3m5D9c3ZNcXmkQx9maczHkv05gjBn5fq-EXU2voxuWh0IumhEV439kh4dnCuVOAowRQsZgfOGw~RA7DcMs7l61ututwi0QyO7LQSe61-SyEaQzTPZJOi8cPOZKMEC4meiLbNVJpvV6N-raXW0Mwlhb-IHYL2sOOPw__"
            alt="Search icon"
            style={{ width: 25, height: 25 }}
          />
        </IconButton>
        <Box
          sx={{
            height: 20,
            width: "1%",
            backgroundColor: "#ccc",
            mx: 1,
          }}
        />
        <TextField
          fullWidth
          placeholder="البحث"
          variant="outlined"
          InputProps={{
            disableUnderline: true,
            sx: { border: "none", outline: "none", padding: 0 },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
          }}
        />
      </Box>
      <List sx={{ p: 0, m: 0 }}>
        {accounts.map((account, index) => (
          <React.Fragment key={account.name}>
            <ListItem
              button
              onClick={() => onChatClick(account)}
              className={`chatListItem ${
                selectedChat.name === account.name ? "selectedChat" : ""
              }`}
            >
              <ListItemAvatar>
                <Avatar src={account.avatar}>{account.name[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={account.name}
                secondary="السلام عليكم"
                primaryTypographyProps={{
                  fontWeight:
                    selectedChat.name === account.name ? "bold" : "normal",
                }}
                className="chatItemText"
              />
            </ListItem>
            {index < accounts.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>
      <CreateChatModal show={modalOpen} onClose={handleModalClose} />
    </Paper>
  );
};

export default ChatList;

import React from "react";
import { Box, IconButton, Paper, Typography, Avatar } from "@mui/material";
import { ArrowBack, Call, VideoCall } from "@mui/icons-material";
import MessageInput from "./MessageInput";
import Message from "./Message";

const ChatWindow = ({ selectedChat }) => {
  return (
    <Paper
      elevation={3}
      padding={0}
      sx={{
        width: "100%",
        maxWidth: "760px",
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        border: "1px solid #498696",
        boxShadow: "none",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2, // Padding for the header
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Avatar alt={selectedChat.name} src={selectedChat.avatar} />
          <Typography variant="h6" sx={{ mr: 2 }}>
            {selectedChat.name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1, // Space between icons
          }}
        >
          <IconButton sx={{ p: 0 }}>
            <img
              src="https://s3-alpha-sig.figma.com/img/a488/ad7f/4034acfaced63e76b8c7dba2734694dd?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DXPm7WW2BzKXO9PT7Eg9j~GsKS4O5qsjcw5PneHD3l9OLjINRvPSn2bQgPYByzehV79gPReztebrNHn6NWaF0wSES9viKs5-1VAyz3GpQFbd4pWU-wlXdOqFoMWRJbVQlj1weS4IErWltI1rt-UgkAu5qKhjFiCWxJFhNJCnSKqRFOpUmrNR8HM5nGvTKF94qAB14b1rhlAmy-gewgc5OPApk6qhqwfQ~6xQcnsGQ5xAaU4Ve9gBD6~TnZQYwpG98rAX4g0KWBEaaw91a-IMWc2Y9mAstvdBs1lP~JRCxmZrdtKZqQfO0MIbeormh77KTYPLwFlKZ4L5E2w7wividA__"
              alt="icon1"
              style={{ width: 25, height: 25 }} // Set image size
            />
          </IconButton>
          <IconButton sx={{ p: 0 }}>
            <img
              src="https://s3-alpha-sig.figma.com/img/f963/a113/e6e518dc8ac3d8bb6def90e77dff8a5b?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lsrwBIZKu5~CamEL3BatZfKoB~~ckxdBPNULibTTIFoJIWaKRybQeFly2pjW6WAA~rM6n~1y1DmRiZ~QTOpH7P4-Y9TGr-g7Tf16dIk0t8-InpLk7puGUv-9~rzu33sllo1kxZ8feYlAXOf5vBq7cPVZo9Pi9pUzD8sjAf8qnhGX0Cfgf8WtK5l5MqHC4xm8eVfZEQ6JXT2YYEDXS385Mqh-O7wBTBSkjSK9mphxHEnOGNk5vssq6RQV7ZV~9CsaWqwV~odKhp3jOMaVH3ZXAiphPPWx23rPiPVy6iAB-jmPn71o4Il2ChzsE0ar~pCjClYnQQDjh1BCXYIYRE7yLg__"
              alt="icon2"
              style={{ width: 25, height: 25 }} // Set image size
            />
          </IconButton>
          <IconButton sx={{ p: 0 }}>
            <img
              src="https://s3-alpha-sig.figma.com/img/85f6/8a2e/3e6c74789a2c203fe8340f35c352012c?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oKZ1H7vffScGcgWVpWxL-anHgWiYDO7Ut5PzYeDmmib4tuVUitjEEzYa1uNQTQZ0~xSSNImEUnd1L0L9EcAuVMGvn0~FUQDkfogUGe6JgcvRzulEgUFdcKJuTE0ENKpbnxup9XHVTT8rRQgzKyNTcYV1GJRg~7dvXjuzYs4moXbYE4zlNSHGvZ~YLtSa1pyMrpQr8BMqMqdWjkILljTu5swwJYLB0wL0zpSaZfakOo0ZnBUjEX8ZvjheSNg-RWcTMGgAUJgDnTE6ie90UamK8dNxWewxaM~RcFfyAvw2E~WazCujhPbXmpMJa1bPMAwNf6HB8EVjiAP0FEYT0KkPbg__"
              alt="icon3"
              style={{ width: 25, height: 25 }} // Set image size
            />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ flex: 1, overflowY: "auto", px: 2 }}>
        {" "}
        {/* Add horizontal padding here */}
        <Message text="السلام عليكم...تم انهاء المهمه" isUser={true} />
        <Message text="يعطيك العافية...ارسلها" isUser={false} />
        <Message text="الله يعافيك ارسلتها المهندس" isUser={true} />
        <Message text="تمام هتواصل معه وأوافقهم" isUser={false} />
        <Message text="في شويه تعديلات ابغيه" isUser={true} />
        <Message text="ارسلها لي وهعدلهم بإذن الله" isUser={true} />
      </Box>
      <Box sx={{ p: 2 }}>
        <MessageInput />
      </Box>
    </Paper>
  );
};

export default ChatWindow;

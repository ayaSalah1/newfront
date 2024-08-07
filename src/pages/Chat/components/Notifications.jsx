import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Paper,
  Grid,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const NotificationComponent = () => {
  const [selectedNotification, setSelectedNotification] = useState(null);

  const notifications = [
    { id: 1, name: "محمد علي", avatar: "/path/to/avatar1.jpg" },
    { id: 2, name: "أحمد خالد", avatar: "/path/to/avatar2.jpg" },
    { id: 3, name: "فاطمة عمر", avatar: "/path/to/avatar3.jpg" },
  ];

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
  };

  return (
    <Box sx={{ width: "95%", margin: "4rem auto" }}>
      <Grid container spacing={6}>
        <Grid item xs={3.5}>
          <Paper elevation={0}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <IconButton>
                {/* Replace with actual icon */}
                {/* <img src="path_to_icon" alt="icon" /> */}
              </IconButton>
              <Typography variant="h6">اشعار الموظفين</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                border: "1px solid #ccc",
                borderRadius: 2,
                padding: "0 8px",
                height: 40,
              }}
            >
              <IconButton sx={{ p: 0, mr: 1 }}>
                {/* Replace with actual search icon */}
                {/* <img src="path_to_search_icon" alt="Search icon" style={{ width: 25, height: 25 }} /> */}
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
            {[1, 2, 3].map((index) => (
              <Box
                key={index}
                sx={{
                  bgcolor: "#498696",
                  p: 2,
                  mb: 2,
                  borderRadius: 2,
                  cursor: "pointer",
                }}
                onClick={() => handleNotificationClick({ id: index })}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="subtitle1" color="white">
                    اشعار جديد
                  </Typography>
                  <Typography variant="subtitle2" color="white">
                    غير مسلمة
                  </Typography>
                </Box>
                <Typography variant="caption" color="white">
                  تم نشر في وقت معين
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={8.5}>
          <Box sx={{ display: "flex", height: "100%" }}>
            <Box
              sx={{
                width: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "stretch",
                mr: 4, // Enhanced margin from the divider
              }}
            >
              <Box
                sx={{
                  bgcolor: "#C9A0A0",
                  width: "1px",
                }}
              />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              {selectedNotification && (
                <Box
                  sx={{
                    width: "501px",
                    height: "255px",
                    borderRadius: "18px",
                    border: "1px solid #498696",
                    p: 3,
                    marginRight: "50px",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar
                      src={selectedNotification.avatar}
                      alt={selectedNotification.name}
                      sx={{ width: 60, height: 60, mr: 2 }}
                    />
                    <Typography variant="h6">
                      {selectedNotification.name}
                    </Typography>
                    <Box
                      sx={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                      }}
                    >
                      {/* <Icon> Replace with your desired icon </Icon> */}
                    </Box>
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, color: "#498696" }}>
                    اشعار جديد
                  </Typography>
                  <List sx={{ direction: "rtl" }}>
                    <ListItem>
                      <ListItemIcon>
                        <FiberManualRecordIcon
                          sx={{ color: "#498696", fontSize: 12 }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="تم نشر محتوى مهمة جديدة" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <FiberManualRecordIcon
                          sx={{ color: "#498696", fontSize: 12 }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="تم نشر محتوى مهمة جديدة" />
                    </ListItem>
                  </List>
                </Box>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NotificationComponent;

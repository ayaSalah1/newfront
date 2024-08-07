import React from "react";
import { Box, Typography, TextField, Paper, IconButton } from "@mui/material";

const NotificationList = ({ onNotificationClick }) => {
  return (
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
          onClick={() => onNotificationClick({ id: index })}
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
  );
};

export default NotificationList;

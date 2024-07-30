import { Box, Paper, Typography } from "@mui/material";

const Message = ({ text, isUser }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: isUser ? "flex-end" : "flex-start",
      mb: 1,
      px: 1,
    }}
  >
    <Paper
      elevation={1}
      sx={{
        p: 2,
        maxWidth: "70%",
        borderRadius: "15px",
        bgcolor: isUser ? "#C0DBDE" : "grey.200",
      }}
    >
      <Typography variant="body2">{text}</Typography>
    </Paper>
  </Box>
);

export default Message;
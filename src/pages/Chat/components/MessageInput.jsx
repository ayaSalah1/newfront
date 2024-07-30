import { AttachFile, Mic } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material";

const MessageInput = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="اكتب..."
        sx={{ mr: 1, borderRadius: "25px" }}
      />
      <IconButton>
        <AttachFile />
      </IconButton>
      <IconButton>
        <Mic />
      </IconButton>
    </Box>
  );
};
export default MessageInput;

import React from "react";
import { Box, IconButton, TextField } from "@mui/material";
import { AttachFile, Mic } from "@mui/icons-material";

const MessageInput = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="اكتب..."
        sx={{
          borderRadius: "25px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "25px", // Ensures the border radius is applied correctly
            "& fieldset": {
              borderColor: "#49869633",
            },
            "&:hover fieldset": {
              borderColor: "#49869633",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2d444933", // Sets the border color on focus
            },
          },
        }}
      />
      <IconButton sx={{ p: 0 }}>
        <img
          src="https://s3-alpha-sig.figma.com/img/472d/2f16/1c168ec7ef3b8aa4ec3840c729444fb4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bGSJx6lP4Zl1qoSDHC2uc1Umsnbh6Y9Qt0tN7NWoYswvdYMzuoNYVjNnghSrEGwI6HcLNYN8UFgLPId3n-GNe4nKOIQ3xluoDFJMF-Uj0V9jppqef0EtXviLX-u-uz9eLghMuDjFYz6MsgwurmJLcXyqarETyYpI0EudpXVYGuNKrc0Qj528mzHUTP7IxvnuPvjtgERuPnyyryMUGFsGYeO9Vl0gzRVd722kcy7CdYY3B7fGIQfO3WQhigJhsd75fknp1AUAOKPprT2Sn5kpqkuRR7gCBmjf6V-FXEk6K-et4xXxd0UhnEdnii39DMPiMvutAk8finTTUK5Hj-QA~w__"
          alt="Attach file"
          style={{ width: 25, height: 25 }}
        />
      </IconButton>
      <IconButton sx={{ p: 0 }}>
        <img
          src="https://s3-alpha-sig.figma.com/img/3018/3af7/02d0c55e256dd98e5deb1d52f503af04?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mvmrfY5UqoEVFrF9GttO-Glef~r~eD6d93M4TY-TnDvp6uB8fhzS8d8FcmaBgHGjO~WmVYCFB4~8hoEjPRr22HPic3tw8-uaWgT5D1O-90bEqffAlKN~3VOKBFGwvnA6wHdz43rpfs-c2bN-59OdBhJojzaDdbwoxm97Bps6i3HI1z7kG1AlqIGd7CAubeskn7JFq1HIa4UrUk6WvvWGgnwTZdV1gPNtmbWBBn-QapYqkC0jCevAqcFxT99LXxrDJAXGS~jhk8Go2z2~MmPJjHRie-BbW8D9vIsgMMiN49Uk5RmwivSri3tQFAGYWgb88Zcs7UAuUgfR0QqQNd5XCg__"
          alt="Mic"
          style={{ width: 25, height: 25 }}
        />
      </IconButton>
      <IconButton sx={{ p: 0 }}>
        <img
          src="https://s3-alpha-sig.figma.com/img/e44e/806c/202ed1510ea2aaca6989f32144315b00?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jX-qQUfl1QMigzTN7Whz7e1C-4exHprtzDTnMT~kvchnrq~VzZmifKIu8j2tYlki4Fv2F2UUMozOBWsq-mw4ANd7AJYUv6N3LLGVvObk~55iE55zrofm4bn2Cgr5XY41p6qrQnHkv5OWxEdebHsGaI~u1HZJbUe2XtDBQw8vMSgv36emjxlCcACSyAsZeLKVR9YxzTZQV2nOXFzXvQuuc-E0b63Vrr33Ri4ZDPj-lv35RykBI1g9mzNUp~zv7-mTF8UvMRA4BtqAbpvSnfpk20SiwFvFPP81DNzcbpRJRGfCe~cNumfIqoIdS~n6iooPcr1TVLpn-sFRWm1dr-hKvA__"
          alt="Another icon"
          style={{ width: 25, height: 25 }}
        />
      </IconButton>
    </Box>
  );
};

export default MessageInput;

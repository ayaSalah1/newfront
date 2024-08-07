import React from "react";
import {
  Modal,
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "500px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  direction: "rtl", // Right-to-left text direction
};

const inputStyle = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#49869633",
  borderRadius: "6px",
  p: 1,
  mt: 3,
  mb: 3,
};

const fieldStyle = {
  flex: 1,
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "flex-end",
  mt: 2,
};

const saveButtonStyle = {
  backgroundColor: "#49869680",
  color: "#000000",
  "&:hover": {
    backgroundColor: "#498796ae",
  },
  mr: 2, // Add margin right
};

const cancelButtonStyle = {
  backgroundColor: "#49869633",
  color: "#000000",
  "&:hover": {
    backgroundColor: "#4987968f",
  },
};

const CreateChatModal = ({ show, onClose }) => (
  <Modal
    open={show}
    onClose={onClose}
    aria-labelledby="create-chat-modal-title"
  >
    <Box sx={modalStyle}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" id="create-chat-modal-title" gutterBottom>
          إنشاء محادثة جديدة
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon sx={{ color: "#000" }} />
        </IconButton>
      </Box>
      <Formik
        initialValues={{ employeeName: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
          onClose();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box sx={inputStyle}>
              <IconButton>
                <img
                  src="https://s3-alpha-sig.figma.com/img/28a2/25f3/f0e118f65e5f0ce07f0911a7f622e528?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B1Y~AOISOgaJnem8pAqkBHdfBKYayZJqyzu5ZhjjRgISuFlNrM2agKI00JLMU4QtCejsy9uDsL2wO8-CTEGGQZtxyuVyUMU8Kw~7jDneBIKOnXhqg2njzv9bcunKuu94rB4YiUpH3AaHYE0TdskaAJ0ODf0KknUWflx06oHu1Touag9-dbsC6P9wFl4TbedOIIB8grnFRYxRRJ9Pg0wWsSq5SjvVL5POMweR3nnep4rjlNHbIGH6bo8FndKT~lrLG7Px64fkOS3KTBL7U9kN9o7aALYxTEPpZ1zsTv8Ip3t0AL~tbC2CfloBmta56oCub08DXuENN~pDgr29Vuh5dg__"
                  alt="Icon"
                  style={{ width: 20, height: 20, color: "#498696" }}
                />
              </IconButton>
              <Field name="employeeName">
                {({ field }) => (
                  <TextField
                    size="small"
                    {...field}
                    placeholder="اسم الموظف"
                    variant="outlined"
                    fullWidth
                    sx={fieldStyle}
                  />
                )}
              </Field>
            </Box>
            <Box sx={buttonContainerStyle}>
              <Button sx={cancelButtonStyle} onClick={onClose}>
                إلغاء
              </Button>
              <Button
                type="submit"
                sx={saveButtonStyle}
                disabled={isSubmitting}
              >
                حفظ
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  </Modal>
);

export default CreateChatModal;

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Avatar,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"; // Three dots icon
import AddIcon from "@mui/icons-material/Add"; // "+" icon
import "./styles.css"; // Import the CSS file

const tasks = [
  {
    name: "كريم",
    description: "مهمه تحليل بيانات",
    dueDate: "2024-08-01",
    imgUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "علي",
    description: "مهمه تحليل بيانات",
    dueDate: "2024-08-02",
    imgUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "رامي",
    description: "مهمه تحليل بيانات",
    dueDate: "2024-08-03",
    imgUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const TaskCardComponent = ({ task }) => {
  return (
    <Card variant="outlined" className="task-card">
      <CardContent className="task-card-content">
        <Box className="task-card-header">
          <Box className="task-card-description">
            <Typography variant="body1" color="text.primary" gutterBottom>
              {task.description}
            </Typography>
          </Box>
          <Box className="task-card-avatar">
            <Box className="task-card-avatar-box ">
              <Avatar className="ml-3" src={task.imgUrl} alt={task.name} />
              <Typography className="task-card-name ">{task.name}</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="task-card-footer">
          <Box className="task-card-due-date">
            <AccessTimeIcon className="task-card-due-date-icon" />
            <Typography variant="caption">{task.dueDate}</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <IconButton aria-label="edit" size="small" sx={{ marginRight: 1 }}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" size="small">
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const TaskListComponent = () => {
  return (
    <Box className="task-list-container">
      <Box className="task-list-header">
        <Typography>كتابة محتوى</Typography>
        <IconButton aria-label="more" size="small">
          <MoreHorizIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          flex: 1, // Take up the available space
          overflowY: "auto", // Allow scrolling if content overflows
        }}
      >
        {tasks.map((task, index) => (
          <TaskCardComponent key={index} task={task} />
        ))}
      </Box>
      <Box className="add-task-button-container">
        <Button
          variant="text"
          color="inherit"
          className="add-task-button"
          startIcon={<AddIcon />}
        >
          اضافة مهمة جديدة
        </Button>
      </Box>
    </Box>
  );
};

export default TaskListComponent;

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import image from "../assets/ds3_game-thumbnail.jpg";

export interface Project {
  title: string;
  image: string;
  description: string;
  category: string;
  link: string;
}

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card sx={{ display: "flex" }}>
      <Stack width={8000} direction="row" justifyContent="space-between">
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {project.title}
            </Typography>
            <Typography variant="body1" color="secondary" component="div">
              {project.description}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 400 }}
          src="../assets/ds3_game-thumbnail.jpg"
          alt="Project Image"
        ></CardMedia>
      </Stack>
    </Card>
  );
};

export default ProjectCard;

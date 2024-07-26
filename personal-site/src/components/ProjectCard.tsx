import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

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
      <Stack
        sx={{ width: "100%" }}
        spacing={3}
        direction="row"
        justifyContent="space-between"
      >
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
          image={project.image}
          alt="Project Image"
        ></CardMedia>
      </Stack>
    </Card>
  );
};

export default ProjectCard;

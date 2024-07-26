import {
  Box,
  Button,
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
  const openInNewTab = () => {
    const newWindow = window.open(
      project.link,
      "_blank",
      "noopener, noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Card sx={{ display: "flex" }}>
      <Stack
        sx={{ width: "100%" }}
        spacing={3}
        direction="row"
        justifyContent="space-between"
      >
        <Stack spacing={6} margin={3}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {project.title}
              </Typography>
              <Typography
                marginTop={2}
                variant="body1"
                color="secondary"
                component="div"
              >
                {project.description}
              </Typography>
            </CardContent>
          </Box>
          <Button onClick={() => openInNewTab()}>GitHub Link</Button>
        </Stack>
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

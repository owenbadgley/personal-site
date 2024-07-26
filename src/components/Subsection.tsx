import { Stack, Typography, TypographyProps } from "@mui/material";
import ProjectCard, { Project } from "./ProjectCard";

interface Props {
  children: string;
  id: number;
  alignment: TypographyProps["align"];
  projectList: Project[];
}

const Subsection = ({ children, id, alignment, projectList }: Props) => {
  return (
    <Stack>
      <Typography variant="h3" color="secondary" align={alignment}>
        {children}
      </Typography>
      {projectList.map((project) => (
        <ProjectCard project={project}></ProjectCard>
      ))}
    </Stack>
  );
};

export default Subsection;

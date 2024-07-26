import { Divider, Stack, Typography, TypographyProps } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "./ProjectCard";

interface Props {
  children: string;
  id: number;
  alignment: TypographyProps["align"];
}

const Subsection = ({ children, id, alignment }: Props) => {
  const project = {
    title: "Dark Souls 3",
    description: "the third dark souls game, linear but great bosses",
    image: "personal-sitesrcassetsds3_game-thumbnail.jpg",
    category: "videogame",
    link: "ww.",
  };

  return (
    <Stack>
      <Typography variant="h3" color="secondary" align={alignment}>
        {children}
      </Typography>
      <ProjectCard project={project}></ProjectCard>
    </Stack>
  );
};

export default Subsection;

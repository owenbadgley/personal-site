import { Stack } from "@mui/material";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Subsection from "./components/Subsection";
import { projectList } from "./data/projects";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Stack spacing={6} margin={4}>
        <About></About>
        <Subsection
          projectList={projectList.filter(
            (project) => project.category === "game"
          )}
          alignment="right"
          id={1}
        >
          My Video Games
        </Subsection>
        <Subsection
          projectList={projectList.filter(
            (project) => project.category === "app"
          )}
          alignment="left"
          id={2}
        >
          Stuff I've Made
        </Subsection>
        <Subsection
          projectList={projectList.filter(
            (project) => project.category === "class"
          )}
          alignment="right"
          id={3}
        >
          Class Projects
        </Subsection>
      </Stack>
    </div>
  );
}

export default App;

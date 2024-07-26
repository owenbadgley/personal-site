import { Divider, Stack } from "@mui/material";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Subsection from "./components/Subsection";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Stack
        spacing={6}
        margin={4}
        //divider={<Divider flexItem variant="middle"></Divider>}
      >
        <About></About>
        <Subsection alignment="right" id={1}>
          My Video Games
        </Subsection>
        <Subsection alignment="left" id={2}>
          Stuff I've Made
        </Subsection>
        <Subsection alignment="right" id={3}>
          Class Projects
        </Subsection>
      </Stack>
    </div>
  );
}

export default App;

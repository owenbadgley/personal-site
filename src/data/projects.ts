import { Project } from "../components/ProjectCard"
import game_finder_png from "../images/game_finder.png"
import homeostasis_png from "../images/homeostasis.png"

export const projectList: Project[] = [
    //game finder website
    {
        title: 'Game Finder',
        description: 'A simple website that I created while learning to use react. It interfaces with the API of a website called RAWG, and uses the data recieved to find and filter a list of popular (and unpopular) video games, so that they can be viewed and discovered by the user.',
        image: game_finder_png,
        category: 'app',
        link: 'https://github.com/owenbadgley/video-game-finder'
    },
    {
        title: 'Homeostasis',
        description: 'A demo of a game that I created in Godot. The idea is that two people play as one character each, representing an emotion, and they have to meet each other on each screen to end the level. One character has a grappling hook, and the other character has a dash. Each level is timed. The art is a little rough, but it\'s just a defaultModifiers.',
        image: homeostasis_png,
        category: 'game',
        link: 'https://github.com/owenbadgley/Final-Project-Lit'
    },
    {
        title: 'Class Rating App',
        description: 'A simple version of a website such as Rate My Professor that I made for a software development class. It allows the user to enter data about a professor or class, and then saves that information to a database in name of the logged in user. It uses MySQL and Java, and the GUI is using JavaFX. It actually has quite a few features. I worked on this with a couple classmates.',
        image: '',
        category: '',
        link: ''
    },
    {
        title: '',
        description: '',
        image: '',
        category: '',
        link: ''
    },
    {
        title: '',
        description: '',
        image: '',
        category: '',
        link: ''
    },
    {
        title: '',
        description: '',
        image: '',
        category: '',
        link: ''
    },
]
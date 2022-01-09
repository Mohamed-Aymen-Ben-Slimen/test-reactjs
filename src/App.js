import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/nav-bar/nav-bar";
import Projects from "./views/projects/projects";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import NewProject from "./views/new-project/new-project";
import React, {useState} from "react";

function App() {

    const [projects, setProjects] = useState(
        [
            {
                name: 'Next.js 12',
                description: 'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
                type: 'Automatic editing',
                status: 'Archived',
                introId: 'lRQ5z7i7pxE'
            },
            {
                name: 'React in 100s',
                description: 'React is a JavaScript library for building user interfaces.',
                type: 'Automatic editing',
                status: 'Active',
                introId: 'Tn6-PIqc4UM'
            },
        ]
    );

    const addProject = (project) => {
        setProjects(
            (oldProjects) => {
                const newProjects = [...oldProjects];
                newProjects.push(project);
                return newProjects;
            }
        )
    }

    const deleteProjectById = (id) => {
        setProjects(
            (oldProjects) => {
                return oldProjects.filter((p, index) => index !== id);
            }
        )
    }

    const updateProject = (project, id) => {
        console.log(project);
        setProjects(
            (oldProjects) => {
                return oldProjects.map((p, index) => {
                    if ( index === id) {
                        return project;
                    }
                    return p;
                });
            }
        )
    }

  return (
    <div className="App">
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Projects projects={projects} updateProject={updateProject} deleteProjectById={deleteProjectById}/>}/>
                <Route path="/new-project" element={<NewProject addProject={addProject}/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

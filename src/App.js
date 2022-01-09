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
                description: 'Formik started by expanding on this little higher order component by Brent Jackson, some naming conventions from Redux-Form, and (most recently) the render props approach popularized by React-Motion and React-Router 4. Whether you have used any of the above or not, Formik only takes a few minutes to get started with',
                type: 'Automatic editing',
                status: 'Archived',
                introId: 'lRQ5z7i7pxE'
            },
            {
                name: 'React in 100s',
                description: 'Formik started by expanding on this little higher order component by Brent Jackson, some naming conventions from Redux-Form, and (most recently) the render props approach popularized by React-Motion and React-Router 4. Whether you have used any of the above or not, Formik only takes a few minutes to get started with',
                type: 'Automatic editing',
                status: 'Active',
                introId: 'Tn6-PIqc4UM'
            },
        ]
    );

    const [selectedProject, setSelectedProject] = useState(projects[0]);

    const selectProject = (project) => {
        setSelectedProject(project);
    }

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
                <Route path="/" element={<Projects projects={projects} selectProject={selectProject} updateProject={updateProject} deleteProjectById={deleteProjectById}/>}/>
                <Route path="/new-project" element={<NewProject addProject={addProject}/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

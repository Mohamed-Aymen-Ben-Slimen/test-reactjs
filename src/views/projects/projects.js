import * as React from 'react';
import CustomAccordion from "../../components/accordion/accordion";

export default function Projects({projects, updateProject, deleteProjectById}) {

    return (
        <div>
            <CustomAccordion projects={projects} updateProject={updateProject} deleteProjectById={deleteProjectById}/>
        </div>
    );
}

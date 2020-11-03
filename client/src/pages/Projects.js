import React, { Component } from 'react';
import projects from "../projects.json";
import Project from "../components/Project /Project.jsx";


class Projects extends Component {
    state = {
        projects,
    };

    render () {

    return (
        <div>
        <h3>Samples of some of my most impressive work from the past year.</h3>
        <p>Click on the project title to view the deployed application.</p>
        <br/>
        <div>
         {this.state.projects.map((project) => (
             <Project 
             link={project.link}
             title={project.title}
             description={project.description}
             technology={project.technology}
             />
         ))}
        </div>
        </div>
    )
}
}

export default Projects; 
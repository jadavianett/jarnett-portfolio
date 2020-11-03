import React from 'react';
import './Project.css';

const Project = (props) => {
    return (
        <div>
            <div>
    
            <h5><a href={props.link} class="waves-effect project-titles" > {props.title}</a></h5>
            <p>{props.description}</p>
            <p>Technologies Used: {props.technology}</p>
            <hr/>
        </div>
        </div>
    );
};

export default Project;
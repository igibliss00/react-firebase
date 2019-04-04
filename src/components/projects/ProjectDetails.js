import React from 'react';

const ProjectDetails = props => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, officiis eaque minima blanditiis ipsum sint reiciendis! Beatae facere fugiat deleniti ab possimus inventore nihil corporis consequatur, quod necessitatibus suscipit veritatis.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by BIG</div>
                    <div>4th of April</div>
                </div>
            </div>

        </div>
    )
}

export default ProjectDetails;
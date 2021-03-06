import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

const ProjectDetails = props => {
    const { project, auth } = props;
    // route guarding
    if (!auth.uid) return <Redirect to='/signin' />
    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{ project.title }</span>
                        <p>{ project.content }</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
                        <div>4th of April</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return ( 
            <div className="container center">
                <p>Loading...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        // projects is being synced with the state and allows access to the projects collection
        { collection: 'projects' }
    ])
)(ProjectDetails);
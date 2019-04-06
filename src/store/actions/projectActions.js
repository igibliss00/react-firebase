export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to the database
        const firebase = getFirebase();
        firebase.collection('project').add({
            ...project,
            authorFirstName: 'Martin',
            authorLastName: 'Luthor',
            authorId: 1234,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project })
        }).then(err => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })
    }
}
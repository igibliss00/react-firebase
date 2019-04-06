export const authActions = credentials => {
    return (dispatch, getState, { firebase }) => {
        const firebase = getFirebase();

        firebase.firebase().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'});
        }).then((err) => {
            dispatch( { type: 'LOGIN_ERROR'}, err);
        }); 
    }
}
export const authStart = () => {
    console.log('hi');
    return{
        type:'AUTH_START'
    }
}

export const authSuccess = (authData) => {
    return{
        type:'AUTH_SUCCESS',
        payload:authData
    }
}

export const authFailure = (error) => {
    return{
        type:'AUTH_FAIL',
        error:error
    }
}

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
    }
}
import * as actionTypes from '../actionTypes.js'    

const inititalState = {
    isAuthenticated: false,
}

const reducer = (state = inititalState, action) => {
    switch(action.type) {
        case actionTypes.authenticatedSuccessfully:
            return {
                ...state,
                isAuthenticated: true
            }
        case actionTypes.logout:
            return {
                ...state,
                isAuthenticated: false,
            };
        default: 
        return {
            ...state
        }
    }
}

export default reducer
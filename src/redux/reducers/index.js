const inititalState = {
    isAuthenticated: false,
}

const reducer = (state = inititalState, action) => {
    switch(action.type) {
        case 'AUTHENTICATED_SUCCESSFULLY':
            return {
                ...state,
                isAuthenticated: true
            }
        case 'LOGOUT':
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
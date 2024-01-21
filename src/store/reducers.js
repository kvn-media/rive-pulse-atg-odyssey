// src/redux/reducers.js
const initialState = {
    tankData: [],
};

const rootReducer = (state = initialState) => {
    switch (action.type) {
        case 'SET_TANK_DATA':
            return {
              ...state,
                tankData: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
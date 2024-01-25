export default function taskReducer(state, action) {

    switch (action.type) {
        case "ADD_TASK": {
            return [...state, { ...action.payload.data }]
        }
        case "UPDATE_TASK": {
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...action.payload.data };
                }
                return item;
            })
        }
        case "DELETE": {
            return state.filter((item) => item.id !== action.payload.id)
        }
        case "FAVOURITE": {
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, favourite: !item.favourite };
                }
                return item;
            })
        }
        case "DELETE_ALL": {

            return action.payload.data;
        }
        default: {
            return state;
        }

    }
}
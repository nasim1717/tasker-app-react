export default function taskReducer(state, action) {
    switch (action.type) {
        case "ADD_TASK": {
            return [...state, action.payload]
        }
        case "UPDATE_TASK": {

        }
        case "DELETE": {

        }
        default: {
            return state;
        }

    }
}
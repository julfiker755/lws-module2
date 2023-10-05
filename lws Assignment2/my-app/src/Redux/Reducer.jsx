import { ADD, DELETE } from './actiontypes/actiontypes';


const initialState={
    items:[]
}

const Reducer = (state=initialState,action) => {
     switch (action.type) {
        case ADD:
            return {
                ...state, 
                items: [action.payload, ...state.items], 
              };
              case DELETE:
                const deleteitems=state.items.filter(item=>item.id !== action.payload) 
                return {
                    ...state,
                    items:deleteitems
                }
     
        default:
            return state
     }
};

export default Reducer;
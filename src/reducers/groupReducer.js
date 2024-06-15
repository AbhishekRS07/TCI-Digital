import { ADD_GROUP, DELETE_GROUP, UPDATE_GROUP } from '../actions/types';

const initialState = [
  { from: 1, to: 10 }
];

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP:
      return [...state, { from: "", to: "" }]; 
    case DELETE_GROUP:
      return state.filter((_, index) => index !== action.payload);
    case UPDATE_GROUP:
      return state.map((group, index) => 
        index === action.payload.index ? action.payload.group : group
      );
    default:
      return state;
  }
};

export default groupsReducer;

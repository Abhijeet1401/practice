import {INCREMENT, DECREMENT, FETCH_API_SUCCESS,SELECTED_OPTION} from '../actions/action';

const initialState = {
  data: [],
  active: 0,
  selectedOption:null
};
const FetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_API_SUCCESS':
      return {
        ...state,
        data: action.data,
      };
    case INCREMENT:
      return {
        ...state,
        active: state.active + 1,
      };
    case DECREMENT:
      return {
        ...state,
        active: state.active - 1,
      };
    case  SELECTED_OPTION:
      return{
        ...state,
        selectedOption:action.data
      }
    default:
      return state;
  }
};

export default FetchReducer;

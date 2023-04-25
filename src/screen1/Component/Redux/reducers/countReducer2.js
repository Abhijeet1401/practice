
import { INCREMENT,DECREMENT,RESET, PRODUCT ,DIVISION} from "../action/action";

const initialState={
  count:[]
}

const countReducer=(state=initialState,action)=>{
  switch(action.type){
    case INCREMENT :
      return{
        ...state,
         count: state.count+1
      }
      case DECREMENT:
        return{
       ...state,
        count:state.count-1
        }
      
      case RESET:
        return{
          count:0
        }
      default:
        return state;
  }
}
export default countReducer
//export const FETCH_API_REQUEST  =  'FETCH_API_REQUEST'
export const FETCH_API_SUCCESS = 'FETCH_API_SUCCESS';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SELECTED_OPTION = 'SELECTED_OPTION'

//export const FETCH_API_FAILURE  =  'FETCH_API_FAILURE'
// export const fetchApiRequest=()=>{
//   type: FETCH_API_REQUEST
// }
export const fetchApiSuccess = data => {
  type: FETCH_API_SUCCESS;
  payload: data;

};

export const SelectedOption = (option) => {
  
    type: SELECTED_OPTION;
    payload: option
  
}

// export const fetchApiFailure=(error)=>{
//   type:FETCH_API_FAILURE;
//   payload:error

// }

const fetchData = () => {
  return dispatch => {
    fetch(
      'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple',
    )
      .then(response => response.json())
      .then(value => dispatch({type: 'FETCH_API_SUCCESS', data: value}))
      // .then(json => {
      //   const question = json.data.results;
      //   console.log(json.data.results[0].questions, 'hello');
      // });
      .then(json =>
        console.log(
          json.data.results[0].correct_answer,
          json.data.results[0].incorrect_answers[0],
          json.data.results[0].incorrect_answers[1],
          json.data.results[0].incorrect_answers[2],
        ),
      );
  };
};

export const Next = () => {
  return {
    type: INCREMENT,
  };
};
export const Back = () => {
  return {
    type: DECREMENT,
  };
};
// export const Question = () => {
//   return {
//     type: QUESTIONS,
//   };
// };

export default fetchData;

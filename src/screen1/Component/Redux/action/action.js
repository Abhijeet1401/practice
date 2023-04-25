export const INCREMENT =          'INCREMENT';
export const DECREMENT =          'DECREMENT';
export const PRODUCT=             'PRODUCT'

export const RESET = 'RESET';

export const increment = () => {
 // console.log('Hello');
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
export const product=()=>{
  return{
    type:PRODUCT
  }
}
export const reset = () => {
  return {
    type: RESET,
  };
};


export const fetchData = () => {

  return (dispatch) => {
      return fetch('https://opentdb.com/api.php?amount=10')
          .then(response => response.json())
          .then(json => dispatch(
              { type: "FetchData", data: json }))
          .catch(err => dispatch(
              { type: "ERROR",msg: "Unable to fetch data" }))
  }

}
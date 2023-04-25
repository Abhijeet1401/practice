import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import fetchData from '../Redux/actions/action';

const Quiz = () => {
  const dispatch = useDispatch();
   const questions = useSelector(state => state.FetchReducer);
  // const active = useSelector(state => state.FetchReducer);
  const data = useSelector(state => state.data);
 // console.log(data, 'hii');
  return <View style={styles.container}></View>;
};
const styles = StyleSheet.create({});
export default Quiz;

import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
  Dimensions,
  Image,
  Icons,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import fetchData from '../Redux/actions/action';
import QuizPage from './QuizPage';
import WelcomeScreen from './WelcomeScreen';
import AnswerScreen from './AnswerScreen';

const ScorePage = (props, navigation) => {
  const [showImage, setShowImage] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(state => state.FetchReducer);
  const active = useSelector(state => state.FetchReducer);
  const [mark, setMark] = useState(0);
  let v = 0;
  useEffect(() => {
    for (let i = 0; i < data.data.results.length; i++) {
      //console.log(data.data.results[i], 'bbbbbbbbbb');
      if (
        data.data.results[i].selected == data.data.results[i].correct_answer
      ) {
        v++;
        setMark(v);
        //console.log(v, data.data.results[i].selected);
      }
    }
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);
  // get the params

  const marks = props.route.params.result;
  const selectedAnswer = props.route.params.answers;

  console.log(selectedAnswer, 'selected answer is on score page');

  // const handleImage = () => {
  //   if ({marks} >= 5) {
  //     setShowImage(true);
  //   }
  // };

  //const Response = props.route.params.selected;
  //   //
  //     useEffect(()=>{
  //   if(props.route.params.result){

  //   }
  //     },[])
  //console.log('props', props.route.params.result);
  // const handleImage = () => {
  //   if ({marks} > 5) setShowImage(true);
  // };
  return (
    <View style={styles.container}>
      <View style={styles.congrats}>
        <Image
          style={{
            height: 300,
            width: 300,
            resizeMode: 'cover',
            alignSelf: 'center',
            justifyContent: 'center',
          }}
          source={require('../Images/congrats1.png')}
        />
      </View>
      <View style={styles.score}>
        <Text
          style={{
            color: 'green',
            fontSize: 25,
            justifyContent: 'center',
            alignSelf: 'center',
            fontWeight: 'bold',
            marginTop: 5,
          }}>
          {' '}
          Your Score: {mark}
        </Text>
        <Text>{selectedAnswer}</Text>
      </View>
      <Text></Text>
      {/* Go back to home page */}
      <View style={styles.Buttons}>
        <View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate(WelcomeScreen)}>
            <Text
              style={{
                paddingHorizontal: 25,
                paddingVertical: 10,
                backgroundColor: '#925eed',
                color: 'white',
                borderRadius: 20,
                // justifyContent: 'center',
                // alignSelf: 'center',
                fontSize: 20,
              }}>
              Home
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate(AnswerScreen)}>
            <Text
              style={{
                paddingHorizontal: 25,
                paddingVertical: 10,
                backgroundColor: '#925eed',
                color: 'white',
                borderRadius: 20,
                // justifyContent: 'center',
                // alignSelf: 'center',
                fontSize: 20,
              }}>
              Response
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  score: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#CF9FFF',

    width: '50%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  Buttons: {
    width: '100%',
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',

    flexDirection: 'row',

    marginBottom: 20,
  },
});

export default ScorePage;

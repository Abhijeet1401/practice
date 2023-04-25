import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import fetchData from '../Redux/actions/action';
import {Next} from '../Redux/actions/action';
import {Back} from '../Redux/actions/action';
import {useEffect} from 'react';
import ScorePage from '../screens/ScorePage';
import AnswerScreen from './AnswerScreen';
import {useNavigation} from '@react-navigation/native';

const QuizPage = (props, navigation) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.FetchReducer);
  const active = useSelector(state => state.FetchReducer);
  const [count, setCount] = useState(1);
  const [option, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState();
  const [selectedOptionArr, setSelectedOptionArr] = useState([]);
  const [result, setResult] = useState();
  const [marks, setMarks] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);

  const handleOptionSelect = option => {
    // console.log(data.data.results);
    const foundIndex = selectedOptionArr.findIndex(
      obj => obj.index == data.active,
    );
    if (foundIndex > -1) {
      selectedOptionArr[foundIndex].value = option;
    } else {
      selectedOptionArr.push({index: data.active, value: option});
    }

    setSelectedOption(option);
  };
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const increment = () => {
    if (data.active < data.data.results.length - 1) {
      // dispatch(Next(increaseCount()));
      setCount(prevCount => prevCount + 1);
      dispatch(Next());
    }
    //console.log(selectedOptionArr);
  };
  const decrement = () => {
    if (data.active > 0) dispatch(Back(decreaseCount()));
  };

  useEffect(() => {
    const shuffledOption = shuffle([
      ...data.data.results[data.active].incorrect_answers,
      data.data.results[data.active].correct_answer,
    ]);
    setOptions(shuffledOption);
  }, [data.active]);

  const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = (Math.floor(Math.random() * (i + 1))[(array[i], array[j])] = [
        array[j],
        array[i],
      ]);
    }
    return array;
  };

  //  another approach to fetch options
  // const arr = [...data.data.results[data.active].correct_answer,
  //   data.data.results[data.active].incorrect_answers],
  // const result = console.log(arr, 'hii');
  // console.log(data);

  const checkAnswer = () => {
    const correctAnswer = data.data.results[data.active].correct_answer;
    const selectedAnswer = data.data.results[data.active].selected;

    if (data.data.results[data.active].selected === correctAnswer) {
      setMarks(marks + 1);
    } else {
      setMarks(marks);
    }
  };
  return (
    <View style={styles.container}>
      {/* Question View */}

      <View style={styles.card}>
        <Text
          style={{
            fontSize: 25,
            justifyContent: 'center',
            alignSelf: 'center',
            marginBottom: 10,

            marginRight: 10,
          }}>
          Question<Text> {data.active + 1}</Text>
        </Text>
        <View style={styles.QuestionView}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
            {data.data.results[data.active].question}
          </Text>
        </View>
        <View style={styles.optionContainer}>
          {/* option 1 */}
          <TouchableOpacity
            onPress={() => (
              handleOptionSelect(option[0]),
              (data.data.results[data.active].selected = option[0]),
              setResult(option[0]),
              checkAnswer()
            )}
            style={{
              backgroundColor:
                result == option[0] ||
                data.data.results[data.active].selected == option[0]
                  ? '#925eed'
                  : 'white',
              width: '100%',
              elevation: 10,
              borderRadius: 10,
            }}>
            <Text
              style={[
                styles.options,
                selectedOption == [0] && styles.selectedOption,
              ]}>
              {/* a.{data.data.results[data.active].correct_answer} */}
              {option[0]}
            </Text>
          </TouchableOpacity>
          {/* option 2 */}
          <TouchableOpacity
            onPress={() => (
              handleOptionSelect(option[1]),
              ((data.data.results[data.active].selected = option[1]),
              setResult(option[1])),
              checkAnswer()
            )}
            style={{
              backgroundColor:
                result == option[1] ||
                data.data.results[data.active].selected == option[1]
                  ? '#925eed'
                  : 'white',
              width: '100%',
              borderRadius: 10,
              elevation: 300,
              marginTop: 20,
              elevation: 10,
            }}>
            <Text
              style={[
                styles.options,
                selectedOption == [1] && styles.selectedOption,
              ]}>
              {/* b.{data.data.results[data.active].incorrect_answers[0]} */}
              {option[1]}
            </Text>
          </TouchableOpacity>
          {/* option 3 */}
          <TouchableOpacity
            onPress={() => (
              handleOptionSelect(option[2]),
              ((data.data.results[data.active].selected = option[2]),
              setResult(option[2])),
              checkAnswer()
            )}
            style={{
              backgroundColor:
                result == option[2] ||
                data.data.results[data.active].selected == option[2]
                  ? '#925eed'
                  : 'white',
              width: '100%',
              elevation: 10,
              borderRadius: 10,
              marginTop: 20,
            }}>
            <Text
              style={[
                styles.options,
                selectedOption == [2] && styles.selectedOption,
              ]}>
              {/* c.{data.data.results[data.active].incorrect_answers[1]} */}
              {option[2]}
            </Text>
          </TouchableOpacity>
          {/* option 4 */}
          <TouchableOpacity
            onPress={() => (
              handleOptionSelect(option[3]),
              ((data.data.results[data.active].selected = option[3]),
              setResult(option[3])),
              checkAnswer()
            )}
            style={{
              backgroundColor:
                result == option[3] ||
                data.data.results[data.active].selected == option[3]
                  ? '#925eed'
                  : 'white',
              width: '100%',
              elevation: 10,
              borderRadius: 10,
              marginTop: 20,
            }}>
            <Text
              style={[
                styles.options,
                selectedOption == [3] && styles.selectedOption,
              ]}>
              {/* d.{data.data.results[data.active].incorrect_answers[2]} */}
              {option[3]}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* button container */}
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => decrement()}
          style={{
            paddingHorizontal: 25,
            paddingVertical: 10,
            backgroundColor: '#925eed',
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 20, color: 'white'}}>Back</Text>
        </TouchableOpacity>
        {console.log('vedanr', data.active)}
        {data.active < data.data.results.length - 1 ? (
          <TouchableOpacity
            onPress={() => increment()}
            style={{
              paddingHorizontal: 25,
              paddingVertical: 10,
              backgroundColor: '#925eed',
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>Next</Text>
          </TouchableOpacity>
        ) : (
          <View
            style={{
              paddingHorizontal: 25,
              paddingVertical: 10,
              backgroundColor: 'grey',
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>Next</Text>
          </View>
        )}
      </View>
      {/* <View style={styles.Score}>
        <TouchableOpacity onPress={() => ''}>
          <Text>check</Text>
          <Text>{marks}</Text>
        </TouchableOpacity>
      </View> */}
      <View
        style={{
          width: '100%',
          marginTop: 50,
          marginLeft: '60%',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate(
              'ScorePage',
              {result: marks},
              {answers: selectedAnswer},
            )
          }>
          <Text
            style={{
              fontSize: 16,
              color: '#925eed',
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}>
            Check Your Score
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate(AnswerScreen)}>
          <Text
            style={{
              paddingHorizontal: 30,
              paddingVertical: 10,
              // backgroundColor: '#925eed',
              color: '#925eed',
              borderRadius: 10,
              fontWeight: 'bold',
              fontStyle: 'italic',
              // justifyContent: 'center',
              // alignSelf: 'center',a
              fontSize: 20,
            }}>
            Response
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',

    height: 1000,
  },
  card: {
    marginTop: 30,
    width: '90%',
    backgroundColor: 'white',
    elevation: 300,
    marginLeft: 15,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 20,
    paddingBottom: 30,
  },
  QuestionView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionContainer: {
    marginTop: 20,
  },
  button: {
    // marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 50,
  },
  options: {
    marginTop: 10,
    fontSize: 22,
    marginLeft: 10,
    //color: 'black',
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    marginBottom: 20,
  },
  selectedOption: {},
});

export default QuizPage;

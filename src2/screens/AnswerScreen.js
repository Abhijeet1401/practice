import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

const AnswerScreen = (props, navigation) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.FetchReducer.data);
  const active = useSelector(state => state.FetchReducer);
  const [answer, setAnswer] = useState([]);
  //const selectedAnswer = props.route.params.answers;
  //console.log(data,'hii')

  const questions = data.results.map(results => ({
    question: results.question,
    selectedAnswer: results.selected,
    correctAnswer: results.correct_answer,
    options: [results.incorrect_answers, results.correct_answer],
  }));

  const renderItem = ({item, index}) => (
    console.log('data.data.results[data.active].selected', item),
    (
      <View style={styles.answerContainer}>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 16}}>
          {item.question}
        </Text>
        <View style={styles.opt}>{/* <Text>{item.options}</Text> */}</View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Text style={{fontSize: 16, color: 'black'}}> Your Response:</Text>
          <Text style={{color: 'black', fontSize: 16, marginLeft: 10}}>
            {item.selectedAnswer}
          </Text>
        </View>
        <Text
          style={{
            paddingHorizontal: 5,
            paddingVertical: 5,
            backgroundColor: '#925eed',
            borderRadius: 10,
            fontSize: 16,
            marginTop: 20,
            color: 'white',
            width: '100%',
          }}>
          Correct Answer:- {item.correctAnswer}
        </Text>
        {/* <Text>{selectedAnswer}</Text> */}
      </View>
    )
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          scrollEnabled={false}
          data={questions}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginBottom: 20,
  },
  answerContainer: {
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
});
export default AnswerScreen;

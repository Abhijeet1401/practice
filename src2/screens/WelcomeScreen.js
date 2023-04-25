import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import fetchData from '../Redux/actions/action';
import QuizPage from './QuizPage';
import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';

const WelcomeScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.FetchReducer);

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchData());
  }, [fetchData]);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchData());
    }, []),
  );

  if (!data.data.results) {
    return <Text>Loading...</Text>;
  }
  console.log(data);

  return (
    <View style={styles.container}>
      {/* <Text style={{marginTop:30,justifyContent:'center',alignSelf:'center'}}>FETCH API</Text>
      <View style={{marginTop:30}}>
      <TouchableOpacity onPress={()=>dispatch(fetchData())}>
        <Text>FETCH API</Text>
      </TouchableOpacity> 
      </View> */}
      <View style={styles.welcomePage}>
        <Image
          style={{
            height: 300,
            width: 300,
            justifyContent: 'center',
            alignSelf: 'center',
            resizeMode: 'cover',
            marginBottom: 20,
          }}
          source={require('../Images/Quiz-PNG-Image.png')}
        />
        <View></View>
        <View style={styles.bottom}>
          <View style={{marginTop: 30}}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                marginTop: 30,
                fontSize: 50,
                fontSize: 20,
                fontStyle: 'italic',
              }}>
              Test Your Knowledge
            </Text>
          </View>

          <View style={{marginTop: 200}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(QuizPage)}>
              <Text
                style={{color: '#925eed', textAlign: 'center', fontSize: 18}}>
                Play
              </Text>
            </TouchableOpacity>
            {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
                width: '100%',
                
              }}>
              <Text style={{color:'blue',marginLeft:50}}>Want to Register?</Text>
              <Text>Login</Text>
            </View> */}
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  welcomePage: {
    marginTop: 30,
  },
  bottom: {
    backgroundColor: '#925eed',
    height: '60%',
    transform: [{scaleX: 2}],
    borderTopStartRadius: 200,
    borderTopEndRadius: 200,
    overflow: 'hidden',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    width: '30%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
});

export default WelcomeScreen;

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Register from '../../../src2/screens/Register';

const CounterApp = ({navigation}) => {
  const [count, setCount] = useState(0);

  return (
    <View style={StyleSheet.container}>
      <View
        style={{
          backgroundColor: 'grey',
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          width: '90%',
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>CounterApp</Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 200,
        }}>
        <Text style={{fontSize: 50}}>{count}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count + 1)}>
          <Text>Increase</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count - 1)}>
          <Text>Decrease</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setCount(0)}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 300}}>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => navigation.navigate(Register)}>
          <Text style={{color: 'white', fontSize: 15}}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // marginTop: 300,
    // marginLeft: 20,
  },
  button: {
    paddingHorizontal: 30,
    backgroundColor: '#ddd',
    paddingVertical: 15,
  },
  btnNext: {
    alignSelf: 'center',
    backgroundColor: 'blue',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
});

export default CounterApp;

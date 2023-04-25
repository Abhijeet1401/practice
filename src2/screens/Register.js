import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions
} from 'react-native';
import React, {isValidElement, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from './WelcomeScreen';

const Register = ({navigation}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassWord] = useState('');

  //const[submit,setSubmit]=useState();

  const handleSubmitForm = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const mobilenum = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    // if(name!==''&& email!==''){
    //  Alert.alert("Validation Error",'please fill all the fields')
    // }else
    if (!emailRegex.test(email)) {
      Alert.alert('validation Error', 'please enter valid email');
    } else if (!passwordRegex.test(password)) {
      Alert.alert(
        'Invalid password',
        'Your password must contain at least 8 characters including at least one uppercase letter, one lowercase letter, and one number.',
      );
    } else if (!mobilenum.test(number)) {
      Alert.alert('Validation Error', 'mobile number should be 10 digit');
    } else if (!name.trim()) {
      Alert.alert('Validation Error', ' name can not be empty');
    }
    //  Alert.alert('form submit successfully','submit successfully')
    else navigation.navigate(WelcomeScreen);
  };

  // const isValidEmail = (email) => {
  //   // Regular expression for email validation
  //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //   return emailRegex.test(email);
  // };

  return (
    <View style={StyleSheet.container}>
      <View style={{}}>
        <Text></Text>
      </View>
      <View style={styles.FormContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
          }}>
          <Text style={{marginTop: 15, fontSize: 18, color: '#925eed'}}>
            UserName
          </Text>
          <TextInput
            style={styles.input}
            placeholder="UserName"
            onChangeText={text => setName(text)}
          />
        </View>
        {/* 2nd text */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
            width: '90%',
          }}>
          <Text style={{fontSize: 18, marginTop: 15, color: '#925eed'}}>
            Email
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="email"
            onChangeText={text => setEmail(text)}
          />
        </View>
        {/* 3rd input */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
            width: '90%',
          }}>
          <Text style={{marginTop: 15, fontSize: 18, color: '#925eed'}}>
            Mobile
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            onChangeText={number => setNumber(number)}
            keyboardType="numeric"
            value={number}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
            width: '90%',
          }}>
          <Text style={{marginTop: 15, fontSize: 18, color: '#925eed'}}>
            Password
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setPassWord(text)}
            //secureTextEntry={true}
            value={password}
          />
        </View>

        <View
          style={{
            backgroundColor: '#925eed',
            paddingHorizontal: 60,
            paddingVertical: 15,
            marginTop: 50,
            borderRadius: 10,
          }}>
          <TouchableOpacity onPress={() => handleSubmitForm()}>
            <Text style={{color: 'white', fontSize: 16}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    
    
    
    //flex:1,
    // justifyContent:'center',
    // alignSelf:'center',
    width: '100%',
  },
  FormContainer: {
    //flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  input: {
    // flex:1,
    paddingHorizontal: 20,
    marginTop: 10,
    borderWidth: 1,
    marginLeft: 30,
    width: '70%',
    borderRadius: 10,
    borderColor: '#925eed',
    // padding: 10,
  },
});

export default Register;

import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import CounterApp from './CounterApp';

const data = [
  {
    id: 1,
    name: 'abhijeet',
    phone: 9199009464,
    Address: 'bairiya muz',
  },
  {
    id: 2,
    name: 'ak',
    phone: 9304054553,
    Address: 'bairiya muz',
  },
  {
    id: 3,
    name: 'abhishek',
    phone: 9167787989,
    Address: 'bairiya muz',
  },
  {
    id: 4,
    name: 'sandeep',
    phone: 9199009464,
    Address: 'bairiya muz',
  },
];
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Render = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View>
        <Text>{item.id}</Text>
        <Text>{item.name}</Text>
        <Text>{item.phone}</Text>
      </View>
    );
  };
  return (
    <View>
      {/* example map method */}
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <Text
          style={{fontSize: 20, justifyContent: 'center', alignSelf: 'center'}}>
          MapMethod
        </Text>
        {data.map(item => (
          <Text>{item.phone.toString()}</Text>
        ))}
      </View>
      <Text></Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {/* example flatlist */}
        <Text style={{fontSize: 20}}>FlatList</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={data => data.id.toString()}
        />
      </View>
      {/* filter data */}
      <View
        style={{
          width: '100%',

          marginTop: 30,
        }}>
        <Text style={{alignSelf: 'center', justifyContent: 'space-evenly'}}>
          Original Number: {number + ''}
          {'\n'}
          filtered Number: {number.filter(num => num % 2 != 0) + ' '}
        </Text>
      </View>
      <View style={{marginTop: 300}}>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => navigation.navigate(CounterApp)}>
          <Text style={{color: 'white', fontSize: 15}}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  btnNext: {
    alignSelf: 'center',
    backgroundColor: 'blue',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
});
export default Render;

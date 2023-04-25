import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
 import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset } from './Redux/action/action'
//import { increment } from './Redux/action/action'
//import countReducer from './Redux/reducers/countReducer'
const counter = () => {
  const  count= useSelector(state=>state.countReducer.count)
   // const  count= useSelector(state=>state.countReducer)
 
  const dispatch =useDispatch()

  return (
    <View style={styles.container}>
     <View style={{marginTop:30,backgroundColor:'#ddd',width:'90%',marginLeft:20}}>
     <Text style={styles.title}>Counter App</Text>
     </View>
     <View style={styles.display}>
     <Text style={{fontSize:40,alignSelf:'center'}}>{count}</Text></View>
     <View style={styles.buttonContainer}>   
       <TouchableOpacity style={styles.button} onPress={()=>dispatch(increment())}><Text style={{fontWeight:'bold'}}>Increase</Text></TouchableOpacity>  
       <TouchableOpacity  style={styles.button}onPress={()=>dispatch(decrement())}><Text style={{fontWeight:'bold'}}>Decrease</Text></TouchableOpacity>
       <TouchableOpacity  style={styles.button} onPress={()=>dispatch(reset())}><Text style={{fontWeight:'bold'}}>Reset</Text></TouchableOpacity>
      </View>
      
    </View>
  )
}
 const styles=StyleSheet.create({
   container:{
    // justifyContent:'center',
    // alignItems:'center'
   },
   title:{
    fontSize:25,
    justifyContent:'center',
    alignSelf:'center'  ,
    paddingHorizontal:10,
    paddingVertical:10,
    
   },
   buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:100,
    marginLeft:10,
    
  },
  button:{
    paddingHorizontal:30,
    backgroundColor:'#ddd',
    paddingVertical:15,
    borderRadius:10
  },
  display:{
    justifyContent:'center',
    alignSelf:'center',
    marginTop:50,
     paddingHorizontal:10,
     width:'30%',
     backgroundColor:'#ddd',
     borderRadius:10
     
  }
 })
export default counter
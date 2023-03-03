import { View, Text, StyleSheet, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import Task from './Task'


const checkListImg = {uri:'https://static.vecteezy.com/system/resources/previews/010/872/886/original/3d-checklist-icon-png.png'}


const OnboardScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View>
            <Image source={checkListImg} style={{width:250,height:250,borderRadius:200,marginVertical: 15}}/>
        </View>
      <Text style={styles.text}>Dekin Todo App</Text>
      <TouchableOpacity style={styles.btn} onPress={()=>(navigation.navigate(Task))}>
        <Text>Start Now</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgb(168 85 247)',
    },
    text:{
        fontSize: 30,
        color:'white',
        fontWeight: 'bold'
    },
    btn:{
        backgroundColor:'white',
        padding: 10,
        borderRadius:20,
        marginTop: 15,
        width: '65%',
        justifyContent:'center',
        alignItems:'center',
        elevation: 5
    }

})

export default OnboardScreen
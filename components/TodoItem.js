import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const todoItem = ({todo,delTodo,id,status,index}) => {
  return (
    
      <View style={styles.container}>
        <Text style={[{flex:1,textDecorationLine: todo.isComplete ? 'line-through':'none'}]}>{todo.task}</Text>
        {!todo.isComplete ? 
        <Icon name='thumbs-up' size={18} color={'green'} style={{marginHorizontal:10}} onPress={()=>status(index)}/> : <Text>{''}</Text>

      }
        <Icon name='trash' size={18} color={'red'} onPress={()=>delTodo(index)}/>
      </View>
   
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        padding: 18,
        borderRadius: 8,
        elevation: 8,
        marginVertical: 10,
        height:60
    }
})

export default todoItem
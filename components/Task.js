import { View, Text, StyleSheet, Image, TextInput, SafeAreaView,TouchableOpacity, ScrollView, FlatList, KeyboardAvoidingView} from 'react-native'
import React,{useState,useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import TodoItem from './TodoItem';

import AsyncStorage from '@react-native-async-storage/async-storage';

const maleIcon = {uri: 'https://www.yugatech.com/wp-content/uploads/2020/09/Facebook-Avatar.jpg'}

const Task = () => {
     const [todos,setTodo] = useState([])

     //Get saved todos
     const getTodos = (todos) =>{
        //getch data from localstorage
            AsyncStorage.getItem('todos').then((data) => {
            if (data) {
                //parse from string to object inside todos array
              setTodo(JSON.parse(data));
            }
          });
     }

     useEffect(()=>{
        // calling functin on page load and passing todo array
        getTodos(todos)
     },[])

     //Task states
     const [task,setTask] = useState('')
     const [isComplete,setIsComplete] = useState(false)

      //deleting a todo
    const deleteTodo = async(id)=>{
        let newTodo = [...todos]
        let index = id
        newTodo.splice(index,1)
        await setTodo(newTodo)
    }

    const finishTask = async(id)=>{
        let newTodo = [...todos]
        let index = id
        newTodo[index].isComplete = true
        await setTodo(newTodo)
    }

        //Saving A TODO
     const addTodo = async ()=>{
        if(task !== '' && isComplete === false){
            await setTodo([...todos,{task,isComplete}])
            setTask('')
            setIsComplete(false)
        }else{
            alert("Fill in data")
            return;
        }
     }

     //adding a todo to asyncstorage
     useEffect(()=>{
        if(todos !== []){
            AsyncStorage.setItem('todos',JSON.stringify(todos))
        }
     },[todos])

    


  return (
    <View style={styles.wrapper}>
        <SafeAreaView style={styles.container}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
            <Text style={styles.textMedium}>Whats Up There !</Text>
            <Image source={maleIcon} style={{width: 50,height: 50, borderRadius: 25}}/>
        </View>

        <View style={styles.line}></View>

        
        <View style={styles.taskCard}>
            <Text style={{color:'white',fontSize:18,fontWeight:'600'}}>Today's Main Focus</Text>
            <Text style={{color:'white',fontSize:28,fontWeight:'700'}}>Set Goals For Today</Text>

            
            <View style={styles.inputField}>
                <TextInput value={task} placeholder='What is your next task ?' style={styles.input} onChangeText={(text)=>{
                    setTask(text)
                }}/>
                
                <TouchableOpacity style={{backgroundColor:'#009a38',justifyContent:'center',padding:10,borderRadius:5,marginLeft: 5}} onPress={addTodo}>
                    <Icon name='plus' size={20} color='white'/>
                </TouchableOpacity>
            </View>
            
        </View>


        <View style={styles.taskList}>
                {/* list todos */}
            { todos.length > 0 ? 
            <KeyboardAvoidingView behavior='padding' style={{flex:3}}>
                <FlatList
                    data={todos}
                    contentContainerStyle={{marginBottom:40}}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item,index})=>(
                        <TodoItem todo={item} delTodo={deleteTodo} index={index} status={finishTask}/>
                    )}
                />
            </KeyboardAvoidingView>

           : (<Text style={{color:'white',fontSize:25,fontWeight:600}}>No Todos Yet</Text>) }   
           
        </View>
            
        </SafeAreaView>
    </View>
  )
}

const styles= StyleSheet.create({
    wrapper:{
        flex: 1,
        backgroundColor:'rgb(168 85 247)',

    },
    container:{
        flex: 1,
        padding: 20,
        backgroundColor:'white',
        margin: 15,
        borderRadius: 10,
        elevation: 10,
        height: '100%',
        overflow:'hidden'

        
    },
    textMedium:{
        fontSize:25,
        color:"rgb(168 85 247)",
        fontWeight: 'bold'
    },
    line:{
        width: '100%',
        height: 5,
        backgroundColor:'rgb(168 85 247)',
        borderRadius: 20
    },
    taskCard:{
        backgroundColor:'rgb(168 85 247)',
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
    },
    inputField:{
        backgroundColor:'white',
        padding: 10,
        borderRadius: 10,
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    input:{
        flex: 1,
        fontSize:18,
        fontWeight:'600',
        color:'gray'
    },
    taskList:{
        padding: 10,
        backgroundColor:'rgb(168 85 247)',
        borderRadius: 10,
        height:'60%',
        marginBottom: 20,
        elevation: 5
    }
})

export default Task
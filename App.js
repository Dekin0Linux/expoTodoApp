// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,StatusBar, SafeAreaView} from 'react-native';
import OnboardScreen from './components/OnboardScreen';
import Task from './components/Task';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()




export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='white' barStyle="dark-content"/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown:false
        }}>
          <Stack.Screen name='OnBoard' component={OnboardScreen}/>
          <Stack.Screen name='Task' component={Task}/>
        </Stack.Navigator>
      </NavigationContainer>
      {/* <OnboardScreen/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgb(168 85 247)',
  },
});

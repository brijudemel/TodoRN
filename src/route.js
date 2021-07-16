import * as React from 'react';
import {useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import TodoForm from './screens/TodoForm';
import TodoList from './screens/TodoList';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TodoContext} from './context/TodoContext';
const Route = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  const {isLoading, setIsLoading} = useContext(TodoContext);
  function MyDrawer() {
    return (
      <Drawer.Navigator
        drawerType="front"
        overlayColor={0.5}
        drawerStyle={{
          backgroundColor: '#c6cbef',
          width: 240,
        }}>
        <Drawer.Screen name="Feed" />
        {/* <Drawer.Screen name="Article" component={Article} /> */}
      </Drawer.Navigator>
    );
  }
  function MyStack() {
    return (
      <Stack.Navigator initialRouteName="Form">
        <Stack.Screen
          name="Form"
          component={TodoForm}
          options={() => ({
            title: 'To-Do',
          })}
        />
        <Stack.Screen
          name="List"
          component={TodoList}
          options={() => ({
            title: 'List',
          })}
        />
      </Stack.Navigator>
    );
  }
  return isLoading ? (
    <LottieView
      style={{backgroundColor: 'white'}}
      source={require('./assets/anim1.json')}
      autoPlay
      loop
    />
  ) : (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};
export default Route;

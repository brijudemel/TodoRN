import * as React from 'react';
import {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import TodoForm from './screens/TodoForm';
import TodoList from './screens/TodoList';
import LottieView from 'lottie-react-native';
import {TodoContext} from './context/TodoContext';
import DrawerContent from './DrawerContent';
const Route = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  const {isLoading} = useContext(TodoContext);
  function MyDrawer() {
    return (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Root" component={MyStack} />
      </Drawer.Navigator>
    );
  }
  function MyStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="List">
        <Stack.Screen
          name="List"
          component={TodoList}
          options={() => ({
            title: 'List',
          })}
        />
        <Stack.Screen
          name="Form"
          component={TodoForm}
          options={() => ({
            title: 'To-Do',
          })}
        />
      </Stack.Navigator>
    );
  }
  return isLoading ? (
    <LottieView
      style={{backgroundColor: 'white'}}
      source={require('./assets/notes.json')}
      autoPlay
      loop
    />
  ) : (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};
export default Route;

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import TodoForm from './src/screens/TodoForm';
import TodoList from './src/screens/TodoList';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
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
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

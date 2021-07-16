import 'react-native-gesture-handler';
import * as React from 'react';
import {enableScreens} from 'react-native-screens';
import {TodoProvider} from './src/context/TodoContext';
import Route from './src/route';
enableScreens();
export default function App() {
  return (
    <TodoProvider>
      <Route />
    </TodoProvider>
  );
}

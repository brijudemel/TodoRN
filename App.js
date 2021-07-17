import 'react-native-gesture-handler';
import * as React from 'react';
import {enableScreens} from 'react-native-screens';
import {TodoProvider} from './src/context/TodoContext';
import {Provider as PaperProvider} from 'react-native-paper';

import Route from './src/route';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

enableScreens();
export default function App() {
  return (
    <PaperProvider>
      <TodoProvider>
        <Route />
      </TodoProvider>
    </PaperProvider>
  );
}

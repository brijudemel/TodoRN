import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, TextInput, Button} from 'react-native';
const TodoItem = ({todo}) => {
  return (
    <View>
      <Text>{todo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TodoItem;

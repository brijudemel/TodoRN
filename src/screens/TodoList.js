import React, {useContext} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text, ActivityIndicator} from 'react-native';
import {TodoContext} from '../context/TodoContext';
import TodoItem from '../components/TodoItem';
const TodoList = () => {
  const {activities} = useContext(TodoContext);

  return (
    <View>
      <FlatList
        data={activities}
        renderItem={({item}) => <TodoItem todo={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default TodoList;

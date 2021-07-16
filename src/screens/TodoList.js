import React, {useContext} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View} from 'react-native';
import {TodoContext} from '../context/TodoContext';
import TodoItem from '../components/TodoItem';
const TodoList = () => {
  const {activities} = useContext(TodoContext);

  return (
    <View>
      <FlatList
        data={activities}
        keyExtractor={activity => activity.id}
        renderItem={({item}) => <TodoItem todo={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default TodoList;

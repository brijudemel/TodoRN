import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {TodoContext} from '../context/TodoContext';
const TodoItem = ({todo}) => {
  const {deleteTodo} = useContext(TodoContext);
  return (
    <TouchableOpacity onPress={() => deleteTodo(todo)}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.todo}>{todo.activity}</Text>
        </View>
        <Icon name="trash" style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 5,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  todo: {
    fontSize: 25,
  },
  icon: {
    fontSize: 24,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default TodoItem;

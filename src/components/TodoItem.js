import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {TodoContext} from '../context/TodoContext';
const TodoItem = ({todo}) => {
  const {deleteTodo} = useContext(TodoContext);
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.todo}>{todo.activity}</Text>
      </View>
      <TouchableOpacity onPress={() => deleteTodo(todo)}>
        <Icon name="trash" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,

    backgroundColor: '#5D4A66',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 20,
  },
  todo: {
    fontSize: 20,
    padding: 10,
    color: '#fff',
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
    color: '#fff',
  },
});

export default TodoItem;

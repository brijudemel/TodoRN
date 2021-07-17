import React, {useContext} from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import {TodoContext} from '../context/TodoContext';
import TodoItem from '../components/TodoItem';
import Icon from 'react-native-vector-icons/Feather';

const TodoList = ({navigation}) => {
  const {activities} = useContext(TodoContext);

  return (
    <View style={styles.container}>
      <View style={styles.todoWrapper}>
        <Text style={styles.sectionTitle}>Your Tasks</Text>
        <View style={styles.items}>
          <FlatList
            data={activities}
            keyExtractor={activity => activity.id}
            renderItem={({item}) => <TodoItem todo={item} />}
          />
        </View>
      </View>
      <View style={styles.plusview}>
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => navigation.navigate('Form')}>
          <Icon name="plus" style={styles.plus} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A5D7B',
  },
  todoWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  items: {
    marginTop: 30,
  },
  roundButton: {
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#E9D985',
  },
  plusview: {
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
  plus: {
    fontSize: 30,
    color: '#000000',
  },
});
export default TodoList;

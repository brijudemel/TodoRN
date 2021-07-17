import React, {useState, useContext} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text, TextInput, Button} from 'react-native';
import {TodoContext} from '../context/TodoContext';
import Icon from 'react-native-vector-icons/Feather';
const TodoForm = ({navigation}) => {
  const {submitHandle} = useContext(TodoContext);
  const [activity, setActivity] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>What u gotta Do ?</Text>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            value={activity}
            onChangeText={text => setActivity(text)}
          />
          <TouchableOpacity
            style={styles.roundButton}
            onPress={() => {
              submitHandle(activity);
              setActivity('');
            }}>
            <Icon name="arrow-right" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 15,
    color: '#fff',
    flex: 1,
  },
  label: {
    fontSize: 30,
    marginBottom: 1,
    marginLeft: 5,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    color: '#fff',
  },
  roundButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#E9D985',
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#6A5D7B',
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: '#5D4A66',
    marginVertical: '50%',
    borderRadius: 10,
    width: '80%',
  },
  icon: {
    fontSize: 30,
  },
  inputWrap: {
    flexDirection: 'row',
  },
});
export default TodoForm;

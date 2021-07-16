import React, {useState, useContext} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, TextInput, Button} from 'react-native';
import {TodoContext} from '../context/TodoContext';

const TodoForm = ({navigation}) => {
  const {submitHandle} = useContext(TodoContext);
  const [activity, setActivity] = useState('');

  return (
    <View>
      <Text style={styles.label}>What u gotta Do ?</Text>
      <TextInput
        style={styles.input}
        value={activity}
        onChangeText={text => setActivity(text)}
      />
      <Button
        title="Add"
        onPress={() => {
          submitHandle(activity);
          setActivity('');
        }}
      />
      <Button
        title="View List"
        onPress={() =>
          navigation.navigate(
            'List', //{
            //  acti: JSON.stringify(activities),
            //}
          )
        }
      />
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
    margin: 5,
    color: '#000000',
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});
export default TodoForm;

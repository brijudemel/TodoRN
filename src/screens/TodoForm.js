import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoForm = ({navigation}) => {
  const [activity, setActivity] = useState('');
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    setActivities(async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@today');
        return jsonValue != null ? JSON.parse(jsonValue) : [];
      } catch (e) {
        console.log(e);
      }
    });
    console.log(activities);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async () => {
    // setActivities(prevValues => {
    //   return [...prevValues, activity];
    // });
    setActivities([activity]);
    try {
      await AsyncStorage.setItem('@today', JSON.stringify(activities));
      console.log('Added');
    } catch (e) {
      console.log(e);
    }
    setActivity('');
  };

  return (
    <View>
      <Text style={styles.label}>What u gotta Do ?</Text>
      <TextInput
        style={styles.input}
        value={activity}
        onChangeText={text => setActivity(text)}
      />
      <Button title="Add" onPress={onSubmit} />
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

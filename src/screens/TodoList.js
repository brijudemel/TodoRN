import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import {Context} from '../context/ToDoContext';

const TodoList = ({day, route}) => {
  //const {showActivity} = useContext(Context);
  //const activityList = showActivity(day);
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    setActivities(async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@today');
        return jsonValue != null ? JSON.parse(jsonValue) : [];
      } catch (e) {
        console.log(e);
      }
      console.log(activities);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //const {acti} = route.params;
  //console.log(JSON.parse(acti));

  return (
    <View>
      <FlatList data={activities} renderItem={item => <Text>{item}</Text>} />
    </View>
  );
};
const styles = StyleSheet.create({});
export default TodoList;

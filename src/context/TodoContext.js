import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react/cjs/react.development';

export const TodoContext = createContext();
export const TodoProvider = ({children}) => {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetchValues();
    }, 3000);
  }, []);
  const fetchValues = async () => {
    setIsLoading(true);
    const recvValue = await AsyncStorage.getItem('@1_day');
    console.log(JSON.parse(recvValue));
    setActivities(recvValue != null ? JSON.parse(recvValue) : []);
    setIsLoading(false);
  };
  return (
    <TodoContext.Provider
      value={{
        isLoading,
        setIsLoading,
        activities,
        setActivities,
        submitHandle: async activity => {
          const rand = Math.floor(100000 + Math.random() * 900000);
          const newOb = {
            activity: activity,
            id: rand,
          };
          setActivities(prevValues => {
            return [...prevValues, newOb];
          });
          try {
            await AsyncStorage.setItem('@1_day', JSON.stringify(activities));
            console.log('Added');
          } catch (e) {
            console.log(e);
          }
        },
        deleteTodo: async activity => {
          setActivities(() =>
            activities.filter(todo => todo.id !== activity.id),
          );
          try {
            await AsyncStorage.setItem('@1_day', JSON.stringify(activities));
            console.log('Deleted');
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </TodoContext.Provider>
  );
};

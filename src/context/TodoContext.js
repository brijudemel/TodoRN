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
    const recvValue = await AsyncStorage.getItem('@today');
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
          setActivities(prevValues => {
            return [...prevValues, activity];
          });
          try {
            await AsyncStorage.setItem('@today', JSON.stringify(activities));
            console.log('Added');
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </TodoContext.Provider>
  );
};

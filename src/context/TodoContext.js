import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react/cjs/react.development';

export const TodoContext = createContext();
export const TodoProvider = ({children}) => {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState(1);
  const [key, setKey] = useState('@1_list');
  useEffect(() => {
    setTimeout(() => {
      fetchValues();
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchValues = async () => {
    setIsLoading(true);
    const recvValue = await AsyncStorage.getItem(key);
    console.log(JSON.parse(recvValue));
    setActivities(recvValue != null ? JSON.parse(recvValue) : []);
    setIsLoading(false);
  };
  return (
    <TodoContext.Provider
      value={{
        list,
        setList,
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
            await AsyncStorage.setItem(key, JSON.stringify(activities));
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
            await AsyncStorage.setItem(key, JSON.stringify(activities));
            console.log('Deleted');
          } catch (e) {
            console.log(e);
          }
        },
        handleList: async list_no => {
          setList(list_no);
          console.log(list_no, typeof list_no);
          setKey(() => {
            switch (list_no) {
              case 1:
                return '@1_list';
              case 2:
                return '@2_list';
              case 3:
                return '@3_list';
              case 4:
                return '@4_list';
              case 5:
                return '@5_list';
            }
          });
          fetchValues();
        },
      }}>
      {children}
    </TodoContext.Provider>
  );
};

import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import {TodoContext} from './context/TodoContext';
export default function DrawerContent(props) {
  const {list, handleList} = useContext(TodoContext);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
              label="To-Do 1"
              onPress={() => {
                handleList(1);
              }}
              icon={() => (
                <Icon
                  name="list"
                  size={20}
                  color={list === 1 ? 'red' : 'black'}
                />
              )}
            />
            <DrawerItem
              label="To-Do 2"
              onPress={() => {
                handleList(2);
              }}
              icon={() => (
                <Icon
                  name="list"
                  size={20}
                  color={list === 2 ? 'red' : 'black'}
                />
              )}
            />
            <DrawerItem
              label="To-Do 3"
              onPress={() => {
                handleList(3);
              }}
              icon={() => (
                <Icon
                  name="list"
                  size={20}
                  color={list === 3 ? 'red' : 'black'}
                />
              )}
            />
            <DrawerItem
              label="To-Do 4"
              onPress={() => {
                handleList(4);
              }}
              icon={() => (
                <Icon
                  name="list"
                  size={20}
                  color={list === 4 ? 'red' : 'black'}
                />
              )}
            />
            <DrawerItem
              label="To-Do 5"
              onPress={() => {
                handleList(5);
              }}
              icon={() => (
                <Icon
                  name="list"
                  size={20}
                  color={list === 5 ? 'red' : 'black'}
                />
              )}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
});

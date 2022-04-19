import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import ListItem from './components/ListItem';
import Form from './components/Form';


export default function App() {

  

  const [listOfItems, setListOfItems] = useState([
    {text: 'Купить молоко1', key: '1'},
    {text: 'Купить молоко2', key: '2'},
    {text: 'Купить молоко3', key: '3'},
    {text: 'Купить молоко4', key: '4'}
  ])
  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    })
  }

  const deleteH = (key) => {
    setListOfItems((list) =>{
      return list.filter(listOfItems => listOfItems.key != key)
    });
  }

  return (
    <View style={styles.container}>
      
      <View><Text style ={styles.text}>Список дел</Text></View>
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
          <ListItem el={item} deleteH={deleteH} />
        )}/>
        <StatusBar style="auto" />
      </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    textAlign: 'center',
    backgroundColor: 'silver',
    borderStyle: 'dotted',
    borderColor:'silver',
    borderWidth: 10,
    paddingTop: 50,
    fontSize: 18
  },
});

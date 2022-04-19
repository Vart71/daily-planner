import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, Text, FlatList } from 'react-native';


export default function ListItem({ el, deleteH }) {

  
  return (
    <TouchableHighlight onPress={ () => deleteH( el.key )}>
        <Text style={styles.text}> {el.text} </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
    text:{
        padding: 20, 
        textAlign: "center",
        borderRadius: 5,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        marginTop: 20,
        width: '60%',
        marginLeft: '20%'
        
    }
    
  
});
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, Text, FlatList, TextInput, Button, View } from 'react-native';

export default function Form({addHandler}) {
    const [text, setValue] = useState('');
    
    const onChange = (text) => {
        setValue(text);
    };
    const aler = () => alert('Не нахожу телефон')
  
    return (
        <View> 
            <TextInput style={styles.input} onChangeText={onChange} placeholder = 'Введите сюда задачу'/>
            <Button color = 'green' onPress={() => addHandler(text)} title = 'Добавить задачу'  />
            <Button style={styles.asd} onPress={aler} title = 'Подключиться к телефону'/>
      </View>
    );
}

const styles = StyleSheet.create({
    input:{
        borderBottomWidth: 1,
        borderColor:'#000',
        padding: 10

    }
    
    
  
});
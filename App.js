import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function App(){

  const [count, setCount] = useState(0);

  const increaseCount = () =>{
    setCount(count+1);
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{count}</Text>
      <Button title='Increase Count' onPress={increaseCount}></Button>
    </View>
  );
}

const styles = StyleSheet.create({

  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#000000',
    fontSize: 30,
    margin: 10
  },
});

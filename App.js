import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Display from './components/display';
import Button from './components/button';

export default function App() {
  const [input, setInput] = useState('');
  
  const handlePress = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (e) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    ['7','8','9','/'],
    ['4','5','6','*'],
    ['1','2','3','-'],
    ['0','.','=','+'],
    ['C']
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Display value={input} />
      <View style={styles.buttonContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((btn) => (
              <Button key={btn} label={btn} onPress={() => handlePress(btn)} />
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
  },
  buttonContainer: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});

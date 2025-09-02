import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Display({ value }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value || '0'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'right',
  },
});

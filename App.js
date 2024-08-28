import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [limits, setLimits] = useState('');

  const calculateLimits = (age) => {
    lowerLimit = (220 - age.replace(',', '.')) * 0.65;
    upperLimit = (220 - age.replace(',', '.')) * 0.85;
    setLimits(`${lowerLimit.toFixed(0)}-${upperLimit.toFixed(0)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        placeholder="Enter your age"
        onChangeText={setAge}
        keyboardType="decimal-pad"
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{limits}</Text>
      <Button title='Calculate' onPress={() => calculateLimits(age)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    marginTop: 50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 20,
    fontSize: 20,
  },
});

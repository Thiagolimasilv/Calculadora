import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function App() {
  const [sideLength, setSideLength] = useState('');
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [shape, setShape] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    let area;
    if (shape === 'square') {
      area = parseFloat(sideLength) * parseFloat(sideLength);
    } else if (shape === 'triangle') {
      area = 0.5 * parseFloat(base) * parseFloat(height);
    }
    setResult(area);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Area do quadrado"
          onChangeText={(text) => {
            setShape('square');
            setSideLength(text);
          }}
          keyboardType="numeric"
          value={shape === 'square' ? sideLength : ''}
        />
        <TextInput
          style={styles.input}
          placeholder="Base do triângulo"
          onChangeText={(text) => {
            setShape('triangle');
            setBase(text);
          }}
          keyboardType="numeric"
          value={shape === 'triangle' ? base : ''}
        />
        <TextInput
          style={styles.input}
          placeholder="Area do triângulo"
          onChangeText={(text) => setHeight(text)}
          keyboardType="numeric"
          value={height}
        />
      </View>
      <Button title="Calcular" onPress={handleCalculate} />
      {result !== null && (
        <Text style={styles.result}>Área: {result}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});

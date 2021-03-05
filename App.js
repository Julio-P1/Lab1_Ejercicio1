import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Picker, Button } from 'react-native';

const operarConversion = (cantidad, conversion) => {
  let resultado = 0.0;
  console.log("TextInput: " + cantidad + ", Conversion: " + conversion);
    if (conversion == '°C -> °F') {
      resultado = parseFloat((cantidad*1.8000) + 32)
    } else if (conversion == '°F -> °C') {
      resultado = parseFloat((cantidad - 32)*0.55)
    }
  resultado = resultado.toFixed(2);
  console.log(cantidad + " " + conversion + " " + resultado);
  return resultado;
  
}



export default function App() {

  const [conversion, setConversion] = useState('');
  const [resultado, setResultado] = useState('Aquí tu resultado.');
  const [cantidad, setInputText] = useState(' ');

  return (
    <View style={styles.container}>
      <Text style={styles.Resultado}> Resultado: {resultado} </Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Ingresa temperatura"
        onChangeText={texto => setInputText(texto)}
      />

      <Picker style={styles.pickerStyle} 
          selectedValue={conversion}
          onValueChange={(itemValue, itemIndex) => {setConversion(itemValue)}}
        >
        <Picker.Item label="°C -> °F" value="°C -> °F" />
        <Picker.Item label="°F -> °C" value="°F -> °C" />
        
      </Picker>

      <View style={{marginTop: 5}}>
        <Button
          title="Convertir"
          onPress={() => {
            setResultado(operarConversion(cantidad, conversion) + " grados")}}
          />
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  Resultado: {
    marginTop: 5,
    fontSize: 18,
    fontFamily: 'AlNile-Bold',
    color: '#f8f8ff'
  },

  pickerStyle: {
    height: 30,
    width: '35%',
    marginTop: 5,
    borderRadius: 4,
    marginBottom: 8,
    paddingLeft: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputStyle: {
    height: 40,
    backgroundColor: '#eee',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    width: '50%',
    paddingLeft: 12,
    marginBottom: 8,
    marginTop: 8
  },

  items: {
    padding: 8,
    fontSize: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 2
  },

  container: {
    flex: 1,
    backgroundColor: '#778899',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

/* 

Convertir centígrados a Fahrenheit

℉ = ℃ * 1.8000 + 32.00

*/

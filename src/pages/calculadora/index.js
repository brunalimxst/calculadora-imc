import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Pressable, Alert, Image } from 'react-native';
import { useState } from 'react';

export default function Calculadora() {

    const [peso, setPeso] = useState(null);
    const [alt, setAlt] = useState(null);  
  
    function calculoIMC() {
      const resultado = peso/(alt*alt);
  
  
      if (resultado < 10) {
        Alert.alert('IMC', 'Seu IMC é: ' + resultado.toFixed(2) + ', e sua classificação é Desnutrição Grau V.')
      } else if (resultado >= 10 && resultado <= 12.9) {
        Alert.alert('IMC', 'Seu IMC é: ' + resultado.toFixed(2) + ', e sua classificação é Desnutrição Grau IV.')
      } else if (resultado >= 13 && resultado <= 15.9) {
        Alert.alert('IMC', 'Seu IMC é: ' + resultado.toFixed(2) + ', e sua classificação é Desnutrição Grau III.')
      } else if (resultado >= 16 && resultado <= 16.9) {
        Alert.alert('IMC', 'Seu IMC é: ' + resultado.toFixed(2) + ', e sua classificação é Desnutrição Grau II.')
      } else if (resultado >= 17 && resultado <= 18.4) {
        Alert.alert('IMC', 'Seu IMC é: ' + resultado.toFixed(2) + ', e sua classificação é Desnutrição Grau I.')
      } else if (resultado >= 17 && resultado <= 18.4) {
        Alert.alert('IMC', 'Seu IMC é: ' + resultado.toFixed(2) + ', e sua classificação é Desnutrição Grau I.')
      } else if (resultado >= 18.5 && resultado <= 24.9) {
        Alert.alert('IMC', 'Seu IMC é: ' + resultado.toFixed(2) + ', e sua classificação é Normal!!!')
      } else if (resultado >= 25 && resultado <= 29.9) {
        Alert.alert('IMC', 'Seu IMC é: ' + resultado.toFixed(2) + ', e sua classificação é Pré-Obesidade.')
      } else if (resultado >= 30 && resultado <= 34.5) {
        Alert.alert('IMC', 'Seu IMC é: ' + resultado.toFixed(2) + ', e sua classificação é Obresidade Grau I.')
      } else if (resultado >= 35 && resultado <= 39.9) {
        Alert.alert('IMC', 'Seu IMC é: ' + resultado.toFixed(2) + ', e sua classificação é Obresidade Grau II.')
      } else if (resultado >= 40) {
        Alert.alert('IMC', 'Seu IMC é: ' + resultado.toFixed(2) + ', e sua classificação é Obresidade Grau III.')
      }
      
    }
  
    function validar() {
      if (peso != null && alt != null) {
        calculoIMC(); 
        setPeso(null);
        setAlt(null);
        return;
      } 
    }
  
    return (    
      <View style={styles.container}>
        <View style={styles.form}>
          <Image
            style={styles.pequenoLogo}
            source={require('../../../assets/img.png')} />
  
          <Text style={styles.textCalculo}>Cálculo IMC</Text>
          <Text style={styles.textAltura}>Altura</Text>
          <TextInput
            style={styles.input}
            onChangeText={setAlt}
            value={alt}
            placeholder="Ex: 1.80"
            keyboardType="numeric">
          </TextInput>
          <Text style={styles.textPeso}>Peso</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPeso}
            value={peso}
            placeholder="Ex: 80.5"
            keyboardType="numeric">
          </TextInput>
  
          <Pressable
            title="Calcular"
            onPress={() => validar()}
            style={styles.botao}>
            <Text style={styles.textBotao}>CALCULAR</Text>
          </Pressable>
  
        </View>
  
        <StatusBar style='auto' />
  
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF",
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    input: {
      width: 175,
      marginTop: 10,
      marginBottom: 8,
      padding: 10, 
      backgroundColor: "#FFFAFA",
      borderRadius: 7,
    },
  
    pequenoLogo: {
      width:250,
      height:200,
      marginBottom: 40,
    }, 
  
    form: {
      padding: 25,
      marginBottom: 80,
      alignItems: 'center',
    },
  
   botao: {
     backgroundColor: '#E0FFFF',
     width: 100,
     height: 35,
     marginTop: 15,
     borderRadius: 8,
     alignItems: 'center',
     justifyContent: 'center',
   },
  
   textCalculo: {
      fontSize: 25,
      color: '#F08080',
      fontWeight: 'bold',
   },
  
   textAltura : {
    fontSize: 20,
    color: '#FFB6C1',
    fontStyle: 'italic',
   },
    
   textPeso : {
    fontSize: 20,
    color: '#FFB6C1',
    fontStyle: 'italic',
   },
   textBotao: {
     fontSize: 15,
     color: '#87CEFA',
   },
  
  });
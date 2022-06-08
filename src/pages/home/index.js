import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';


export default function Home({navigation}) {
    return(
        <View style={styles.container}>
        <View>
            <Image
            style={styles.pequenoLogo}
            source={require('../../../assets/imc.png')} />


            <Pressable
            title="Calcular"
            onPress={() => navigation.navigate('Calculadora')}
            style={styles.botao}>
            <Text style={styles.textBotao}>Calcular IMC</Text>
          </Pressable>
        </View>
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
    botao: {
        backgroundColor: '#0ca89c',
        width: 130,
        height: 45,
        borderRadius: 4,
        left: 40,
        marginTop: 90,
        alignItems: 'center',
        justifyContent: 'center',
      },
    pequenoLogo: {
        width: 200,
        height: 200,
        marginBottom: 70,
      }, 
      textBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
      }
});
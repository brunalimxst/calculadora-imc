import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculadora from "./src/pages/calculadora";
import Home from "./src/pages/home";

const Stack = createNativeStackNavigator();



export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Calculadora" 
                      component={Calculadora}
                      options={{ title: '',
                      headerStyle: {
                        backgroundColor: '#FFF',
                      },
                     }} />
        <Stack.Screen name="Home" 
                      component={Home} 
                      options={{ title: 'Calculadora de IMC',
                      headerStyle: {
                        backgroundColor: '#00a5a7',
                      },
                      headerTintColor: 'white',
                      headerTitleAlign: 'center', 
                      }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




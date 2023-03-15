import { StatusBar } from 'expo-status-bar'; //importações de componentes e biliotecas
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login';
import Signup from './Signup';

const Stack = createNativeStackNavigator();

export default function MeuApp() {
	return (
		<View style={estilo.container}>
			<NavigationContainer>
				<Stack.Navigator>
					{/*Pilha de navegação */}
					<Stack.Screen name='Login' component={Login} />
					{/* Tela a ser empilhada*/}
					<Stack.Screen name='Signup' component={Signup} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}

const estilo = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

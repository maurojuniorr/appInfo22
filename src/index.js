import { StatusBar } from 'expo-status-bar'; //importações de componentes e biliotecas
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login'; //Importa o componente Login da pasta Login
import Signup from './Signup'; //Importa o componente Signup da pasta Signup
import Feed from './Feed';
import Cadastro from './Cadastro';
import Detalhes from './Detalhes';

const Pilha = createNativeStackNavigator(); // Cria uma instância de uma pilha

export default function MeuApp({ navigation }) {
	return (
		<NavigationContainer>
			{/*Container de navegação*/}
			<Pilha.Navigator initialRouteName='Cadastro'>
				{/*Navegador de pilhas*/}
				<Pilha.Screen name='Login' component={Login} />
				{/* uma tela*/}
				<Pilha.Screen name='Signup' component={Signup} />
				{/* uma tela*/}

				<Pilha.Screen name='Feed' component={Feed} />
				<Pilha.Screen name='Detalhes' component={Detalhes} />
				<Pilha.Screen name='Cadastro' component={Cadastro} />
			</Pilha.Navigator>
		</NavigationContainer>
	);
}

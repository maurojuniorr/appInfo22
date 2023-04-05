import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'; //importar bibliotecas
import styles from './estilo';
import React, { useState } from 'react'; //é uma variavel de estado

export default function Login({ navigation }) {
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image style={styles.img} source={require('../images/achei.png')} />
			</View>
			<View style={styles.inputContainer}>
				{/*View onde ficam os inputs de email e senha */}

				<Text style={styles.inputLabel}>Email </Text>
				<TextInput
					style={styles.input}
					placeholder='Insira seu email'
					value={email}
					onChangeText={setEmail}
				/>
				<Text style={styles.inputLabel}>Senha</Text>

				<TextInput
					style={styles.input}
					placeholder='Insira sua senha'
					value={password}
					onChangeText={setPassword}
				/>
			</View>

			<View style={styles.signupContainer}>
				<TouchableOpacity onPress={() => navigation.navigate('Signup')}>
					<Text style={styles.buttonTextRegister}>Registrar-se</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

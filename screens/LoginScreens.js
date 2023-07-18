import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const LoginScreens = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const navigation = useNavigation();
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'white', padding: 10, alignItems: 'center' }}>
			<KeyboardAvoidingView>
				<View style={{ alignItems: 'center', marginTop: 100, justifyContent: 'center' }}>
					<Text style={{ fontWeight: '700', fontSize: 17, color: '#003580' }}>Sign In</Text>
					<Text style={{ marginTop: 15, fontSize: 18, fontWeight: '500' }}>Sign Into your Account</Text>
				</View>
				<View style={{ marginTop: 50 }}>
					<View>
						<Text style={{ fontSize: 17, fontWeight: '500', color: 'gray' }}>Email</Text>
						<TextInput
							value={email}
							onChangeText={(text) => setEmail(text)}
							placeholder="Enter your email"
							placeholderTextColor={'black'}
							style={{
								fontSize: email ? 18 : 18,
								borderBottomColor: 'gray',
								borderBottomWidth: 1,
								marginVertical: 10,
								width: 300
							}}
						/>
					</View>
					<View style={{ marginTop: 15 }}>
						<Text style={{ fontSize: 17, fontWeight: '500', color: 'gray' }}>Password</Text>
						<TextInput
							value={password}
							onChangeText={(text) => setPassword(text)}
							secureTextEntry={true}
							placeholder="Password"
							placeholderTextColor={'black'}
							style={{
								fontSize: password ? 18 : 18,
								borderBottomColor: 'gray',
								borderBottomWidth: 1,
								marginVertical: 10,
								width: 300
							}}
						/>
					</View>
				</View>
				<Pressable
					onPress={() => navigation.navigate('Main')}
					style={{
						backgroundColor: '#003580',
						width: 200,
						padding: 15,
						borderRadius: 7,
						marginTop: 50,
						marginLeft: 'auto',
						marginRight: 'auto'
					}}
				>
					<Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Login</Text>
				</Pressable>
				<Pressable onPress={() => navigation.navigate('Register')} style={{ marginTop: 20 }}>
					<Text style={{ textAlign: 'center', color: 'gray', fontSize: 16 }}>
						Do you have an account? <Text style={{ color: '#003580' }}>Sign up</Text>
					</Text>
				</Pressable>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default LoginScreens;

const styles = StyleSheet.create({});

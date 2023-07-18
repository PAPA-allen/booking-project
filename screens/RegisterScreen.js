import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';

const RegisterScreen = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ phonenumber, setPhoneNumber ] = useState('');

	const navigation = useNavigation();
	const register = () => {
		if (email === '' || password === '' || phone === '') {
			Alert.alert(
				'Invalid Detials',
				'Please enter all the credentials',
				[
					{
						text: 'Cancel',
						onPress: () => console.log('Cancel Pressed'),
						style: 'cancel'
					},
					{ text: 'OK', onPress: () => console.log('OK Pressed') }
				],
				{ cancelable: false }
			);
		}
	};
	createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
		const user = userCredentials._tokenResponse.email;
		const uid = auth.currentUser.uid;

		setDoc(doc(db, 'users', `${uid}`), {
			email: user,
			phone: phone
		});
	});

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'white', padding: 10, alignItems: 'center' }}>
			<KeyboardAvoidingView>
				<View style={{ alignItems: 'center', marginTop: 100, justifyContent: 'center' }}>
					<Text style={{ fontWeight: '700', fontSize: 17, color: '#003580' }}>Register</Text>
					<Text style={{ marginTop: 15, fontSize: 18, fontWeight: '500' }}>Create An Account</Text>
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
					<View style={{ marginTop: 15 }}>
						<Text style={{ fontSize: 17, fontWeight: '500', color: 'gray' }}>Phone Number</Text>
						<TextInput
							value={phonenumber}
							onChangeText={(text) => setPhoneNumber(text)}
							placeholder="Phone No."
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
					onPress={register}
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
					<Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Register</Text>
				</Pressable>
				<Pressable onPress={() => navigation.navigate('Login')} style={{ marginTop: 20 }}>
					<Text style={{ textAlign: 'center', color: 'gray', fontSize: 16 }}>
						Alreadt have an account? <Text style={{ color: '#003580' }}>Login</Text>
					</Text>
				</Pressable>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookingScreen, HomeScreen, ProfileScreen, SaveScreen } from './screens';
import { Entypo, AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

const StackNavigator = () => {
	const Tab = createBottomTabNavigator();
	const Stack = createNativeStackNavigator();

	function BottomTabs() {
		return (
			<Tab.Navigator>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={{
						tabBarLabel: 'Home',
						headerShown: false,
						tabBarIcon: ({ focused }) =>
							focused ? (
								<Entypo name="home" size={24} color="#003580" />
							) : (
								<AntDesign name="home" size={24} color="black" />
							)
					}}
				/>
				<Tab.Screen
					name="Saved"
					component={SaveScreen}
					options={{
						tabBarLabel: 'Saved',
						headerShown: false,
						tabBarIcon: ({ focused }) =>
							focused ? (
								<AntDesign name="heart" size={24} color="#003580" />
							) : (
								<Entypo name="heart-outlined" size={24} color="black" />
							)
					}}
				/>
				<Tab.Screen
					name="Bookings"
					component={BookingScreen}
					options={{
						tabBarLabel: 'Bookings',
						headerShown: false,
						tabBarIcon: ({ focused }) =>
							focused ? (
								<Ionicons name="md-briefcase" size={24} color="#003580" />
							) : (
								<Ionicons name="md-briefcase-outline" size={24} color="black" />
							)
					}}
				/>
				<Tab.Screen
					name="Profile"
					component={ProfileScreen}
					options={{
						tabBarLabel: 'Profile',
						headerShown: false,
						tabBarIcon: ({ focused }) =>
							focused ? (
								<FontAwesome name="user" size={24} color="#003580" />
							) : (
								<FontAwesome name="user-o" size={24} color="black" />
							)
					}}
				/>
			</Tab.Navigator>
		);
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default StackNavigator;

const styles = StyleSheet.create({});

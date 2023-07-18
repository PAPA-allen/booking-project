import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookingScreen, HomeScreen, ProfileScreen, SaveScreen, SearchScreen, UserScreen } from './screens';
import { Entypo, AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import PlacesScreen from './screens/PlacesScreen';
import MapScreens from './screens/MapScreens';
import PropertyInfoScreen from './screens/PropertyInfoScreen';
import RoomScreen from './screens/RoomScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import LoginScreens from './screens/LoginScreens';
import RegisterScreen from './screens/RegisterScreen';

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
						headerShown: true,
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
						headerShown: true,
						tabBarIcon: ({ focused }) =>
							focused ? (
								<FontAwesome name="user" size={27} color="#003580" />
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
				<Stack.Screen name="Login" component={LoginScreens} options={{ headerShown: false }} />
				<Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
				<Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
				<Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
				<Stack.Screen name="Places" component={PlacesScreen} />
				<Stack.Screen name="Map" component={MapScreens} options={{ headerShown: false }} />
				<Stack.Screen name="Info" component={PropertyInfoScreen} />
				<Stack.Screen name="Rooms" component={RoomScreen} />
				<Stack.Screen name="User" component={UserScreen} />
				<Stack.Screen name="Confirmation" component={ConfirmationScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default StackNavigator;

const styles = StyleSheet.create({});

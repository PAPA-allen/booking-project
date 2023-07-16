import { Dimensions, Pressable, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const PropertyCard = ({ rooms, childrens, adults, selectedDates, property, availableRooms }) => {
	const { width, height } = Dimensions.get('window');
	return (
		<View>
			<Pressable style={{ margin: 15, flexDirection: 'row', backgroundColor: 'white' }}>
				<View>
					<Image style={{ height: height / 4, width: width - 300 }} source={{ uri: property.image }} />
				</View>
				<View style={{ padding: 10 }}>
					<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
						<Text style={{ width: 200 }}>{property.name}</Text>
						<AntDesign name="hearto" size={24} color="red" />
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginVertical: 7 }}>
						<MaterialIcons name="stars" size={24} color="green" />
						<Text>{property.rating}</Text>
						<View style={{ backgroundColor: '#6CB4EE', paddingVertical: 3, borderRadius: 5, width: 100 }}>
							<Text style={{ textAlign: 'center', fontSize: 15, color: 'white' }}>Genius Level</Text>
						</View>
					</View>
					<Text style={{ width: 200, marginVertical: 4, color: 'gray', fontWeight: 'bold' }}>
						{property.address.length > 50 ? property.address.substr(0, 50) : property.address}
					</Text>
					<Text style={{ fontSize: 15, fontWeight: '500' }}>Price for 1 Night and {adults} Adults</Text>
					<View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
						<Text style={{ color: 'red', fontSize: 18, textDecorationLine: 'line-through' }}>
							GHS {property.oldPrice * adults}
						</Text>
						<Text style={{ fontSize: 18 }}>GHS {property.newPrice * adults}</Text>
					</View>
					<View style={{ marginTop: 6 }}>
						<Text style={{ fontSize: 16, color: 'gray' }}>Luxury Room</Text>
						<Text style={{ fontSize: 16, color: 'gray' }}>Hotel Room: 1 bed</Text>
					</View>
					<View
						style={{
							backgroundColor: '#6082B6',
							paddingVertical: 2,
							borderRadius: 5,
							width: 150,
							paddingHorizontal: 4,
							marginTop: 4
						}}
					>
						<Text style={{ textAlign: 'center', color: 'white' }}>Limited time deal</Text>
					</View>
				</View>
			</Pressable>
		</View>
	);
};

export default PropertyCard;

const styles = StyleSheet.create({});

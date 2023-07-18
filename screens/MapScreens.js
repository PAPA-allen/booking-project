import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

const MapScreens = () => {
	const route = useRoute(null);
	const mapView = useRef(null);
	console.log(route.params);
	const coordinates = [];
	const details = route.params.searchResults.map((item) =>
		item.properties.map((prop) => {
			coordinates.push({
				longitude: Number(prop.longitude),
				latitude: Number(prop.latitude)
			});
		})
	);
	useEffect(() => {
		mapView.current.fitToCoordinates(coordinates, {
			edgePadding: {
				top: 90,
				left: 190,
				bottom: 190,
				right: 190
			}
		});
	}, []);
	return (
		<View>
			<MapView ref={mapView} style={{ width: '100%', height: '100%' }}>
				{route.params.searchResults.map((item) =>
					item.properties.map((property) => (
						<Marker
							title={property.name}
							coordinate={{
								latitude: Number(property.latitude),
								longitude: Number(property.longitude)
							}}
						>
							<Pressable
								style={{
									backgroundColor: '#003850',
									paddingVertical: 7,
									paddingHorizontal: 4,
									borderRadius: 4
								}}
							>
								<Text style={{ fontSize: 15, color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
									{property.newPrice}
								</Text>
							</Pressable>
						</Marker>
					))
				)}
			</MapView>
		</View>
	);
};

export default MapScreens;

const styles = StyleSheet.create({});

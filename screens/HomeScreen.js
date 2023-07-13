import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../components';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import DatePicker from 'react-native-date-ranges';
import { BottomModal, ModalFooter,ModalButton, ModalTitle,SlideAnimation,ModalContent } from 'react-native-modals';

const HomeScreen = () => {
	const navigate = useNavigation();
	const [ selectedDates, setSelectedDates ] = useState();
	const [ room, setRoom ] = useState(1);
	const [ adults, setAdults ] = useState(2);
	const [ children, setChildren ] = useState(0);
	const [ modalVisible, setModalVisible ] = useState(false);
	console.log(selectedDates);
	useLayoutEffect(() => {
		navigate.setOptions({
			headerShown: true,
			title: 'Booking.com',
			headerTitleStyle: {
				fontSize: 20,
				fontWeight: 'bold',
				color: 'white'
			},
			headerStyle: {
				backgroundColor: '#003580',
				height: 110,
				borderBottomColor: 'transparent',
				shadowColor: 'transparent'
			},
			headerRight: () => (
				<Ionicons name="notifications-outline" size={24} color="white" style={{ marginRight: 10 }} />
			)
		});
	}, []);
	const customButton = (onConfirm) => {
		return (
			<Button
				onPress={onConfirm}
				style={{
					container: { width: '80%', marginHorizontal: '3%' },
					text: { fontSize: 20 }
				}}
				primary
				title="submit"
			/>
		);
	};
	return (
        <>
		<View>
			<Header />
			<ScrollView>
				<View style={{ margin: 20, borderColor: '#FFC72C', borderWidth: 3, borderRadius: 6 }}>
					{/*Destination */}
					<Pressable
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							gap: 10,
							paddingHorizontal: 10,
							borderColor: '#FFC72C',
							borderWidth: 2,
							paddingVertical: 15
						}}
					>
						<Feather name="search" size={24} color="black" />
						<TextInput placeholderTextColor="black" placeholder="Enter your Destination" />
					</Pressable>
					{/*selected dates */}
					<Pressable
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							gap: 10,
							paddingHorizontal: 10,
							borderColor: '#FFC72C',
							borderWidth: 2,
							paddingVertical: 15
						}}
					>
						<MaterialIcons name="date-range" size={24} color="black" />
						<DatePicker
							style={{ width: 350, height: 30, borderWidth: 0, borderColor: 'transparent' }}
							customStyles={{
								placeholderText: {
									fontSize: 16,
									flexDirection: 'row',
									alignItems: 'center',
									marginRight: 'auto'
								},
								headerStyle: {
									backgroundColor: '#003580'
								},
								contentText: {
									fontSize: 16,
									flexDirection: 'row',
									alignItems: 'center',
									marginRight: 'auto'
								}
							}}
							selectedBgColor="#0047AB"
							customButton={(onConfirm) => customButton(onConfirm)}
							onConfirm={(startDate, endDate) => setSelectedDates(startDate, endDate)}
							allowFontScaling={false} // optional
							placeholder={'Apr 27, 2018 → Jul 10, 2018'}
							mode={'range'}
						/>
					</Pressable>
					{/*rooms and guests */}
					<Pressable
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							gap: 10,
							paddingHorizontal: 10,
							borderColor: '#FFC72C',
							borderWidth: 2,
							paddingVertical: 15
						}}
					>
						<FontAwesome name="user-o" size={24} color="black" />
						<TextInput placeholderTextColor="red" placeholder="1 room - 2 Adults - 0 children" />
					</Pressable>
					{/* search */}
					<Pressable
						style={{
							paddingHorizontal: 10,
							borderColor: '#FFC72C',
							borderWidth: 2,
							paddingVertical: 15,
							backgroundColor: '#2a52be'
						}}
					>
						<Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 500, color: 'white' }}>
							Search
						</Text>
					</Pressable>
				</View>
			</ScrollView>
		</View>
        <BottomModal swipeThreshold={200} onBackdropPress={()=>setModalVisible(!modalVisible)} swipeDirection={['up', 'down']} footer={<ModalFooter>
            <ModalButton text="Apply" style={{marginBottom:20, color:"white", backgroundColor:"#003580"}} onPress={()=>setModalVisible(!modalVisible)}/>
        </ModalFooter>}
        modalTitle={<ModalTitle title="select rooms and guests"/>}
        modalAnimation={new SlideAnimation({
            slideFrom:"bottom"

        })}
        onHardwareBackPress={()=>setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={()=>setModalVisible(!modalVisible)}>
        <ModalContent style={{width:"100%"}}>

        </ModalContent>
        </BottomModal>
        </>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});

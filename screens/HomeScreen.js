import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View, Alert} from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../components';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import DatePicker from 'react-native-date-ranges';
import { BottomModal, ModalFooter,ModalButton, ModalTitle,SlideAnimation,ModalContent } from 'react-native-modals';

const HomeScreen = () => {
	const navigation = useNavigation();
	const [ selectedDates, setSelectedDates ] = useState();
    const route = useRoute();
	const [ rooms, setRooms ] = useState(1);
	const [ adults, setAdults ] = useState(2);
	const [ children, setChildren ] = useState(0);
	const [ modalVisible, setModalVisible ] = useState(false);
	console.log(selectedDates);
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: true,
			title: 'Book',
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

	const searchPlaces = (place) => {
		if(!route.params || !selectedDates){
		  Alert.alert(
			"Invalid Details",
			"Please enter all the details",
			[
			  {
				text: "Cancel",
				onPress: () => console.log("Cancel Pressed"),
				style: "cancel"
			  },
			  { text: "OK", onPress: () => console.log("OK Pressed") }
			],
			{ cancelable: false }
		  );
		}
	
		if(route.params && selectedDates){
		  navigation.navigate("Places",{
			rooms:rooms,
			adults:adults,
			children:children,
			selectedDates:selectedDates,
			place:place
		  })
		}
	  };
	return (
        <>
		<View>
			<Header />
			<ScrollView>
				<View style={{ margin: 20, borderColor: '#FFC72C', borderWidth: 3, borderRadius: 6 }}>
					{/*Destination */}
					<Pressable
                    onPress={()=>navigation.navigate("Search")}
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
						<TextInput placeholderTextColor="black" placeholder={ route?.params ? route.params.input : "Enter Your Destination"} />
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
							placeholder={'Select date'}
							mode={'range'}
						/>
					</Pressable>
					{/*rooms and guests */}
					<Pressable
                    onPress={()=>{setModalVisible(!modalVisible)}}
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
						<FontAwesome name="user-o" size={24} color={"black"} />
						<TextInput placeholderTextColor="red" placeholder={`${rooms} room - ${adults} Adults - ${children} children`} />
					</Pressable>
					{/* search */}
					<Pressable
                    onPress={()=>searchPlaces(route?.params.input)}
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
                <Text style={{marginHorizontal:20, fontSize:17, fontWeight:"500", marginVertical:15}}>Travel more spend less</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Pressable style={{width:200, height:150, marginTop:10,  borderColor:"#E0E0E0",borderWidth:2, borderRadius:15, padding:10, marginHorizontal:10}}>
                        <Text style={{ fontSize:15, fontWeight:"bold", marginVertical:7}}>Genius</Text>
                        <Text style={{ fontSize:15, fontWeight:"bold"}}>You are at Genius level 100</Text>
                    </Pressable>

                    <Pressable style={{width:200, height:150, marginTop:10, backgroundColor:"#003580", borderRadius:15, padding:10, marginHorizontal:10}}>
                        <Text style={{color:'white', fontSize:15, fontWeight:"bold", marginVertical:7}}>15% Discount</Text>
                        <Text style={{color:'white', fontSize:15, fontWeight:"bold"}}>Complete 5 stays to unlock 2</Text>
                    </Pressable>

                    <Pressable style={{width:200, height:150, marginTop:10, borderColor:"#E0E0E0",borderWidth:2, borderRadius:15, padding:10, marginHorizontal:10}}>
                        <Text style={{fontSize:15, fontWeight:"bold", marginVertical:7}}>10% Discount</Text>
                        <Text style={{ fontSize:15, fontWeight:"bold"}}>Enjoy discounts at participating at properties worldwide</Text>
                    </Pressable>
                </ScrollView>
			</ScrollView>
		</View>
        <BottomModal swipeThreshold={200} onBackdropPress={()=>setModalVisible(!modalVisible)} swipeDirection={['up', 'down']} footer={<ModalFooter>
            <ModalButton text="Apply" style={{marginBottom:20, color:"white", backgroundColor:"#003580"}} onPress={()=>setModalVisible(!modalVisible)}/>
        </ModalFooter>}
        modalTitle={<ModalTitle title="Select rooms and guests"/>}
        modalAnimation={new SlideAnimation({
            slideFrom:"bottom"

        })}
        onHardwareBackPress={()=>setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={()=>setModalVisible(!modalVisible)}>
        <ModalContent style={{width:"100%", height:310}}>
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginVertical:15}}>
            <Text style={{fontSize:16, fontWeight:"500"}}>Rooms</Text>
            <Pressable style={{flexDirection:"row", alignItems:"center", gap:10}}>
            <Pressable onPress={()=>setRoom(Math.max(1, room-1))}style={{width:26, height:26 ,borderRadius:13, borderColor:"#8EBEBE", backgroundColor:"#E0E0E0"}}>
                <Text style={{textAlign:"center", fontSize:20, fontWeight:"600",paddingHorizontal:6}}>-</Text>
            </Pressable>
            <Pressable>
                <Text>{rooms}</Text>
            </Pressable>
            <Pressable onPress={()=>setRooms((e)=>e+1)} style={{width:26, height:26 ,borderRadius:13, borderColor:"#8EBEBE", backgroundColor:"#E0E0E0"}}>
            <Text style={{textAlign:"center", fontSize:20, fontWeight:"500", paddingHorizontal:6}}>+</Text>
            </Pressable>
            </Pressable>
        </View>
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginVertical:15}}>
            <Text style={{fontSize:16, fontWeight:"500"}}>Adult</Text>
            <Pressable style={{flexDirection:"row", alignItems:"center", gap:10}}>
            <Pressable onPress={()=>setAdults(Math.max(1, adults-1))} style={{width:26, height:26 ,borderRadius:13, borderColor:"#8EBEBE", backgroundColor:"#E0E0E0"}}>
                <Text style={{textAlign:"center", fontSize:20, fontWeight:"600",paddingHorizontal:6}}>-</Text>
            </Pressable>
            <Pressable>
                <Text>{adults}</Text>
            </Pressable>
            <Pressable onPress={()=>setAdults((c)=>c+1)} style={{width:26, height:26 ,borderRadius:13, borderColor:"#8EBEBE", backgroundColor:"#E0E0E0"}}>
            <Text style={{textAlign:"center", fontSize:20, fontWeight:"500", paddingHorizontal:6}}>+</Text>
            </Pressable>
            </Pressable>
        </View>
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginVertical:15}}>
            <Text style={{fontSize:16, fontWeight:"500"}}>Children</Text>
            <Pressable style={{flexDirection:"row", alignItems:"center", gap:10}}>
            <Pressable onPress={()=>setChildren(Math.max(0, children-1))} style={{width:26, height:26 ,borderRadius:13, borderColor:"#8EBEBE", backgroundColor:"#E0E0E0"}}>
                <Text style={{textAlign:"center", fontSize:20, fontWeight:"600",paddingHorizontal:6}}>-</Text>
            </Pressable>
            <Pressable>
                <Text>{children}</Text>
            </Pressable>
            <Pressable onPress={()=>setChildren((c)=>c+1)} style={{width:26, height:26 ,borderRadius:13, borderColor:"#8EBEBE", backgroundColor:"#E0E0E0"}}>
            <Text style={{textAlign:"center", fontSize:20, fontWeight:"500", paddingHorizontal:6}}>+</Text>
            </Pressable>
            </Pressable>
        </View>
        </ModalContent>
        </BottomModal>
        </>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});

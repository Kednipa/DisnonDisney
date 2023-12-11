import { View, Text, TextInput, Image, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native'

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, get } from 'firebase/database';
import { useState, useEffect } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyCWRyjQSoYoEqecKFsVjW4NCNsNrnGjIPY",
    authDomain: "disney-74b40.firebaseapp.com",
    databaseURL: "https://disney-74b40-default-rtdb.firebaseio.com",
    projectId: "disney-74b40",
    storageBucket: "disney-74b40.appspot.com",
    messagingSenderId: "135970097591",
    appId: "1:135970097591:web:93189a71ca7aaf1fdfc032",
    measurementId: "G-4PTH0J2HZE"
};

const firebaseApp2 = initializeApp(firebaseConfig, "app2");

const ReviewScreen2 = () => {

    const disneyRef = ref(getDatabase(firebaseApp2), 'Disneyland/');
    const [data, setData] = useState("");
    const _readDB = () => {
        get(disneyRef).then((snapshot) => {
            if (snapshot.exists()) {
                setData({ disneyData: snapshot.val() })
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        _readDB();
    }, [])

    
    return (
        <View className='bg-neutral-50 max-h-screen'>
            <View className='items-center my-5'>
                <Text className='items-center text-purple-950 text-3xl font-bold'>Overview</Text>
            </View>
            <ScrollView className="h-3/4 px-5 gap-3 mb-4">
                {data?
                 data.disneyData.map(( data , i) => {
                    return(
                        <View className='items-center py-3 rounded-md shadow-sm  flex-row bg-white px-2 ' key={i}>
                            <Image className='w-20 h-20 rounded-full' source={require('./images/Bibble-on-fire.jpg')} />
                            <Text className='m-2 pr-20'>{data.ReviewText}</Text>
                        </View>
                        )
                }) : <Text> Loading </Text> }
            </ScrollView>
            <View className="flex-row items-center border border-purple-950/40 rounded-3xl p-4 space-x-2 pl-6 mx-2">
                <TextInput
                    placeholder='comment as pppp'
                    placeholderTextColor='#3B0764'
                    className="flex-1 text-base mb-1 pl-1 tracking-wider " />
            </View>
        </View>
    )
}
export default ReviewScreen2

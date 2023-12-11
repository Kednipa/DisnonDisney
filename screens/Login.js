import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeVDNO8crfKr8me9WCErDSBi8u26K09cY",
  authDomain: "des427-ac973.firebaseapp.com",
  projectId: "des427-ac973",
  storageBucket: "des427-ac973.appspot.com",
  messagingSenderId: "719305415907",
  appId: "1:719305415907:web:ced9d794ea60071d8af9d6",
  measurementId: "G-H4Z152JK40"
};

initializeApp(firebaseConfig);

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const doLogin = () => {
    console.log(email, password);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(() => {
      console.log("login successful");
      navigation.push('Home')
    })
      .catch(function (error) {
        console.log(error.code);
        console.log(error.message);
        alert(error.message);
      })
  }

  return (
    <View className="gap-10 h-screen" style={{
      backgroundColor: '#E0DAEA',
    }}>

      {/*Login*/}
      <View className="py-20 px-5">
        <View className="space-y-10  ">
          <View className=" space-y-6">
            <Text className="text-purple-950 text-xl font-bold ">Email</Text>

            <TextInput
              value={email}
              placeholder='Email'
              onChangeText={setEmail}
              clearButtonMode='while-editing'
              placeholderTextColor={'gray'}
              className=" bg-neutral-50 rounded-3xl tracking-wider p-3 pl-4" />

          </View>

          <View className="flex-column space-y-6 justify-center">
            <Text className="text-purple-950 text-xl font-bold ">Password</Text>
            <TextInput
            secureTextEntry
              value={password}
              placeholder='Password'
              onChangeText={setPassword}
              clearButtonMode='while-editing'
              placeholderTextColor={'gray'}
              className=" bg-neutral-50 rounded-3xl tracking-wider p-3 pl-4 " />

            <View className='items-center'>
              <TouchableOpacity className=" bg-purple-950 rounded p-1 px-2" onPress={doLogin}>
                <Text className="text-white text-base ">Login</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>






    </View>
  )
}

export default Login


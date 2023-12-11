import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView className="gap-10" style={{
      backgroundColor: '#E0DAEA',
    }}>

      {/*Login*/}
      <View className="py-20 px-5">
            <View className=" justify-center space-y-10 flex-column ">
              <View className=" flex-column space-y-6">
                <Text className="text-purple-950 text-xl font-bold ">Email</Text>
                <View className=" bg-neutral-50 rounded-3xl space-x-2 pl-10 p-3">
                    <TextInput
                      placeholder='Email'
                      placeholderTextColor={'gray'}
                      className="flex-1 text-base mb-1 pl-1 tracking-wider " />
                </View>
              </View>

              <View className="flex-column space-y-6 justify-center">
                <Text className="text-purple-950 text-xl font-bold ">Password</Text>
                <View className=" bg-neutral-50 rounded-3xl space-x-2 pl-10 p-3">
                    <TextInput
                      placeholder='Password'
                      placeholderTextColor={'gray'}
                      className="flex-1 text-base mb-1 pl-1 tracking-wider " />
                </View>
              <View className="items-center">
                <TouchableOpacity className=" bg-purple-950 rounded p-1 w-12 " onPress={() => { navigation.push('Home') }}>
                      <Text className="text-white text-base ">Login</Text>
                </TouchableOpacity>
              </View>
              </View>
            
            </View>
          </View>



  
        
    
    </ScrollView>
  )
}

export default Login


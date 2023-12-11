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
       <View className='flex-1 justify-center' style={{backgroundColor: '#E0DAEA'}}>
          <View className='items-center'>
          <View className="px-5 my-10 ">
            <Text className="text-xl font-bold text-purple-950 mb-3">Login</Text>
          </View>

          <View className='flex flex-col gap-4'>
            <Text className="text-xl font-bold text-purple-900 mb-3">Email</Text>
            <TextInput 
            placeholder="Enter email address"
            onChangeText={(text) => setEmail(text)} />
            <Text className="text-xl font-bold text-purple-900 mb-3">Password</Text>
            <TextInput 
            placeholder="Enter password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)} />
          </View>

          <View>
          <TouchableOpacity className=" bg-purple-950 rounded p-1" onPress={() => { navigation.push('Review') }}>
                    <Text className="text-white text-base ">Login</Text>
          </TouchableOpacity>
        </View>
        
        
        </View>
      </View>

      






    </ScrollView>
  )
}

export default Login


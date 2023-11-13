import { View, Text,TextInput,Image,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid'



const HomeScreen = () => {
  return (
    <ScrollView className="flex-1 gap-10 ">

      {/* Searh bar */ } 
      <View className="mx-5 mb-4">
                    <View className="flex-row items-center bg-neutral-50 rounded-full p-4 space-x-2 pl-6">
                        <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray"/>
                          <TextInput
                          placeholder='Search'
                          placeholderTextColor={'gray'} 
                          className="flex-1 text-base mb-1 pl-1 tracking-wider "/>
                    </View>
      </View>

     {/* Latest news & card*/ } 
     <View>
      <View className="flex-col d-flex justify-start gap-8">
        <Text className="text-purple-950 text-3xl font-bold">Latest news</Text>
          <View className="d-flex justify-center items-center ">
            <Image source={require('./images/d_halloween.png')}/>
          </View>
      </View>
      </View>

      {/* Incoming Events*/ } 
      <View className="">
        <Text className="text-purple-950 text-3xl font-bold">Incoming events</Text>

      <View className="flex-col d-flex justify-start gap-1 ">
        {/* Card 1*/ }
        <View className=" items-center flex-row gap-16 pr-1 rounded-2xl shadow-sm ">
          <View>
            <Image source={require('./images/d3.png')}/>
          </View>
          <View className="justify-center ">
          <View className="flex-column items-start gap-2 justify-center self-stretch">
              <Text className="text-purple-950 text-xl font-bold ">New Zone!</Text>
              <TouchableOpacity className=" bg-purple-950 rounded p-1">
                <Text className="text-white text-base ">Visit website</Text>
              </TouchableOpacity>
          </View>
          </View>
        </View>

        {/* Card 2*/ }
        <View className=" items-center flex-row gap-16 pr-1 rounded-2xl shadow-sm ">
          <View>
            <Image source={require('./images/d4.png')}/>
          </View>
          <View className="justify-center ">
          <View className="flex-column items-start gap-2 justify-center self-stretch">
              <Text className="text-purple-950 text-xl font-bold ">Disneyland Paris</Text>
              <TouchableOpacity className=" bg-purple-950 rounded p-1 ">
                <Text className="text-white text-base ">Visit website</Text>
              </TouchableOpacity>
          </View>
          </View>
        </View>
      </View>
    </View>

    {/* Comment section*/}

    
    {/* Comment */ } 

    <Text className="text-purple-950 text-xl font-bold ">Share the magic of your visits</Text>
    <View className="mx-5 mb-4">
        <View className="flex-row items-center bg-neutral-50 rounded-full p-4 space-x-2 pl-6">
          <TextInput
          placeholder='Any tips or advice for first-time visitors'
          placeholderTextColor={'purple'} 
           className="flex-1 text-base mb-1 pl-1 tracking-wider "/>
          </View>
    </View>



  </ScrollView>
  )
}

export default HomeScreen
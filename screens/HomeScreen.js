import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native'
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid'



const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView className="gap-10" style={{
      backgroundColor: '#E0DAEA',
    }}>
      <View className='p-4 space-y-6'>

        {/* Searh bar */}
        <View className="mx-5 my-4 space-y-4">
          <View className="flex-row items-center bg-neutral-50 rounded-full p-4 space-x-2 pl-6">
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput
              placeholder='Search'
              placeholderTextColor={'gray'}
              className="flex-1 text-base mb-1 pl-1 tracking-wider " />
          </View>
        </View>

        {/* Latest news & card*/}
        <View className="space-y-10">
          <View className="flex-col d-flex justify-start gap-5 mb-4">
            <Text className="text-purple-950 text-3xl font-bold">Latest news</Text>
            <View className="d-flex justify-center items-center ">
              <Image source={require('./images/d_halloween.png')} />
            </View>
          </View>
        </View>

        {/* Incoming Events*/}
        <View className="space-y-4">
          <Text className="text-purple-950 text-3xl font-bold">Incoming events</Text>
          <View className="gap-5 my-2 space-y-8">
            {/* Card 1*/}
            <View className="flex-row rounded-2xl shadow-sm bg-white text-purple-950">
              <View>
                <Image source={require('./images/d3.png')} />
              </View>
              <View className="justify-center flex-1">
                <View className="items-center">
                  <Text className="text-purple-950 text-xl font-bold ">New Zone!</Text>
                  <TouchableOpacity className=" bg-purple-950 rounded p-1 " onPress={()=>{navigation.push('Review')}}>
                    <Text className="text-white text-base">Review</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Card 2*/}
            <View className="flex-row rounded-2xl shadow-sm bg-white text-purple-950">
              <View>
                <Image source={require('./images/d4.png')} />
              </View>
              <View className="justify-center flex-1">
                <View className="items-center ">
                  <Text className="text-purple-950 text-xl font-bold ">Discover  more</Text>
                  <TouchableOpacity className=" bg-purple-950 rounded p-1" onPress={() => { navigation.push('About us') }}>
                    <Text className="text-white text-base ">About us</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Comment section*/}


        {/* Comment */}

        <View className='my-3 space-y-4'>
          <Text className="text-purple-950 text-xl font-bold ">Share the magic of your visits</Text>
          <View className="my-2 items-end">
            <View className="flex-row items-center bg-neutral-50 rounded-md p-4 space-x-2 pl-6">
              <TextInput
                placeholder='Any tips or advice for first-time visitors'
                placeholderTextColor={'gray'}
                className="flex-1 text-base mb-1 pl-1 tracking-wider " />
            </View>
              <TouchableHighlight underlayColor="none" className="items-end mt-3 mr-5  " onPress={()=>{alert('hello')}}><Text className="text-purple-950 font-bold">Post</Text></TouchableHighlight >
          </View>

          <TouchableOpacity className=" bg-purple-950 rounded p-1" onPress={() => { navigation.push('Login') }}>
                    <Text className="text-white text-base ">Login</Text>
          </TouchableOpacity>

        </View>
      </View>




    </ScrollView>
  )
}

export default HomeScreen


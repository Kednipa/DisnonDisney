import { View, Text, TextInput, Image, TouchableHighlight, ScrollView } from 'react-native'
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid'



const ReviewScreen = ({ navigation }) => {
  return (
    <ScrollView className="flex-1" style={{
      backgroundColor: '#E0DAEA',
    }}>
      <View className="mx-5">
        <View className="mt-3 ">
          <Text className='text-2xl text-purple-950 font-semibold my-3'>Explore Disneyland!</Text>
          {/* Card Main Paris */}
          <View className='bg-white py-5 rounded-2xl'>
            <View className='items-center'>
              <Image source={require('./images/d5.png')} />
            </View>
            <View className='items-center gap-3 mt-2'>
              <Text className='text-purple-950 text-3xl font-bold'>Disneyland Paris</Text>
              <Text className='text-purple-950 '>Bd de Parc, 77700 Coupvray, France</Text>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#2E0674"
                onPress={() => navigation.push('Review2')}
                className="bg-white px-5 py-1 rounded-xl border border-purple-950">
                <Text className='text-purple-950 text-lg'>Review</Text></TouchableHighlight>
            </View>
          </View>

        </View>

        <View className="flex-wrap flex-row mt-5 justify-between">
          {/* Card1 */}
          <View className='bg-white py-5 rounded-2xl px-4'>
            <View className='items-center'>
              <Image source={require('./images/d7.png')} />
            </View>
            <View className='items-center mt-2'>
              <Text className='text-purple-950 text-lg '>California</Text>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#2E0674"
                onPress={() => alert('Pressed!')}
                className="bg-white px-5 py-1 rounded-xl border border-purple-950 mt-2">
                <Text className='text-purple-950 text-sm '>Review</Text></TouchableHighlight>
            </View>
          </View>
          
          {/* Card2 */}
          <View className='bg-white py-5 rounded-2xl px-4'>
            <View className='items-center'>
              <Image source={require('./images/d6.png')} />
            </View>
            <View className='items-center mt-2'>
              <Text className='text-purple-950 text-lg '>Tokyo</Text>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#2E0674"
                onPress={() => alert('Pressed!')}
                className="bg-white px-5 py-1 rounded-xl border border-purple-950 mt-2">
                <Text className='text-purple-950 text-sm '>Review</Text></TouchableHighlight>
            </View>
          </View>

          {/* Card3 */}
          <View className='bg-white py-5 rounded-2xl px-4 mt-5'>
            <View className='items-center'>
              <Image source={require('./images/d8.png')} />
            </View>
            <View className='items-center mt-2'>
              <Text className='text-purple-950 text-lg '>Hong Kong</Text>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#2E0674"
                onPress={() => alert('Pressed!')}
                className="bg-white px-5 py-1 rounded-xl border border-purple-950 mt-2">
                <Text className='text-purple-950 text-sm '>Review</Text></TouchableHighlight>
            </View>
          </View>





        </View>
      </View>



    </ScrollView>
  )
}

export default ReviewScreen


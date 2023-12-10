import { View, Text, TextInput, Image, TouchableOpacity, TouchableHighlight,ScrollView } from 'react-native'
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid'



const Aboutus = () => {
  return (
   <View className='flex-1 justify-center' style={{backgroundColor: '#E0DAEA'}}>
    <View className='items-center'>
        <Image source={require('./images/d9.png')} />
        <View className="px-5 my-10 ">
            <Text className="text-xl font-bold text-purple-950 mb-3">About Us</Text>
            <Text className='text-purple-950 '>Walter Elias Disney was an American animator, film producer, and entrepreneur. A pioneer of the American animation industry, he introduced several developments in the production of cartoons.</Text>
        </View>
        <View>
            <TouchableHighlight 
             activeOpacity={0.6}
             underlayColor="#2E0674"
             onPress={() => alert('Pressed!')}
             className="bg-white px-5 py-3 rounded-xl border border-purple-950">
                
                <Text className='text-purple-950 '>Contact us</Text></TouchableHighlight>
        </View>
        
    </View>
   </View>
  )
}

export default Aboutus


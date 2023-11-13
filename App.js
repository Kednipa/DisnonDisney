import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ReviewScreen from './screens/ReviewScreen';
import CommentScreen from './screens/ReviewScreen2';
import Aboutus from './screens/Aboutus';
import Signup from './screens/Signup';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        {/*<Stack.Screen name="Review" component={ReviewScreen}/>
        <Stack.Screen name="Comment" component={CommentScreen}/>
        <Stack.Screen name="About us" component={Aboutus}/>
        <Stack.Screen name="Sign up" component={Signup}/>*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


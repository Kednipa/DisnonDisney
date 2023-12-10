import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ReviewScreen from './screens/ReviewScreen';
import CommentScreen from './screens/ReviewScreen2';
import Aboutus from './screens/Aboutus';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#2E0674'
        },
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="About us" component={Aboutus}/>
        {/*<Stack.Screen name="Review" component={ReviewScreen}/>
        <Stack.Screen name="Comment" component={CommentScreen}/>
        
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


import { createStackNavigator } from '@react-navigation/stack';
import Login from '../auth/Login';
import SignUp from '../auth/SignUp';
import MytabNavigation from './MytabNavigation';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="tabs" component={MytabNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});

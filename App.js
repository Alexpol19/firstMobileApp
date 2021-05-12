import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './src/screens/Home';
import Initial from './src/screens/Initial/index.js';
import Login from './src/screens/Login/index.js';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial">
        <Stack.Screen name="Initial" component={Initial} options={{title: "Initial Page"}} />
        <Stack.Screen name="Login" component={Login} options={{title: "Login Page"}} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;

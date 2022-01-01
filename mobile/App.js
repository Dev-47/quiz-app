/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import IntroPage from './src/screens/IntroPage';
import LoginPage from './src/screens/LoginPage';
import LogInRegister from './src/screens/LogInRegister';
import RegisterPage from './src/screens/RegisterPage';
import ResetPassPage from './src/screens/ResetPassPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="IntroPage"
        screenOptions={{headerShown: false}}>
        {/* <View style={styles.container}> */}
        {/* <IntroPage /> */}
        {/* <LogInRegister /> */}
        {/* <LoginPage /> */}
        {/* <ResetPassPage /> */}
        {/* <RegisterPage /> */}
        {/* </View> */}
        <Stack.Screen name="IntroPage" component={IntroPage} />
        <Stack.Screen name="LoginRegister" component={LogInRegister} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="ResetPassPage" component={ResetPassPage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    height: '100%',
  },
});

export default App;

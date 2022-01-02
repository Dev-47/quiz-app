import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DevLogo from '../../components/Dev47';
import {styles} from './styles';

function LogInRegister({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <DevLogo />

        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>
            Welcome to {''}
            <Text style={styles.titleText2}>
              <Text style={styles.dev}>Dev</Text> 47
            </Text>
          </Text>
          <Text style={[styles.welcomeText, {marginLeft: 35}]}> Quizz App</Text>
        </View>
      </View>

      <View style={styles.btnContainer}>
        {/* Login Button */}
        <TouchableOpacity
          style={[styles.btn, {backgroundColor: 'blue'}]}
          onPress={() => navigation.navigate('LoginPage')}
        >
          <Text style={{color: '#fff'}}>Login</Text>
        </TouchableOpacity>

        {/* Register Button */}
        <TouchableOpacity
          style={[styles.btn, {backgroundColor: '#fff'}]}
          onPress={() => navigation.navigate('RegisterPage')}
        >
          <Text style={{color: 'blue'}}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LogInRegister;

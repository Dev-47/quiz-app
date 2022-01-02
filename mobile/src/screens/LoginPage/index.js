import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

function LoginPage({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Ionicons
          name="chevron-back"
          size={30}
          color={'#535353'}
          style={{marginTop: 20, marginLeft: 20}}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            <Text style={styles.dev}>DEV</Text> 47
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput placeholder="Email" style={styles.textInput} />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.textInput}
          />

          <TouchableOpacity
            style={styles.forgetPass}
            onPress={() => navigation.navigate('ResetPassPage')}
          >
            <Text style={styles.text}>Forget Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.textInput,
              {backgroundColor: 'blue', alignItems: 'center'},
            ]}
          >
            <Text style={[styles.text, {color: '#fff'}]}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.register}>
          <Text style={styles.text}>
            Don't have an account?{' '}
            {/* <TouchableOpacity style={{marginTop: 10}}> */}
            <Text
              style={[styles.text, {color: 'blue', textTransform: 'uppercase'}]}
              onPress={() => navigation.navigate('RegisterPage')}
            >
              {' '}
              Register Now.
            </Text>
            {/* </TouchableOpacity> */}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginPage;

import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ResetPassPage({navigation}) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="chevron-back"
        size={30}
        color={'#000'}
        style={{marginTop: 20, marginLeft: 20}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          <Text style={styles.dev}>DEV</Text> 47
        </Text>
      </View>

      <View style={styles.resetContainer}>
        <View style={styles.texts}>
          <Text style={styles.textMain}>Reset Password</Text>
          <Text style={styles.textSub}>
            Enter your mail below to reset password.
          </Text>
        </View>
      </View>

      <View style={styles.inputBox}>
        <TextInput placeholder="Email" style={styles.btn} />
        <TouchableOpacity style={[styles.btn, styles.btnReset]}>
          <Text style={{color: '#fff', fontSize: 16}}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ResetPassPage;
